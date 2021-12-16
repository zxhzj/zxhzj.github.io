/* 
 * Grid
 * Contains a grid of Tiles and APIs to generate, clear, mark, etc.
 * (c) 2015 Q42
 * http://q42.com | @q42
 * Written by Martin Kool
 * martin@q42.nl | @mrtnkl
 */
function Grid(size, height, id) {
  var self = this,
      id = id || 'board';
      width = size,
      height = height || size,
      tiles = [],
      saveSlots = {},
      renderTOH = 0,
      rendered = false,
      noRender = false;
      emptyTile = new Tile(-99,self,-99),
      currentPuzzle = null;

  var hint = self.hint = new Hint(this);

  function each(handler) {
    for (var i=0; i<tiles.length; i++) {
      var x = i%width,
          y = Math.floor(i/width),
          tile = tiles[i],
          result = handler.call(tile, x, y, i, tile);
      if (result)
        break;
    }
    return self;
  }

  function load(puzzle) {
    currentPuzzle = puzzle;
    width = puzzle.size,
    height = puzzle.size,
    tiles = [];

    for (var i=0; i<puzzle.empty.length; i++) {
      var v = puzzle.empty[i],
          tile = new Tile(v, self, i, true);
      tiles.push(tile);
    }
  }

  function getIndex(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height)
      return -1;
    return y * width + x;
  }

  function render() {
  }

  function domRenderer(direct) {
    if (noRender) return;
    clearTimeout(renderTOH);
    if (!direct) {
      renderTOH = setTimeout(function() {domRenderer(true);}, 0);
      return;
    }
    if (Game.debug)
      console.log('rendering...')
    
    rendered = false;
    var html = '<table data-grid="' + id + '" id="grid" cellpadding=0 cellspacing=0>';
    for (var y=0; y<height; y++) {
      html += '<tr>';
      for (var x=0; x<width; x++) {
        var index = getIndex(x,y),
            tile = tiles[index],
            label = '',
            value = '';

        //console.log(x, y, tile.type, tile.value)

        switch (tile.type) {
          case Tile.Type.Value:
            label = 2;
            value = tile.value;
            break;
          case Tile.Type.Wall:
            label = 1;
            break;
          case Tile.Type.Dot:
            label = 2;
            break;
        }

        var odd = (x + (y % 2)) % 2;
        html += '<td data-x="'+x+'" data-y="'+y+'" class="' + (odd? 'even' : 'odd') + '"><div id="tile-' + x + '-' + y + '" class="tile tile-' + label + '"><div class="inner">' + value + '</div></div></td>';
      }      
      html += '</tr>';
    }
    html += '</table>';
    $('#' + id).html(html);
    Game.resize();
    rendered = true;
    return self;
  }

  function isDone(allowDots) {
    for (var i=0; i<tiles.length; i++) {
      if (tiles[i].type == Tile.Type.Unknown || (!allowDots && tiles[i].type == Tile.Type.Dot))
        return false;
    }
    return true;
  }

  function fillDots(overwriteNumbers) {
    for (var i=0; i<tiles.length; i++) {
      var tile = tiles[i];
      if (tile.type == Tile.Type.Unknown)
        tile.dot();
      if (tile.type == Tile.Type.Value && overwriteNumbers)
        tile.dot();
    }
    render();
    return self;
  }

  function number(x, y, n) {
    tile(x,y).number(n);
    render();
    return self;
  }

  function dot(x, y) {
    tile(x,y).dot();
    render();
    return self;
  }

  function wall(x, y) {
    tile(x,y).wall();
    render();
    return self;
  }

  function tile(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height)
      return null;
    return tiles[getIndex(x,y)];
  }

  function noWallsAround(tile) {
    var r = tile.right(),
        l = tile.left(),
        u = tile.up(),
        d = tile.down();
    return (!tile.isWall() 
        && (!r || !r.isWall())
        && (!l || !l.isWall())
        && (!u || !u.isWall())
        && (!d || !d.isWall())
        ); 
  }

  function generate(size) {
    var len = size * size;
    width = height = size;
    for (var i=0; i<len; i++) {
      var tile = new Tile(-1, self, i);
      tiles.push(tile);
    }
    fillDots();
    solve();
  }

  // get every number down to its max or below
  function maxify(maxAllowed) {
    var tryAgain = true,
        attempts = 0,
        tile,
        maxAllowed = maxAllowed || width;

    while (tryAgain && attempts++ < 99) {
      tryAgain = false;
      var maxTiles = [];

      for (var i=0; i<tiles.length; i++) {
        tile = tiles[i];
        if (tile.value > maxAllowed) {
          maxTiles.push(tile);
        }
      }
      Utils.shuffle(maxTiles);

      for (var i=0; i<maxTiles.length; i++) {
        tile = maxTiles[i];
        if (tile.value > maxAllowed) {
          var min = 1,
              max = maxAllowed,
              cuts = tile.getTilesInRange(min, max),
              cut = null,
              firstCut = null;
          
          Utils.shuffle(cuts);
          
          while (!cut && cuts.length) {
            cut = cuts.pop();
            if (!firstCut)
              firstCut = cut;
            //if (!noWallsAround(cut))
              //cut = null;
          }
          if (!cut)
            cut = firstCut;
          if (cut) {
            cut.wall(true);
            fillDots(true);
            solve();
            tryAgain = true;
          }
          else {
            console.log('no cut found for', tile.x, tile.y, tile.value, cuts, min, max);
          }
          break;
        }
      }
    }
    //console.log('Maxed in ' + attempts + ' attempts')
    render();
  }

  function solve(silent, hintMode) {
    var tryAgain = true;
    var attempts = 0;
    var hintTile = null;
    var pool = tiles;

    // for stepByStep solving, randomize the pool
    if (hintMode) {
      pool = tiles.concat();
      Utils.shuffle(pool);
    }

    while (tryAgain && attempts++ < 99) {
      //console.log('solving, attempt ', attempts);
      
      tryAgain = false;

      if (isDone()) {
        if (silent)
          clearTimeout(renderTOH);
        return true;
      }
      
      // first pass collection
      for (var i=0; i<pool.length; i++) {
        pool[i].info = pool[i].collect();
      }

      // second pass collection, now we have full info
      for (var i=0; i<pool.length; i++) {
        var tile = pool[i],
            info = tile.collect(tile.info);
        
        // dots with no empty tiles in its paths can be fixed
        if (tile.isDot() && !info.unknownsAround && !hintMode) {
          tile.number(info.numberCount, true);
          tryAgain = HintType.NumberCanBeEntered;
          break;
        }
        
        // if a number has unknowns around, perhaps we can fill those unknowns
        if (tile.isNumber() && info.unknownsAround) {

          // if its number is reached, close its paths by walls
          if (info.numberReached) {
            if (hintMode)
              hintTile = tile;
            else
              tile.close();
            tryAgain = HintType.ValueReached;
            break;
          }

          // if a tile has only one direction to go, fill the first unknown there with a dot and retry
          if (info.singlePossibleDirection) {
            if (hintMode)
              hintTile = tile;
            else
              tile.closeDirection(info.singlePossibleDirection, true, 1);
            tryAgain = HintType.OneDirectionLeft;
            break;
          }
          // if its number CAN be reached by filling out exactly the remaining unknowns, then do so!
          //else if (info.canBeCompletedWithUnknowns) {
            //console.log(tile.x, tile.y)
            //tile.close(true);
            //tryAgain = true;
          //}

          // check if a certain direction would be too much
          for (var dir in Directions) {
            var curDir = info.direction[dir];
            if (curDir.wouldBeTooMuch) {
              if (hintMode)
                hintTile = tile;
              else
                tile.closeDirection(dir);
              tryAgain = HintType.WouldExceed;
              break;
            }
            // if dotting one unknown tile in this direction is at least required no matter what
            else if (curDir.unknownCount && curDir.numberWhenDottingFirstUnknown + curDir.maxPossibleCountInOtherDirections <= tile.value) {
              if (hintMode)
                hintTile = tile;
              else
                tile.closeDirection(dir, true, 1);
              tryAgain = HintType.OneDirectionRequired;
              break;
            }
          }
          // break out the outer for loop too
          if (tryAgain)
            break;
        }
        // if a number has its required value around, but still an empty tile somewhere, close it
        // (this core regards that situation FROM the empty unknown tile, not from the number itself)
        // (but only if there are no tiles around that have a number and already reached it)
        if (tile.isUnknown() && !info.unknownsAround && !info.completedNumbersAround) {
          if (info.numberCount == 0) {
            if (hintMode)
              hintTile = tile;
            else
              tile.wall(true);
            tryAgain = HintType.MustBeWall;
            break;
          }
          //else if (info.numberCount > 0) {
            //tile.number(info.numberCount);
            //tryAgain = 7;
            //break;
          //}
        }
      }
      if (hintMode) {
        hint.mark(hintTile, tryAgain);
        //console.log(tryAgain, tile)
        tryAgain = false;
        return false;
      }
    }

    //console.log(attempts + ' attempts. ' + (tryAgain? 'Not done.' : 'Done.'));
    render();

    if (silent) 
      clearTimeout(renderTOH);

    return false;
  }

  function save(slot) {
    slot = slot || 1;
    saveSlots[slot] = { values: [] };
    for (var i=0; i<tiles.length; i++) {
      saveSlots[slot].values.push(tiles[i].value);
    }
    return self;
  }

  function restore(slot) {
    slot = slot || 1;
    var saveSlot = saveSlots[slot];
    if (!saveSlot) {
      console.log('Cannot restore save slot ', slot);
      return self;
    }
    tiles = [];
    for (var i=0; i<saveSlot.values.length; i++) {
      var value = saveSlot.values[i];
      tiles.push(new Tile(value, self, i))
    }
    render();
    return self;
  }

  function breakDown() {
    var tryAgain = true,
        attempts = 0,
        tile,
        walls = 0,
        minWalls = 1,//Math.round(tiles.length * 0.08),
        pool = [];

    save('full');
    // get the tile set as a shuffled pool
    for (var i=0; i<tiles.length; i++) {
      tile = tiles[i];
      pool.push(tiles[i])

      if (tile.isWall())
        walls++;
    }

    Utils.shuffle(pool);

    while (tryAgain && pool.length && attempts++ < 99) {
      tryAgain = false;
      save(1);
      
      // only use the pool for x,y coordinates, but retrieve the tile again because it has been rebuilt
      var tempTile = pool.pop();
      tile = tiles[getIndex(tempTile.x, tempTile.y)];
      var isWall = tile.isWall();

      // make sure there is a minimum of walls
      if (isWall && walls <= minWalls) continue;

      tile.unknown();
      save(2, tile.x, tile.y);
      if (solve(true)) {
        if (isWall)
          walls--;
        restore(2, tile.x, tile.y);
        tryAgain = true;
      } else {
        //console.log('cannot be solved when removing', tile.x, tile.y)
        restore(1);
        tryAgain = true;
      }
    }
    save('empty');
  }

  // return all tiles that are improperly closed
  function getClosedWrongTiles() {
    var pool = tiles,
        wrongTiles = [];

    // first pass collection
    for (var i=0; i<pool.length; i++) {
      pool[i].info = pool[i].collect();
    }

    // second pass collection, now we have full info
    for (var i=0; i<pool.length; i++) {
      var tile = pool[i],
          info = tile.collect(tile.info);

      if (tile.isNumber()) {
        if (info.numberCount != tile.value && info.unknownsAround == 0)
          wrongTiles.push(tile);
      }
    }
    return wrongTiles;
  }

  function isValid() {
    for (var i=0; i<tiles.length; i++) {
      var tile = tiles[i];
      
      if (tile.isEmpty)
        continue;

      // required value must be a wall
      if (currentPuzzle.full[i] == 1) {
        if (!tile.isWall()) {
          //console.log('wall', i)
          return false;
        }
      }
      // required tile must be a number (or dot)
      else if (currentPuzzle.full[i] > 1) {
        if (!tile.isNumberOrDot()) {
          //console.log('nrOrDot', i)
          return false;
        }
      }
    }
    return true;
  }

  function markRow(y) {
    for (var x=0; x<width; x++)
      tile(x,y).mark();
    return self;
  }
  
  function unmarkRow(y) {
    for (var x=0; x<width; x++)
      tile(x,y).unmark();
    return self;
  }

  function markCol(x) {
    for (var y=0; y<height; y++)
      tile(x,y).mark();
    return self;
  }
  
  function unmarkCol(x) {
    for (var y=0; y<height; y++)
      tile(x,y).unmark();
    return self;
  }

  function unmark(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
      tile(x,y).unmark();
      return self;
    }
    for (var y=0; y<height; y++)
      for (var x=0; x<width; x++)
        tile(x,y).unmark();
    return self;
  }

  function mark(x, y) {
    tile(x,y).mark();
    return self;
  }

  this.activateDomRenderer = function() {
    render = this.render = domRenderer;
    noRender = false;
  }

  function clear() {
    each(function(x,y,i,tile) {
      tile.clear();
    });
  }

  function getValues() {
    var values = [];
    each(function(){ values.push(this.getExportValue())});
    return values;
  }

  function getEmptyTiles() {
    var emptyTiles = [];
    each(function() {
      if (this.isEmpty)
        emptyTiles.push(this);
    })
    return emptyTiles;
  }

  function getQuality() {
    return Math.round(100 * (getEmptyTiles().length / (width * height)));
  }

  function getNextLockedInTile() {
    var lockedInTiles = [];
    each(function(x,y,i,tile) {
      if (tile.isLockedIn())
        lockedInTiles.push(tile);
    });
    if (lockedInTiles.length)
      return Utils.pick(lockedInTiles);
    return false;
  }

  this.each = each;
  this.fillDots = fillDots;
  this.render = render;
  this.solve = solve;
  this.number = number;
  this.wall = wall;
  this.dot = dot;
  this.getIndex = getIndex;
  this.tile = tile;
  this.load = load;
  this.generate = generate;
  this.maxify = maxify;
  this.save = save
  this.restore = restore;
  this.breakDown = breakDown;
  this.clear = clear;
  this.getNextLockedInTile = getNextLockedInTile;
  this.getValues = getValues;
  this.isValid = isValid;
  this.mark = mark;
  this.unmark = unmark;
  this.getClosedWrongTiles = getClosedWrongTiles;

  this.__defineGetter__('tiles', function() { return tiles; })
  this.__defineGetter__('width', function() { return width; })
  this.__defineGetter__('height', function() { return height; })
  this.__defineGetter__('rendered', function() { return rendered; })
  this.__defineGetter__('quality', function() { return getQuality(); })
  this.__defineGetter__('emptyTileCount', function() { return getEmptyTiles().length; })
  this.__defineGetter__('emptyTiles', function() { return getEmptyTiles(); })
  this.__defineGetter__('hint', function() { return hint; })
}