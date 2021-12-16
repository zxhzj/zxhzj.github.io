/* 
 * Game
 * The main 0h n0 game, a singleton object in global scope.
 * (c) 2015 Q42
 * http://q42.com | @q42
 * Written by Martin Kool
 * martin@q42.nl | @mrtnkl
 */
var Game = new (function() {
  var self = this,

      debugSize = 0,
      debug = document.location.hash == '#debug',
      
      tweet = window.isWebApp,
      facebook = window.isWebApp && !$.browser.chromeWebStore,
      showAppsIcon = window.isWebApp,
      startedTutorial = false,
      grid,
      sizes = [5,6,7,8],
      lastSize = 0,
      currentPuzzle = null,
      checkTOH = 0,
      ojoos = ['Wonderful','Spectacular','Marvelous','Outstanding','Remarkable','Shazam','Impressive','Great','Well done','Fabulous','Clever','Dazzling','Fantastic','Excellent','Nice','Super','Awesome','Ojoo','Brilliant','Splendid','Exceptional','Magnificent','Yay'],
      remainingOjoos = [],
      endGameTOH1,
      endGameTOH2,
      endGameTOH3,
      endSubtleHintTOH,
      onHomeScreen = true,
      undoStack = [],
      undone = false,
      inGame = false,
      inText = false,
      gameEnded = true,
      continueLastGame = false,
      systemTilesLockShown = false,
      time = 0,
      timerTOH = 0,
      shareMsg = '#0hn0 It\'s 0h h1\'s companion! Go get addicted to this lovely puzzle game http://0hn0.com (or get the app)!';

  function init() {
    var testDebugSize = document.location.hash.replace(/#/g,'') * 1;
    if (testDebugSize > 0) {
      debug = true;
      debugSize = testDebugSize;
    }

    getScore(function(value) {
      $('#scorenr').html(value);
    });
    $('#tweeturl, #facebook').hide();

    if (!window.isWebApp)
      $('#app').hide();
    
    if (Utils.isTouch())
      $('html').addClass('touch');
    
    $('[data-size]').each(function(i,el){
      var $el = $(el),
          size = $el.attr('data-size') * 1,
          label = sizes[size - 1];
      $el.html(label)
      $el.on('touchstart mousedown', function(evt){
        if (Utils.isDoubleTapBug(evt)) return false;
        var size = sizes[$(evt.target).closest('[data-size]').attr('data-size') * 1 - 1];
        loadGame(size);
      })
    })
    resize();
    $(window).on('resize', resize);
    $(window).on('orientationchange', resize);

    showTitleScreen();
    resize();
    
    var colors = ['#a7327c', '#AA8239', '#c0cd31']

    // aa3388, 2277cc

    //Utils.setColorScheme('#c0cd31');
    Utils.setColorScheme('#ff384b', '#1cc0e0');
    if (window.SocialSharing)
      addNativeSocialHooks();
  }

  // catches taps on tweet/fb buttons and passes them to native share lib
  function addNativeSocialHooks() {
    if (!window.plugins || !window.plugins.socialsharing)
      SocialSharing.install();

    tweet = true;
    facebook = true;
    
    $('#tweeturl').on('click', function(evt){
      evt.stopPropagation();
      evt.preventDefault();
      setTimeout(function() {
        window.plugins.socialsharing.shareViaTwitter(shareMsg);
      },0);
      return false;
    })

    $('#facebook').on('click', function(evt){
      evt.stopPropagation();
      evt.preventDefault();
      setTimeout(function() {
        window.plugins.socialsharing.shareViaFacebook(shareMsg);
      },0);
      return false;
    })
  }

  function start() {
    // kick in the bgservice in a few ms (fixes non-working iOS5)
    setTimeout(function() {
      BackgroundService.kick();
    }, 100);
    if (debug) {
      addEventListeners();
      if (debugSize)
        loadGame(debugSize)
      else
        showMenu();
      return;
    }
    setTimeout(function(){$('.hide0').removeClass('hide0')}, 300);
    setTimeout(function(){$('.hide1').removeClass('hide1')}, 1300);
    setTimeout(function(){$('.hide-title').removeClass('hide-title')}, 2300);
    setTimeout(function(){$('.hide-subtitle').removeClass('hide-subtitle'); addEventListeners();}, 3500);
  }

  function resize() {
    var desired = {
          width: 320,
          height: 480
        },
        aspectRatio = desired.width / desired.height,
        viewport = {
          width: $('#feelsize').width(),
          height: $('#feelsize').height()
        },
        sizeToWidth = ((viewport.width / viewport.height) < aspectRatio)

    var box = {
      width: Math.floor(sizeToWidth? viewport.width : (viewport.height/desired.height) * desired.width),
      height: Math.floor(sizeToWidth? (viewport.width/desired.width) * desired.height : viewport.height)
    }

    $('#container').css({'width': box.width + 'px', 'height': box.height + 'px'});

    var containerSize = box.width;

    $('h1').css('font-size', Math.round(containerSize * .24) + 'px')
    $('h2').css('font-size', Math.round(containerSize * .18) + 'px')
    $('h3').css('font-size', Math.round(containerSize * .15) + 'px')
    $('p').css('font-size', Math.round(containerSize * .07) + 'px')
    $('#menu h2').css('font-size', Math.round(containerSize * .24) + 'px')
    $('#menu p').css('font-size', Math.round(containerSize * .1) + 'px')
    $('#menu p').css('padding', Math.round(containerSize * .05) + 'px 0')
    $('#menu p').css('line-height', Math.round(containerSize * .1) + 'px')
    var scoreSize = Math.round(containerSize * .1);
    $('#score').css({'font-size': scoreSize + 'px', 'line-height': (scoreSize * 0.85) + 'px', 'height': scoreSize + 'px'});

    var iconSize = Math.floor((22/320) * containerSize);
    $('.icon').css({width:iconSize,height:iconSize,marginLeft:iconSize,marginRight:iconSize});

    $('.board table').each(function(i,el){
      var $el = $(el),
          id = $el.attr('data-grid'),
          w = $el.width(),
          size = $el.find('tr').first().children('td').length;
      
      var tileSize = Math.floor(w / size);
      
      if (!tileSize) return;

      $el.find('.tile').css({width:tileSize,height:tileSize,'line-height':Math.round(tileSize * 0.9) + 'px','font-size':Math.round(tileSize * 0.5) + 'px'});
      // var radius = Math.round(tileSize * 0.1);
      // var radiusCss = '#' + id + ' .tile .inner { border-radius: ' + radius + 'px; }' +
      //   '#' + id + ' .tile-1 .inner:after, #' + id + ' .tile-2 .inner:after { border-radius: ' + radius + 'px; }';
      
      //Utils.createCSS(radiusCss, id + 'radius');
      //Utils.createCSS('.tile.marked .inner { border-width: ' + Math.floor(tileSize / 24)+ 'px }', 'tileSize');
    });
    $('#digits').width($('#titlegrid table').width()).height($('#titlegrid table').height())
    $('#digits').css({'line-height':Math.round($('#titlegrid table').height() * 0.92) + 'px','font-size':$('#titlegrid table').height() * .5 + 'px'});

    var topVSpace = Math.floor($('#container').height() / 2 - $('#board').height() / 2);
    $('#hintMsg').height(topVSpace + 'px');
    $('.digit').css('width', $('#hiddendigit').width() + 'px'); // fixed size digits
  }

  function showTitleScreen() {
    onHomeScreen = true;
    $('.screen').hide().removeClass('show');
    $('#title').show();
    setTimeout(function() { $('#title').addClass('show'); },0);
  }

  function showGame() {
    onHomeScreen = false;
    $('.screen').hide().removeClass('show');
    $('#game').show();
    setTimeout(function() { $('#game').addClass('show'); },0);
    resize();
  }

  function showMenu() {
    inGame = false;
    inText = false;
    onHomeScreen = true;
    clearTimeouts();
    $('.screen').hide().removeClass('show');
    $('#menu').show();
    getScore(function(value){
      $('#scorenr').html(value);
    });
    setTimeout(function() { $('#menu').addClass('show'); },0);
    resize();
  }

  function showAbout() {
    onHomeScreen = false;
    inText = true;
    $('.screen').hide().removeClass('show');
    $('#about').show();
    setTimeout(function() { $('#about').addClass('show'); },0);
    resize();
    window.Marker && Marker.save('page', 'about');
  }

  function showRules() {
    onHomeScreen = false;
    inText = true;
    $('.screen').hide().removeClass('show');
    $('#rules').show();
    setTimeout(function() { $('#rules').addClass('show'); },0);
    resize();
    window.Marker && Marker.save('page', 'rules');
  }

  function showApps() {
    onHomeScreen = false;
    inText = true;
    $('.screen').hide().removeClass('show');
    $('#apps').show();
    setTimeout(function() { $('#apps').addClass('show'); },0);
    resize();
    window.Marker && Marker.save('page', 'apps');
  }

  function show0hh1() {
    onHomeScreen = false;
    inText = true;
    $('.screen').hide().removeClass('show');
    $('#ohhi').show();
    setTimeout(function() { $('#ohhi').addClass('show'); },0);
    resize();
    window.Marker && Marker.save('page', '0hh1');
  }

  function showSizes() {
    onHomeScreen = false;
    inText = false;
    showGame();
    $('#boardsize').html('<span>Select a size</span>');
    $('#menugrid').removeClass('hidden');
    $('#board').addClass('hidden');
    $('#bar [data-action]').not('[data-action="back"]').hide();
    if (continueLastGame && !currentPuzzle.isTutorial) {
      $('[data-action="continue"]').show().addClass('subtleHintOnce');
    }
    $('#board').addClass('hidden');
    $('#score').show();
    setTimeout(function() {
      if (grid) grid.clear();
      $('#score').addClass('show');
    },0);
  }

  function showLoad() {
    onHomeScreen = false;
    $('.screen').hide().removeClass('show');
    $('#loading').show();
    setTimeout(function() { $('#loading').addClass('show'); },0);
  }
  
  function loadGame(size) {
    onHomeScreen = false;
    $('#game').removeClass('show')
    showLoad();
    resize();
    
    setTimeout(function() {
      var puzzle = Levels.getSize(size);
      startGame(puzzle);
    }, 100);
  }

  // puzzle is object with format { size:6, full:[2,1,...], empty:[0,0,2,...], quality: 76, ms: 42 }
  function startGame(puzzle, isContinued) {
    if (!isNaN(puzzle)) {
      loadGame(puzzle);
      return;
    }
    onHomeScreen = false;
    if (!puzzle || !puzzle.size || !puzzle.full)
      throw 'no proper puzzle object received'
    
    if (debug)
      console.log(puzzle);
    
    clearTimeouts();
    if (window.STOPPED) return;
    startedTutorial = false;
    $('#undo').closest('.iconcon').css('display', 'inline-block');
    $('#menugrid').addClass('hidden');
    $('#board').removeClass('hidden');
    $('#bar [data-action]').show();
    $('#bar [data-action="continue"]').hide();
    $('#tweeturl, #facebook, [data-action="apps"]').hide();
    $('#chooseSize').removeClass('show');
    $('#score').removeClass('show').hide();
    $('#bar [data-action="help"]').removeClass('hidden wiggle');
    $('#bar [data-action="help"]').removeClass('subtleHint');
    $('#boardsize').html('<span>' + puzzle.size + ' x ' + puzzle.size + '</span>');
    grid = new Grid(puzzle.size, puzzle.size);
    lastSize = puzzle.size;
    continueLastGame = true;
    inGame = true;
    inText = false;
    systemTilesLockToggleable = true;

    grid.load(puzzle);
    
    // // set system tiles manually
    
    grid.each(function(){
      this.value = this.value; // yes, do so
      if (this.isWall() || this.isNumber())
        this.system = true;
    });

    //grid.state.save('empty');

    currentPuzzle = puzzle;
    grid.hint.active = true;
    grid.activateDomRenderer();
    grid.render();
    undoStack = [];
    undone = false;
    gameEnded = false;

    if (!puzzle.isTutorial) window.Marker && Marker.save('level', 'start', puzzle.size);

    // if (!isContinued)
    //   time = new Date();// - 58000 - 58*60*1000;
    // clearTimeout(timerTOH);
    // updateTime();

    setTimeout(function() {
      showGame();
    }, 0);

    //if (debug)
      //document.location.hash = size;
  }

  function updateTime() {
    var newTime = new Date(),
        ms = newTime - time,
        seconds = parseInt((ms/ 1000) % 60),
        minutes = parseInt((ms / (60*1000)) % 60),
        hours = parseInt((ms / (60 * 60 * 1000)) % 24);

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var timeStr = '';
    if (hours > 0) timeStr = timeStr + hours + ':';
    timeStr = timeStr + minutes + ':';
    timeStr += seconds;

    $('#minutes-l').text(minutes.split('')[0]);
    $('#minutes-r').text(minutes.split('')[1]);
    $('#seconds-l').text(seconds.split('')[0]);
    $('#seconds-r').text(seconds.split('')[1]);

    if (!gameEnded)
      timerTOH = setTimeout(updateTime, 1000);
  }

  function endGame() {
    clearTimeout(timerTOH)
    // first of all, save the score, so if you quit while the animation runs, the score is kept
    getScore(function(value){
      var oldScore = value * 1,
          newScore = setScore(grid.width * grid.height, value);

      $('#scorenr').html(newScore);
      continueLastGame = false;
      grid.unmark();
      grid.hint.hide();
      grid.hint.active = false;
      Tutorial.end();
      systemTilesLockToggleable = false;
      var ojoo = getOjoo() + '!';
      $('#boardsize').html('<span>' + ojoo + '</span>');
      grid.each(function() { this.system = true; });
      $('#bar [data-action]').hide();
      grid.solve();
      grid.render();

      endGameTOH3 = setTimeout(function(){
        $('#grid .tile').addClass('completed');
        endGameTOH1 = setTimeout(function() {
          $('#board').addClass('hidden');
          endGameTOH2 = setTimeout(function() {
            gameEnded = true;
            $('#menugrid').removeClass('hidden');
            $('#chooseSize').addClass('show');
            $('#score').show();

            // animate the score visually from its old value to the new one
            if (startedTutorial) {
              window.Marker && Marker.save('tutorial', 'completed');
            }
            else {
              window.Marker && Marker.save('level', 'completed', currentPuzzle.size);
              window.Marker && Marker.save('score', newScore);
              if (newScore > oldScore) {
                animateScore(oldScore, newScore);
                if (showAppsIcon)
                  $('[data-action="apps"]').show();
                if (tweet && !currentPuzzle.isTutorial) {
                  updateTweetUrl(currentPuzzle.size);
                  $('#tweeturl').show();
                }
                if (facebook && !currentPuzzle.isTutorial) {
                  $('#facebook').show();
                }
              }
            }

            $('#bar [data-action="back"]').show();
            setTimeout(function() { $('#score').addClass('show');}, 0);

          }, 50);
        }, 2000);
      }, 2000);

      // shift
      if (!currentPuzzle.isTutorial)
        Levels.finishedSize(grid.width);
    })
  }

  function quitCurrentGame() {
    inGame = false;
    gameEnded = true;
    clearTimeouts();
    clearTimeout(timerTOH);
    if (grid) {
      grid.unmark();
      grid.hint.hide();
      grid.hint.active = false;
      grid.each(function() { this.system = true; });
    }
    showSizes();
  }

  function addEventListeners() {
    document.addEventListener("backbutton", backButtonPressed, false);
	
  	if (window.WinJS)
      WinJS.Application.onbackclick = backButtonPressed;
  	  
    $(document).on('keydown', function(evt){
      if (evt.keyCode == 27 /* escape */) { backButtonPressed(); return false; }
      if (evt.keyCode == 32 /* space */) { doAction('help'); return false; }
      if (evt.keyCode == 90 /* Z */ && (evt.metaKey || evt.ctrlKey)) {
        doAction('undo');
        return false;
      }
    });
    $(document).on('touchend mouseup', click);
    $(document).on('touchstart mousedown', '#grid td', tapTile);
    $(document).on('touchstart mousedown', '#hintMsg, #boardsize', function() {
      if (Tutorial.active && Tutorial.nextAllowed()) {
        Tutorial.next();
      }
      else if (grid && grid.hint && grid.hint.active) {
        grid.hint.clear();
      }
      return false;
    });

    $(document).on('contextmenu', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    })
  }

  function tapTile (e) {
    if (window.Utils && Utils.isDoubleTapBug(e)) return false;
    var $el = $(e.target).closest('td'),
        x = $el.attr('data-x') * 1,
        y = $el.attr('data-y') * 1,
        tile = grid.tile(x, y),
        rightClick = (e.which === 3);

    clearTimeout(checkTOH);

    // if the tutorial is in a simple-next-message state, go to the next step
    if (Tutorial.active && Tutorial.nextAllowed()) {
      Tutorial.next();
      return false;
    }

    if (tile.system) {
      var $tile = $el.find('.tile');
      $tile.addClass('error');

      if (systemTilesLockShown)
        hideSystemTiles();
      else
        showSystemTiles();
      setTimeout(function() {
        $tile.removeClass('error');
      }, 500);
      return false;
    }    
    
    if (Tutorial.active) {
      Tutorial.tapTile(tile);
      if (!Tutorial.active)
        checkTOH = setTimeout(function(){checkForLevelComplete();}, 700);
      return false;
    }
    
    if (grid && grid.hint)
      grid.hint.clear();

    // create new undo
    var undoState = { 'x': tile.x, 'y': tile.y, 'oldValue': tile.getExportValue(), 'time': new Date() },
        lastState;
    if (undoStack.length) {
      // check if the last state was done a few ms ago, then consider it as one change
      lastState = undoStack[undoStack.length - 1];
      var lastTile = grid.tile(lastState.x, lastState.y),
          lastChange = lastState.time;
      if (lastTile.id != tile.id || (new Date() - lastChange > 500))
        undoStack.push(undoState);
    } 
    else
      undoStack.push(undoState);

    if (rightClick) {
      if (tile.isUnknown())
        tile.wall();
      else if (tile.isWall())
        tile.dot();
      else
        tile.clear();
    } else {
      if (tile.isUnknown())
        tile.dot();
      else if (tile.isDot())
        tile.wall()
      else
        tile.clear();
    }
    // set the value this tile changed to
    if (undoStack.length) {
      lastState = undoStack[undoStack.length - 1];
      lastState['newValue'] = tile.getExportValue();
    }

    //if (tile.value > 0)
    checkTOH = setTimeout(function(){checkForLevelComplete();}, 700);
    return false;
  }

  function click(evt) {
    if (window.Utils && Utils.isDoubleTapBug(evt)) return false;
    var $el = $(evt.target).closest('*[data-action]'),
        action = $(evt.target).closest('*[data-action]').attr('data-action'),
        value = $el.attr('data-value');
    // allow regular hyperlinks to work
    var isLink = ($el && $el.length && $el[0].nodeName == 'A')? true: false;
    // okay, we could've had a link inside a data-action pane...
    if (!isLink && evt.target && evt.target.nodeName == 'A')
      isLink = true;
    if (action && !isLink) {
      doAction(action, value);
      return false;
    }
    else if (isLink && !window.isWebApp) {
      if ($(evt.target).closest('[data-link="social"]').length) {
        return;
      }

      evt.preventDefault();
      var url = $(evt.target).attr('href');
      if ($.browser.android) {
        navigator.app.loadUrl(url, {openExternal:true});
      } else {
        window.open(url, '_system');
      }      
      return false;
    }
  }

  function doAction(action, value) {
    // if we perform an action, let utils know so it can circumvent the doubletapbug and disable it
    switch (action) {
      case 'close-titleScreen':
        checkTutorialPlayed(function(played){
          if (!played)
            startTutorial();
          else
            showMenu();
        });
        break;
      case 'show-menu':
        clearTimeout(checkTOH);
        Tutorial.end();
        if (grid)
          grid.hint.clear();
        showMenu();
        gameEnded = true;
        break;
      case 'back':
        if (inGame && inText)
          return doAction('show-game');
        if (gameEnded || Tutorial.active) 
          return doAction('show-menu');
        clearTimeout(checkTOH);
        Tutorial.end();
        quitCurrentGame();
        window.Marker && Marker.save('level', 'end', currentPuzzle? currentPuzzle.size : undefined);
        break;
      case 'next':
        clearTimeout(checkTOH);
        Tutorial.end();
        if (grid)
          grid.hint.clear();
        loadGame(lastSize);
        break;
      case 'undo':
        if (!gameEnded) {
          window.Marker && Marker.save('button', 'undo', currentPuzzle? currentPuzzle.size : undefined);
          undo();
        }
        break;
      case 'continue':
        if (Tutorial.active)
          return Tutorial.next();
        continueGame();
        window.Marker && Marker.save('button', 'continue', currentPuzzle? currentPuzzle.size : undefined);
        break;
      case 'retry':
        // clearTimeout(checkTOH);
        // $('#game').removeClass('show')
        // if (Tutorial.active || currentPuzzle.isTutorial) {
        //   setTimeout(function(){
        //     Tutorial.start();
        //   }, 300);
        //   return;
        // }
        // setTimeout(function(){
        //   startGame(currentPuzzle);
        // }, 300);
        //grid.hint.clear();
        //grid.each(function() { this.system = true;});

        //grid.state.restore('empty');
        break;
      case 'help':
        if (gameEnded) 
          break;
        clearTimeout(checkTOH);
        if (Tutorial.active && !Tutorial.hintAllowed())
          return;
        if (grid.hint.visible)
          grid.hint.clear();
        else {
          grid.hint.clear();
          grid.hint.next();
          window.Marker && Marker.save('button', 'hint', currentPuzzle? currentPuzzle.size : undefined);
        }
        break;
      case 'in-game-about':
        inGame = true;
        showAbout();
        break;
      case 'rules':
        showRules();
        break;
      case 'show-0hh1':
        show0hh1();
        break;
      case 'apps':
        if (!showAppsIcon)
          return doAction('show-0hh1');
        showApps();
        break;
      case 'show-game':
        inText = false;
        showGame();
        break;
      case 'play':
        showSizes();
        break;
      case 'tutorial':
        startTutorial();
        break;
      case 'about':
        showAbout();
        break;
    }
  }

  function checkForLevelComplete() {
    if (grid.emptyTileCount > 0) {
      if (!grid.isValid())
        hintAboutError();
      else {
        $('#bar [data-action="help"]').removeClass('subtleHint'); 
      }
      return;
    } 

    if (grid.isValid())
      endGame();
    else
      grid.hint.next();
  }

  // subtle wiggle eye icon to indicate something is wrong...
  function hintAboutError() {
    $('#bar [data-action="help"]').removeClass('subtleHint');
    clearTimeout(endSubtleHintTOH);
    setTimeout(function() {
      var wrongTiles = grid.getClosedWrongTiles();
      if (wrongTiles.length) {
        $('#bar [data-action="help"]').addClass('subtleHint');
        endSubtleHintTOH = setTimeout(function() {
          $('#bar [data-action="help"]').removeClass('subtleHint');
        }, 2000);
      }
    },0);
  }

  function checkTutorialPlayed(callback) {
    Storage.getItem('tutorialPlayed', function(resultSet){
      var played = (resultSet.tutorialPlayed + '') == 'true';
      callback(played);
    })
  }

  function markTutorialAsPlayed() {
    Storage.setItem('tutorialPlayed', true);
  }

  function startTutorial() {
    onHomeScreen = false;
    Tutorial.start();
    // set flag to not get points for the tutorial...
    startedTutorial = true;
    // ... except when this is the first time
    checkTutorialPlayed(function(played){
      if (!played)
        startedTutorial = false;
      markTutorialAsPlayed();
      $('#undo').closest('.iconcon').css('display', 'none');
    });
  }

  function backButtonPressed() {
    if (onHomeScreen) {
      if (window.WinJS)
        window.close();
      else {
        if (navigator.app)
          navigator.app.exitApp();
      }
    }
    else
      doAction('back');
	  
	  return true;
  }

  function getOjoo() {
    if (!remainingOjoos.length)
      remainingOjoos = Utils.shuffle(ojoos.slice(0));
    return Utils.draw(remainingOjoos);
  }

  function getScore(cb) {
    Storage.getItem('score', function(resultSet) {
      var value = resultSet.score;
      if (!value)
        value = 0;
      cb(value);
    })
  }

  function setScore(addPoints, oldScore) {
    clearTimeout(setScore.TOH)
    var curScore = score = (oldScore * 1),
        newScore = curScore + (addPoints? addPoints : 0);
    if (newScore <= curScore) 
      return curScore;

    Storage.setItem('score', newScore);
    return newScore;
  }

  function animateScore(curScore, newScore) {
    var delay = 500 / (newScore - curScore);
    next();

    function next() {
      $('#scorenr').html(curScore);
      if (curScore < newScore)
        curScore++;
      setScore.TOH = setTimeout(next, delay)
    }
  }

  function undo() {
    if (!undoStack.length) {
      if (grid.hint.visible) {
        grid.unmark();
        grid.hint.hide();
        return;
      }
      if (!undone)
        grid.hint.show('That\'s the undo button.');
      else
        grid.hint.show('Nothing to undo.');
      return;
    }
    var undoState = undoStack.pop(),
        tile = grid.tile(undoState.x, undoState.y),
        value = undoState.oldValue;
    grid.unmark();
    if (value >= 0) {
      tile.setExportValue(value);
    } else {
      tile.clear();
    }
    tile.mark();
    var s = 'This tile was reversed to ';
    if (value == 1) s += 'purple.';
    if (value == 2) s += 'green.';
    if (value == 0) s += 'its empty state.'
    grid.hint.show(s);
    undone = true;
    clearTimeout(checkTOH);
    checkTOH = setTimeout(function(){checkForLevelComplete();}, 700);
  }

  function clearTimeouts() {
    clearTimeout(endGameTOH1);
    clearTimeout(endGameTOH2);
    clearTimeout(endGameTOH3);
    clearTimeout(endSubtleHintTOH);
  }

  function updateTweetUrl(size) {
    getScore(function(value){
      var msg = '#0hn0 It\'s 0h h1\'s companion! I just completed a ' + size + ' x ' + size + ' puzzle and my score is ' + value + '. http://0hn0.com (or get the App) ',
      //var msg = '#0hn0 I just completed a ' + size + ' x ' + size + ' puzzle and my score is ' + value + '. http://0hn0.com (or get the App!) ',
          url = 'https://twitter.com/share?text=' + encodeURIComponent(msg);
      shareMsg = msg;
      $('#tweeturl').attr('href', url);      
    })
  }

  function continueGame() {
    var oldUndoStack = JSON.parse(JSON.stringify(undoStack));
    startGame(currentPuzzle, true);
    $(oldUndoStack).each(function() {
      var tile = grid.tile(this.x, this.y);          
      tile.setExportValue(this.newValue);
    })
    undoStack = oldUndoStack;
    setTimeout(function(){
      grid.hint.show(HintType.GameContinued);
    },0)
  }

  function showSystemTiles() {    
    if (currentPuzzle.isTutorial) return;
    if (!systemTilesLockToggleable) return;
    grid.each(function(x,y,i,t) {
      if (this.system) {
        var $tile = $('#tile-' + x + '-' + y);
        if (this.isWall())
          $tile.addClass('system');
      }
    })
    systemTilesLockShown = true;
  }

  function hideSystemTiles() {
    $('.system').removeClass('system');
    systemTilesLockShown = false;
  }

  function logo(w) {
    w = w || 512;
    Game.startGame({size:2,empty:[4,3,0,1],full:[0,0,0,0]})
    $('body, #container').css('background-color', 'transparent');
    $('#bar, #boardsize').hide();
    $('html, body').css('background', '#000')
    $('#board').css('background', '#fff')
    $('#container').css('overflow', 'auto');
    $('#feelsize').css('width', w + 'px')
    Game.resize();
    $('#board').css('height', w + 'px');
    setTimeout(function() {
      Game.resize();
      $('#board').css('height', w + 'px');
      setTimeout(function() {
        $('#board #tile-0-1').hide();
        $('#board').css('height', w + 'px');
      }, 0)
    }, 10)
  }

  this.start = start;
  this.init = init;
  this.startGame = startGame;
  this.showTitleScreen = showTitleScreen;
  this.showGame = showGame;
  this.showMenu = showMenu;
  this.resize = resize;
  this.showAbout = showAbout;
  this.showApps = showApps;
  this.show0hh1 = show0hh1;
  this.startTutorial = startTutorial;
  this.checkForLevelComplete = checkForLevelComplete;
  this.undo = undo;
  this.logo = logo;

  window.__defineGetter__('tile', function() { return grid.tile; });
  this.__defineGetter__('grid', function() { return grid; });
  this.__defineGetter__('debug', function() { return debug; });
})();