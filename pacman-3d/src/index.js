require('fast-text-encoding');
require('aframe');
require('aframe-extras');
require('aframe-particle-system-component');

import {intersections, maze} from './config.js';
import {Howl} from 'howler';

const pillDuration = 70;
const chaseDuration = 80;
const scatterDuration = 90;
const flashDuration = 20;

const startX = -6.4;
const startZ = -7.3;
const y = 0.8;
const step = .515;
const radius = .1;
const row = 29;
const col = 26;
const P = {
  WALL: -1,
  ROAD: 0,
  PELLET: 1,
  POWERPILL: 2 
};
const pColor = '#FFB897';
const gColor = 0x2121DE;
const gNormSpeed = 0.65;
const gSlowSpeed = 0.2;
const gFastSpeed = 1.5;
const gCollideDist = 0.6;
const pelletScore = 10;
const pillScore = 50;
const ghostScore = 200;

let path = [];
let pCnt = 0;
let totalP = 0;
let targetPos;
let dead = true;
let lifeCnt = 3;
let highScore;
let score = 0;
let pillCnt = 0;
let soundCtrl = true;

const siren = new Howl({
  src: ['assets/sounds/siren.mp3'],
  loop: true
});

const ghostEaten = new Howl({
  src: 'assets/sounds/ghost-eaten.mp3',
  loop: true
});

const waza = new Howl({
  src: 'assets/sounds/waza.mp3',
  loop: true
});

const ready = new Howl({
  src: ['assets/sounds/ready.mp3'],
  onend: () => {
    ready.stop();
    siren.play();
  }
});

const eating = new Howl({src: 'assets/sounds/eating.mp3'});
const eatPill = new Howl({src: 'assets/sounds/eat-pill.mp3'});
const eatGhost = new Howl({src: 'assets/sounds/eat-ghost.mp3'});
const die = new Howl({src: 'assets/sounds/die.mp3'});

AFRAME.registerComponent('maze', {
  init: function () {
    this.el.addEventListener('model-loaded', () => {
      this.initSoundControl();
      this.initScene();
      this.initStartButton();

      // Cached high score
      let hs = localStorage.getItem('highscore');
      highScore = hs? parseInt(hs): 0;
      document.querySelector('#highscore').setAttribute('text', {
        'value': highScore
      });
    });
  },
  initLife: function () {
    lifeCnt = 3;
    renderLife(lifeCnt);
  },
  initSoundControl: function () {
    let soundEl = document.getElementById('sound');
    soundEl.addEventListener('click', () => {
      soundCtrl = !soundCtrl;
      let off = 'fa-volume-off';
      let on = 'fa-volume-up';
      soundEl.className = soundEl.className.replace(soundCtrl ? off : on, soundCtrl ? on : off);
      ready.mute(!soundCtrl);
      siren.mute(!soundCtrl);
      ghostEaten.mute(!soundCtrl);
      waza.mute(!soundCtrl);
      eating.mute(!soundCtrl);
      eatGhost.mute(!soundCtrl);
      eatPill.mute(!soundCtrl);
      die.mute(!soundCtrl);
    });
  },
  initScene: function () {
    // Set opacity of the wall
    setOpacity(this.el, 0.75);

    let sceneEl = this.el.sceneEl;
    let cnt = 0;
    let line = [];
    
    sceneEl.addEventListener('enter-vr', () => {
      document.getElementById('sound').style.display = 'none';
      document.getElementById('github').style.display = 'none';
      let button = document.getElementById("start");
      if (button.innerHTML.indexOf('START') > -1 && button.style.display !== 'none') {
        button.style.display = 'none';
        this.start();
      }
    });
    sceneEl.addEventListener('exit-vr', () => {
      document.getElementById('sound').style.display = 'block';
      document.getElementById('github').style.display = 'block';
    });

    // Create pellets and power pills
    for (let i = 0; i < maze.length; i++) {
      let x = startX + i %  col * step; 
      let z = startZ + Math.floor(i / col) * step;
      if (maze[i] >= P.PELLET) {
        pCnt++;

        let sphere = document.createElement('a-sphere');
        sphere.setAttribute('color', pColor);
        sphere.setAttribute('radius', radius * maze[i]);
        sphere.setAttribute('position', `${x} ${y} ${z}`);
        sphere.setAttribute('id', `p${i}`);
        sphere.setAttribute('pellet', '');
        
        if (maze[i] >= P.POWERPILL) {
          let animation = document.createElement('a-animation');
          animation.setAttribute("attribute", "material.color");
          animation.setAttribute("from", pColor);
          animation.setAttribute("to", "white");
          animation.setAttribute("dur","500");
          animation.setAttribute("repeat","indefinite");
          sphere.appendChild(animation);
        }
        sceneEl.appendChild(sphere);
      }
      
      // Store positions in path
      line.push(maze[i] >= 0 ? [x, y, z, maze[i] > 0 ? i : P.WALL, maze[i]] : []); 
      cnt++;    
      if (cnt > (col - 1)) {
        path.push(line);
        line = [];
        cnt = 0;
      }
    }
    totalP = pCnt;
  },
  initStartButton: function () {
    let button = document.getElementById("start");
    if (button) {
      button.addEventListener('click', this.start.bind(this));
      button.innerHTML = "START";
      button.disabled = false;
    }
  },
  start: function () {
    this.initLife();

    document.querySelectorAll('[pellet]')
      .forEach(p => p.setAttribute('visible', true));
    pCnt = totalP;

    document.getElementById("logo").style.display = 'none';
    document.getElementById("start").style.display = 'none';
    document.getElementById("gameover").style.display = 'none';
    document.getElementById("ready").style.display = 'block';

    score = 0;
    document.querySelector('#score').setAttribute('text', {
      'value': score
    });

    ready.play();
    restart(3000);
  }
});

