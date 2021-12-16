/* 
 * Tile
 * Object for storing a single tile. Allows for collecing its own state information, marking, clearing, etc.
 * (c) 2015 Q42
 * http://q42.com | @q42
 * Written by Martin Kool
 * martin@q42.nl | @mrtnkl
 */
function Tile(tileValue, grid, index, isExportValue) {
  var self = this,
      value = -1,
      type = Tile.Type.Unknown,
      x = this.x = index % grid.width,
      y = this.y = Math.floor(index  / grid.width),
      id = this.id = x + ',' + y;

  // use export value 0-... if flag is set
  if (isExportValue)
    setExportValue(tileValue);
  else
    setValue(tileValue);

  function clear() {
    unknown();
  }

  function setValue(tileValue) {
    if (tileValue == -2) {
      value = tileValue;
      type = Tile.Type.Dot;
    }
    else if (isNaN(tileValue) || tileValue < 0 || tileValue > 90) {
      value = -1;
      type = Tile.Type.Unknown;
    } else {
      value = tileValue;
      type = tileValue == 0? Tile.Type.Wall : Tile.Type.Value;
    }
    render();

    return value;
  }

  function render() {
    if (!grid.render)
      return;

    if (!grid.rendered)
      grid.render();
    else {
      var $tile = $('#tile-' + x + '-' + y),
          label = '',
          value = '';

      switch (type) {
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

      $tile.removeClass().addClass('tile tile-' + label);
      $tile.find('.inner').text(value);
    }
    return self;
  }

  function setType(tileType) {
    switch (tileType) {
      case Tile.Type.Unknown:
        type = tileType;
        value = -1
        break;
      case Tile.Type.Wall:
        type = tileType;
        value = 0;
        break;
      case Tile.Type.Dot:
        type = tileType;
        value = -2;
        break;
      case Tile.Type.Value:
        console.log('Error. Don\'t set tile type directly to Tile.Type.Value.');
        break;
    }
    render();
  }

  function isDot() { return type == Tile.Type.Dot; }
  function isWall() { return type == Tile.Type.Wall; }
  function isNumber() { return type == Tile.Type.Value; }
  function isUnknown() { return type == Tile.Type.Unknown; }

  function isNumberOrDot() { return isNumber() || isDot(); }

  function dot() {
    var result = setType(Tile.Type.Dot);
    return self;
  }

  function wall() {
    var result = setType(Tile.Type.Wall);
    return self;
  }

  function number(n) {
    var result = setValue(n);
    return self;
  }

  function unknown() {
    var result = setType(Tile.Type.Unknown);
    return self;
  }

  function traverse(hor, ver) {
    var newX = x + hor,
        newY = y + ver;
    return grid.tile(newX, newY);
  }

  function right() { return traverse(1, 0); }
  function left() { return traverse(-1, 0); }
  function up() { return traverse(0, -1); }
  function down() { return traverse(0, 1); }
  function move(dir) { 
    switch(dir) {
      case Directions.Right: return traverse(1, 0); break;
      case Directions.Left: return traverse(-1, 0); break;
      case Directions.Up: return traverse(0, -1); break;
      case Directions.Down: return traverse(0, 1); break;
    } 
  }

  function collect(info) {
    // pass 1
    if (!info) {
      info = {
        unknownsAround: 0, // are there still any unknowns around
        numberCount: 0, // how many numbers/dots are seen in all directions
        numberReached: false, // if the current tile is a number and it has that many numbers/dots around
        canBeCompletedWithUnknowns: false, // if the number can be reached by exactly its amount of unknowns
        completedNumbersAround: false, // if the current tile has one or more numberReached tiles around (second pass only)
        singlePossibleDirection: null, // if there's only one way to expand, set this to that direction
        direction: {}
      };
      for (var dir in Directions) {
        info.direction[dir] = {
          unknownCount: 0,
          numberCountAfterUnknown: 0, // how many numbers after an unknown were found
          wouldBeTooMuch: false, // would filling an unknown with a number be too much
          maxPossibleCount: 0, // what would optionally be the highest count?
          maxPossibleCountInOtherDirections: 0,
          numberWhenDottingFirstUnknown: 0, // what number would this direction give when the first unknown was filled
        }
      }
      // the following for loops traverse over the OTHER tiles around the current one
      // so t is always one of the other tiles, giving information over the current tile
      var lastPossibleDirection = null,
          possibleDirCount = 0;

      for (var dir in Directions) {
        // check each direction but end at a wall or grid-boundary
        for (var t = self.move(dir); t && !t.isWall(); t = t.move(dir)) {
          var curDir = info.direction[dir]
          if (t.isUnknown()) {            
            // if this is the first unknown in this direction, add it to the possible-would-be value
            if (!curDir.unknownCount) {
              curDir.numberWhenDottingFirstUnknown++; 
            }
            curDir.unknownCount++;
            curDir.maxPossibleCount++;
            info.unknownsAround++;

            // if we're looking FROM a number, count the possible directions
            if (isNumber() && lastPossibleDirection != dir) {
              possibleDirCount++;
              lastPossibleDirection = dir;
            }
          }
          else if (t.isNumber() || t.isDot()) {
            // count the maximum possible value
            curDir.maxPossibleCount++;
            // if no unknown found yet in this direction
            if (!curDir.unknownCount) {
              info.numberCount++;
              curDir.numberWhenDottingFirstUnknown++; 
            }
            // else if we were looking FROM a number, and we found a number with only 1 unknown in between...
            else if (isNumber() && curDir.unknownCount == 1) {
              curDir.numberCountAfterUnknown++;
              curDir.numberWhenDottingFirstUnknown++; 
              if (curDir.numberCountAfterUnknown + 1 > value) {
                curDir.wouldBeTooMuch = true;
              }
            }
          }
        }
      }

      // if there's only one possible direction that has room to expand, set it
      if (possibleDirCount == 1) {
        info.singlePossibleDirection = lastPossibleDirection;
      }

      // see if this number's value has been reached, so its paths can be closed
      if (isNumber() && value == info.numberCount)
        info.numberReached = true;
      else if (isNumber() && value == info.numberCount + info.unknownsAround)
        // TODO: only set when 
        info.canBeCompletedWithUnknowns = true;
    }
    // pass 2
    else {
      for (var dir in Directions) {
        var curDir = info.direction[dir];
        for (var t = self.move(dir); t && !t.isWall(); t = t.move(dir)) {
          if (t.isNumber() && t.info.numberReached) {
            info.completedNumbersAround = true; // a single happy number was found around
          }
        }
        // if we originate FROM a number, and there are unknowns in this direction
        if (isNumber() && !info.numberReached && curDir.unknownCount) {
          // check all directions other than this one
          curDir.maxPossibleCountInOtherDirections = 0;
          for (var otherDir in Directions) {
            if (otherDir != dir)
              curDir.maxPossibleCountInOtherDirections += info.direction[otherDir].maxPossibleCount;
          }
        }
      }
    }

    // if there's only one possible direction that has room to expand, set it
    if (possibleDirCount == 1) {
      info.singlePossibleDirection = lastPossibleDirection;
    }

    // see if this number's value has been reached, so its paths can be closed
    if (isNumber() && value == info.numberCount)
      info.numberReached = true;
    else if (isNumber() && value == info.numberCount + info.unknownsAround)
      info.canBeCompletedWithUnknowns = true;

    return info;
  }

  // puts a wall in the first empty tiles found in all directions
  function close(withDots) {
    for (var dir in Directions) {
      closeDirection(dir, withDots);
    }
  }

  function closeDirection(dir, withDots, amount) {
    for (var t = self.move(dir), count = 0; t; t = t.move(dir)) {
      if (t.isWall())
        break;
      if (t.isUnknown()) {
        count++;
        if (withDots)
          t.dot(true);
        else {
          t.wall(true);
          break;
        }
      }
      if (count >= amount)
        break;
    }
  }

  // gets all tiles within a range from the current, not through walls though...
  function getTilesInRange(min,max) {
    var self = this,
        result = [],
        max = max || min;

    for (var dir in Directions) {
      var distance = 0;
      for (var t = self.move(dir); t && !t.isWall(); t = t.move(dir)) {
        distance++;
        if (distance >= min && distance <= max)
          result.push(t);
      }
    }
    return result;
  }

  function mark() {
    var $tile = $('#tile-' + x + '-' + y);
    $tile.addClass('marked');
    return self;
  }

  function unmark() {
    var $tile = $('#tile-' + x + '-' + y);
    $tile.removeClass('marked');
    return self;
  }

  // returns a signed int value easy for exporting
  function getExportValue() {
    /*
    unknown = 0
    wall = 1
    dot = 2
    1-... -2?
    */
    switch(type) {
      case Tile.Type.Unknown:
        return 0;
        break;
      case Tile.Type.Wall:
        return 1;
        break;
      case Tile.Type.Dot:
        return 2;
        break;
      case Tile.Type.Value:
        return value + 2;
        break;
    }
  }

  // sets its type and value based on the export value
  function setExportValue(value) {
    /*
    unknown = 0
    wall = 1
    dot = 2
    1-... -2?
    */
    switch(value) {
      case 0:
        unknown();
        break;
      case 1:
        wall();
        break;
      case 2:
        dot();
        break;
      default:
        setValue(value - 2);
        break;
    }
  }

  function isLockedIn() {
    if (!isDot()) return false;
    for (var dir in Directions) {
      if (self.move(dir) && !self.move(dir).isWall())
        return false;
    }
    return true;
  }

  this.mark = mark;
  this.unmark = unmark;
  this.dot = dot;
  this.wall = wall;
  this.number = number;
  this.unknown = unknown;
  this.isDot = isDot;
  this.isWall = isWall;
  this.isNumber = isNumber;
  this.isNumberOrDot = isNumberOrDot;
  this.isUnknown = isUnknown;
  this.isLockedIn = isLockedIn;
  this.collect = collect;
  this.traverse = traverse;
  this.right = right;
  this.left = left;
  this.up = up;
  this.down = down;
  this.move = move;
  this.close = close;
  this.clear = clear;
  this.render = render;
  this.closeDirection = closeDirection;
  this.getTilesInRange = getTilesInRange;
  this.getExportValue = getExportValue;
  this.setExportValue = setExportValue;

  this.__defineGetter__('value', function() { return value; })
  this.__defineSetter__('value', function(v) { return setValue(v); })
  this.__defineGetter__('type', function() { return type; })
  this.__defineSetter__('type', function(v) { return setValue(v); })
  this.__defineGetter__('isEmpty', function() { return value == -1; })
}

function opposite(value) {
  switch(value) {
    case Directions.Right: return Directions.Left;
    case Directions.Left: return Directions.Right;
    case Directions.Up: return Directions.Down;
    case Directions.Down: return Directions.Up;
  }
  return null;
}

Tile.Type = {
  Unknown: 'Unknown',
  Dot: 'Dot',
  Wall: 'Wall',
  Value: 'Value'
}

var Directions = {
  Left: 'Left',
  Right: 'Right',
  Up: 'Up',
  Down: 'Down'
}