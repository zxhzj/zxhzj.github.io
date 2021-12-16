/* 
 * Tutorial
 * The 0h n0 tutorial with its messages and required tile(s) to tap.
 * (c) 2015 Q42
 * http://q42.com | @q42
 * Written by Martin Kool
 * martin@q42.nl | @mrtnkl
 */
var TutorialMessages = [
  //{ msg: 'Welcome to 0h n0. Tap any tile to continue...', tiles: [], next: true },
  { msg: 'Blue dots can see others <br>in their own row and column <span id="nextdot"></span>', tiles: [], next: true },
  { msg: 'Their numbers tell how many <span id="nextdot"></span>', tiles: [], next: true },

  //{ msg: 'Blue dots can see others. But red dots block their view! <span id="nextdot" class="red"></span>', tiles: [ ], next: true },
  { msg: 'But red dots block their view! <span id="nextdot" class="red"></span>', tiles: [ ], next: true },

  { msg: 'So this 2 can only see <br>dots on the right <span id="nextdot"></span>', tiles: [ [0,0] ], next: true },
  { msg: 'Two dots. These.<br>Tap to make them blue <span id="nextdot"></span>', tiles: [ [1,0,2],[2,0,2] ] },
  { msg: 'Now close its path.<br>Tap twice for a red dot <span id="nextdot" class="red"></span>', tiles: [ /*[0,0],[1,0],[2,0],*/[3,0,1] ] },
  { msg: 'This 1 should see only one.<br>It already does - below! <span id="nextdot"></span>', tiles: [ [3,1] ], next: true },
  { msg: 'So its other path can be closed. Go ahead... <span id="nextdot" class="red"></span>', tiles: [ [2,1,1] ] },
  { msg: 'This 3 can\'t see left or right.<br>But it does see a dot above <span id="nextdot"></span>', tiles: [ [1,1] ], next: true },
  { msg: 'To make it see three dots <br>it needs two more... <span id="nextdot"></span>', tiles: [ [1,2,2],[1,3,2] ] },
  { msg: 'Can you fill out the remaining dots? <span id="nextdot" class="red"></span>', tiles: [ [0,2,1],[2,2,2],[2,3,1] ] },
  
  { msg: '', tiles: [], last: true }
]

var Tutorial = new (function() {
  var self = this,
      step = 0,
      active = false,
      visible = false,
      tilesToTapThisStep = [];



  function start() {
    $('html').addClass('tutorial');
    step = -1;
    active = true;

    Game.startGame({
      size: 4,
      empty: [
        4,0,0,0,
        1,5,0,3,
        0,0,0,5,
        3,0,0,1
      ],
      full: [4, 2, 2, 1, 1, 5, 1, 3, 1, 2, 2, 5, 3, 2, 1, 1],
      isTutorial: true
    });
    next();

    window.Marker && Marker.save('tutorial', 'start');
  }

  function end() {
    if (active) window.Marker && Marker.save('tutorial', 'end');
    $('html').removeClass('tutorial');
    for (var i=0; i<20; i++) $('html').removeClass('tutorial-' + i);
    $('#bar [data-action="help"]').removeClass('hidden wiggle');
    active = false;
  }

  function next() {
    for (var i=0; i<20; i++) $('html').removeClass('tutorial-' + i);
    $('#bar [data-action]').hide();
    $('#bar [data-action="back"]').show();

    if (step >= Utils.count(TutorialMessages)) {
      hide();
      active = false;
      setTimeout(function() {
        Game.checkForLevelComplete();  
      }, 1000)
      return;
    }

    step++;
    var t = TutorialMessages[step];
        msg = t.msg;
    $('html').addClass('tutorial-' + step);
    show(msg);
    tilesToTapThisStep = [];
    Game.grid.unmark();
    $(t.tiles).each(function() {
      tilesToTapThisStep.push(Game.grid.tile(this[0], this[1]));
    });
    setTimeout(function() {
      markTilesForThisStep();
    }, 0)
    if (t.next) {
      //$('#hintMsg span').append('<span id="nextdot"></span>')
      //$('[data-action="continue"]').show().addClass('subtleHintOnce');
    }
    if (t.last)
      active = false;
  }

  function markTilesForThisStep() {
    var t = TutorialMessages[step];
      if (t.rows) 
        $(t.rows).each(function() { Game.grid.markRow(this);});
      else if (t.cols) 
        $(t.cols).each(function() { Game.grid.markCol(this);});
      else
        $(t.tiles).each(function() { Game.grid.mark(this[0], this[1]);});
  }

  function show(msg) {
    $('#hintMsg').html('<span>' + msg + '</span>');
    $('html').addClass('showHint');
    visible = true;
  }

  function hide() {
    $('html').removeClass('showHint');
    visible = false;
  }

  function tapTile(tile) {
    var t = TutorialMessages[step];
    if (nextAllowed()) {
      next();
      return;
    }
    var tapAllowed = false;

    $(tilesToTapThisStep).each(function() {
      if (tile.x == this.x && tile.y == this.y)
        tapAllowed = true;
    })  

    if (!tapAllowed)
      return;

    if (tile.isEmpty)
      tile.dot();
    else if (tile.isDot())
      tile.wall();
    else
      tile.clear();

    setTimeout(markTilesForThisStep, 0);
    checkStepCompleted();
  }

  function checkStepCompleted() {
    var completed = true;
    $(TutorialMessages[step].tiles).each(function() {
      var x = this[0],
          y = this[1],
          tile = Game.grid.tile(x, y),
          value = this[2];
      if (tile.getExportValue() != value)
        completed = false;
      else {
        setTimeout(function() {
          tile.unmark();
          tile.system = true;
        },0);
      }
    })
    if (!completed)
      return;

    $(tilesToTapThisStep).each(function() {
      this.system = true;
    });
    next();
  }

  function hintAllowed() {
    return step >= 9;
  }

  function nextAllowed() {
    var t = TutorialMessages[step];
    return t && t.next? true : false;
  }

  this.start = start;
  this.end = end;
  this.next = next;
  this.show = show;
  this.hide = hide;
  this.tapTile = tapTile;
  this.hintAllowed = hintAllowed;
  this.nextAllowed = nextAllowed;
  
  this.__defineGetter__('active', function() { return active; })
  this.__defineSetter__('active', function(v) { active = v; })
  this.__defineGetter__('visible', function() { return visible; })
  this.__defineGetter__('step', function() { return step; })
})();