AFRAME.registerComponent('player', {
  init: function () {
    this.tick = AFRAME.utils.throttleTick(this.tick, 250, this);
    this.waveCnt = 0;
    this.hitGhosts = [];
    this.ghosts = document.querySelectorAll('[ghost]');
    this.player = document.querySelector('[player]');
    this.currentBg = siren;
    this.nextBg = siren;
  },
  tick: function () {
    if (!dead && path.length >= row){
      this.nextBg = siren;

      let position = this.el.getAttribute('position');
      let x = position.x;
      let y = position.y;
      let z = position.z;

      this.updatePlayerDest(x, y, z);
      this.onCollideWithPellets(x, z);
      this.updateGhosts(x, z);
      this.updateMode(position);
      
      // Update score
      document.querySelector('#score').setAttribute('text', {
        value: score
      });

      // Update background sound
      if (this.nextBg && this.currentBg != this.nextBg) {
        this.currentBg.stop();
        this.nextBg.play();
        this.currentBg = this.nextBg;
      } 
    }
  },
  updatePlayerDest: function (x, y, z) {
    let camera = document.querySelector("a-camera");
    let angle = camera.getAttribute("rotation");

    let _z = step * Math.cos(angle.y * Math.PI / 180);
    let _x = step * Math.sin(angle.y * Math.PI / 180);
    let z_ = Math.round((z - _z - startZ)/step);
    let x_ = Math.round((x - _x - startX)/step);
    let i = z_ > row - 1 ? row - 1: z_ < 0 ? 0 : z_;
    let j = x_ > col - 1 ? col - 1 : x_ < 0 ? 0 : x_;

    if (i === 13 && j === 0) // Tunnel
      this.el.object3D.position.set(path[13][24][0], y, path[13][24][2]);
    else if (i === 13 && j === 25)
      this.el.object3D.position.set(path[13][1][0], y, path[13][1][2]);
    else {
      let newPos = path[i][j];
      if (newPos && newPos.length > 0)
        updateAgentDest(this.player, new THREE.Vector3(newPos[0], 0, newPos[2]));
    }
  },
  updateGhosts: function (x, z) {
    let ghosts = this.ghosts;
    for (var i = 0; i < ghosts.length; i++) {
      if (ghosts[i].dead) this.nextBg = ghostEaten;

      this.onCollideWithGhost(ghosts[i], x, z, i);

      if (ghosts[i].slow) {
        if (pillCnt === 1) { // Leave pill mode
          updateGhostColor(ghosts[i].object3D, ghosts[i].defaultColor);

          ghosts[i].slow = false;
          ghosts[i].setAttribute('nav-agent', {
            speed: gNormSpeed
          });
        } else if (pillCnt > 1) {
          if (pillCnt < flashDuration && pillCnt % 2 === 0) // Flash
            updateGhostColor(ghosts[i].object3D, 0xFFFFFF);
          else
            updateGhostColor(ghosts[i].object3D, gColor);
        }
      }
    }
  },
  updateMode: function (position) {
    targetPos = null;
    if (pillCnt > 0) {
      pillCnt--;
      if (this.nextBg != ghostEaten) this.nextBg = waza;
    } else {
      // Scatter and chase
      this.waveCnt = this.waveCnt > (chaseDuration + scatterDuration) ? 0: this.waveCnt + 1;
      if (this.waveCnt > scatterDuration) 
        targetPos = position;
    }
  },
  onGameOver: function (win) {
    this.nextBg = undefined;
    siren.stop();
    waza.stop();
    ghostEaten.stop();
    
    this.el.sceneEl.exitVR();

    let gameoverEl = document.getElementById("gameover");
    gameoverEl.innerHTML = win ? 'YOU WIN' : 'GAME OVER';
    if (win) 
      gameoverEl.classList.add("blink");
    else
      gameoverEl.classList.remove("blink");
    gameoverEl.style.display = 'block';

    let startEl = document.getElementById("start");
    startEl.innerHTML = 'RESTART';
    startEl.style.display = 'block';
  },
  onCollideWithGhost: function (ghost, x, z, i) {
    let ghostX = ghost.getAttribute('position').x;
    let ghostZ = ghost.getAttribute('position').z;

    if (Math.abs(ghostX - x) < gCollideDist && Math.abs(ghostZ - z) < gCollideDist) {
      if (!ghost.dead){
        if (ghost.slow) {
          eatGhost.play();

          this.hitGhosts.push(i);
          ghost.dead = true;
          ghost.slow = false;

          // Move to ghost house
          ghost.setAttribute('nav-agent', {
            active: false,
            speed: gFastSpeed,
          });
          updateAgentDest(ghost, ghost.defaultPos);

          setOpacity(ghost, 0.3);
          score += ghostScore * this.hitGhosts.length;
        } else {
          this.onDie();
          return;
        }
      }
    }
  },
  onCollideWithPellets: function (x, z) {
    let i = Math.round((z - startZ)/step);
    let j = Math.round((x - startX)/step);
    let currentP = path[i > row - 1 ? row - 1 : i < 0 ? 0 : i][j > col - 1 ? col - 1 : j < 0 ? 0 : j];

    if (currentP && currentP[4] >= P.PELLET) {
      let pellet = document.querySelector(`#p${currentP[3]}`);
      if (pellet && pellet.getAttribute('visible')) {
        pCnt--;
        pellet.setAttribute('visible', false);

        // Power pill
        if (currentP[4] >= P.POWERPILL) {
          eatPill.play();
          score += pillScore;
          this.onEatPill();
        } else {
          eating.play();
          score += pelletScore;
        }
      }
      if (pCnt < 1) this.onWin();
    }
  },
  onEatPill: function () {
    pillCnt = pillDuration;
    this.hitGhosts = [];
    this.ghosts.forEach(ghost => {
      updateGhostColor(ghost.object3D, gColor);
      ghost.slow = true;
      ghost.setAttribute('nav-agent', {
        speed: gSlowSpeed
      });
    });
  },
  onWin: function () {
    this.stop();
    this.onGameOver(true);
  },
  onDie: function () {
    die.play();

    this.stop();

    // Rotate replayer
    let player = this.player;
    player.setAttribute('nav-agent', {
      active: false
    });
    let animation = document.createElement('a-animation');
    animation.setAttribute("attribute","rotation");
    animation.setAttribute("to", "0 720 0");
    animation.setAttribute("dur","2000");
    animation.setAttribute("easing", "linear");
    animation.setAttribute("repeat","0");
    player.appendChild(animation);

    setTimeout(() => {
      // Restart
      if(lifeCnt > 0) {
        player.removeChild(animation);
        restart(1500);
      } else 
        this.onGameOver(false);
    }, 1000);
  },
  stop: function () {
    disableCamera();
    dead = true;
    pillCnt = 0;
    this.waveCnt = 0;

    // Update score
    if (score > highScore) {
      highScore = score;
      document.querySelector('#highscore').setAttribute('text', {
        'value': highScore
      });
      localStorage.setItem('highscore', highScore);
    }

    // Stop ghosts
    this.ghosts.forEach(ghost => {
      ghost.setAttribute('nav-agent', {
        active: false,
        speed: gNormSpeed
      });
    });

    // Move ghosts to ghost house
    this.ghosts.forEach(ghost => {
      ghost.dead = false;
      ghost.slow = false;
      updateGhostColor(ghost.object3D, ghost.defaultColor);
      setOpacity(ghost, 1);
      ghost.object3D.position.set(ghost.defaultPos.x, ghost.defaultPos.y, ghost.defaultPos.z);
    });
  }
});

