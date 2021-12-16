/* 
 * Hint
 * Basic hinting system for providing in-game help when a player gets stuck.
 * (c) 2015 Q42
 * http://q42.com | @q42
 * Written by Martin Kool
 * martin@q42.nl | @mrtnkl
 */
var HintType = {
  None: 'None',
  NumberCanBeEntered:       'NumberCanBeEntered',
  OneDirectionLeft:         'Only one direction remains for this number to look in <span id="nextdot"></span>',
  ValueReached:             'This number can see all its dots <span id="nextdot" class="red"></span>',
  WouldExceed:              'Looking further in one direction would exceed this number <span id="nextdot" class="red"></span>',
  OneDirectionRequired:     'One specific dot is included <br>in all solutions imaginable <span id="nextdot"></span>',
  MustBeWall:               'This one should be easy... <span id="nextdot" class="red"></span>',

  ErrorClosedTooEarly:      'This number can\'t see enough <span id="nextdot"></span>', 
  ErrorClosedTooLate:       'This number sees a bit too much <span id="nextdot" class="red"></span>', 
  Error:                    'This one doesn\'t seem right <span id="nextdot" class="red"></span>',
  Errors:                   'These don\'t seem right <span id="nextdot" class="red"></span>',
  LockedIn:                 'A blue dot should always see at least one other <span id="nextdot"></span>',
  GameContinued:            'You can now continue<br>your previous game <span id="nextdot"></span>'
};

function Hint(grid) {
  var self = this,
      active = false,
      visible = false,
      info = {
        type: HintType.None,
        tile: null
      }

  function clear() {
    hide();
    if (grid)
      grid.unmark();
    active = false;
    info = {
      type: HintType.None,
      tile: null
    }
  }

  function mark(tile, hintType) {
    if (active) {
      info.tile = tile;
      info.type = hintType;
      return true;
    }
    return false;
  }

  function next() {
    var wrongTiles = grid.getClosedWrongTiles();
    if (wrongTiles.length) {
      var wrongTile = Utils.pick(wrongTiles),
          tileInfo = wrongTile.collect(),
          hintType = (tileInfo.numberCount > wrongTile.value? HintType.ErrorClosedTooLate : HintType.ErrorClosedTooEarly);

      wrongTile.mark();
      show(hintType);
      return;
    }

    var lockedInTile = grid.getNextLockedInTile();
    if (lockedInTile) {
      show(HintType.LockedIn);
      lockedInTile.mark();
      return;
    }

    active = true;
    grid.solve(false, true);
    if (info.tile) {
      show(info.type);
      info.tile.mark();
    }
  }

  function show(type) {
    var s = type;
    $('#hintMsg').html('<span>' + s + '</span>');
    $('html').addClass('showHint');
    visible = true;
  }

  function hide() {
    $('html').removeClass('showHint');
    visible = false;
  }

  this.clear = clear;
  this.mark = mark;
  this.next = next;
  this.show = show;
  this.hide = hide;
  
  this.info = info;
  this.__defineGetter__('active', function() { return active; })
  this.__defineSetter__('active', function(v) { active = v; })
  this.__defineGetter__('visible', function() { return visible; })
};