AFRAME.registerComponent('ghost', {
  schema: {type: 'string'}, 
  init: function () {
    let el = this.el;
    let pos = el.getAttribute('position');
    el.defaultPos = new THREE.Vector3(pos.x, pos.y, pos.z);
    el.defaultColor = this.data;
    el.addEventListener('model-loaded', () => updateGhostColor(el.object3D, el.defaultColor));
    el.addEventListener('navigation-end', this.onNavEnd.bind(this));
  },
  onNavEnd: function () {
    let el = this.el;
    if (el.dead) {
      el.dead = false;
      el.slow = false;
      setOpacity(el, 1);
      updateGhostColor(el.object3D, el.defaultColor);
      el.setAttribute('nav-agent', {
        speed: gNormSpeed
      });
    }
    let p = Math.floor(Math.random() * intersections.length);
    let x = startX + intersections[p][0] * step; 
    let z = startZ + intersections[p][1] * step; 
    updateAgentDest(el, targetPos? targetPos: new THREE.Vector3(x, 0, z));
  }
}); 

function setOpacity(object, opacity) {
  const mesh = object.getObject3D('mesh');
  if (!mesh) return;
  mesh.traverse(node => {
    if (node.isMesh) {
      node.material.opacity = opacity;
      node.material.transparent = opacity < 1.0;
      node.material.needsUpdate = true;
    }
  });
}

function updateAgentDest(object, dest) {
  object.setAttribute('nav-agent', {
    active: true,
    destination: dest
  });
}

function updateGhostColor(ghost, color) {
  ghost.traverse(child => {
    if (child instanceof THREE.Mesh && child.material.name === 'ghostmat')
      child.material.color.setHex(color);
  });
}

function movePlayerToDefaultPosition() {
  const player = document.querySelector('[player]');
  player.object3D.position.set(0, 0, 4);
  player.object3D.rotation.set(0, 0, 0);
}

function disableCamera() {
  const camera = document.querySelector("a-camera");
  camera.removeAttribute('look-controls');
  camera.setAttribute('look-controls', {
    'enabled': false
  });
}

function enableCamera() {
  const camera = document.querySelector("a-camera");
  camera.removeAttribute('look-controls');
  camera.setAttribute('look-controls', {
    'pointerLockEnabled': true
  });
}

function updateLife() {  
  if (lifeCnt > 0) {
    lifeCnt--;
    renderLife(lifeCnt);
  }
}

function renderLife(cnt) {
  let lifeEls = document.querySelectorAll("[life]");
  for (let i = 0; i < cnt; i++) {
    lifeEls[i].setAttribute('visible', true);
  }
  for (let i = lifeEls.length - 1; i >= cnt; i--) {
    lifeEls[i].setAttribute('visible', false);
  }
}

function restart(timeout) {
  movePlayerToDefaultPosition();
  setTimeout(() => {
    document.getElementById("ready").style.display = 'none';
    document.querySelectorAll('[ghost]')
      .forEach(ghost => updateAgentDest(ghost, ghost.defaultPos));
    dead = false;
    updateLife();
    enableCamera();
  }, timeout);    
}
