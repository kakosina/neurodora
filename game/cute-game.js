(() => {
  'use strict';

  const ROOT_V3 = 'assets/game-approved-v3/';
  const PLAY_SPEED = 2.5;
  const canvas = document.querySelector('#gameCanvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  const ui = {
    stage: document.querySelector('#stage'),
    hud: document.querySelector('#hud'),
    score: document.querySelector('#scoreValue'),
    enemyName: document.querySelector('#enemyName'),
    lives: [...document.querySelectorAll('#lives i')],
    enemyBar: document.querySelector('#enemyBar'),
    enemyBarFill: document.querySelector('#enemyBarFill'),
    levelCard: document.querySelector('#levelCard'),
    levelTitle: document.querySelector('#levelTitle'),
    levelRule: document.querySelector('#levelRule'),
    quote: document.querySelector('#quote'),
    quoteName: document.querySelector('#quoteName'),
    quoteText: document.querySelector('#quoteText'),
    title: document.querySelector('#titleScreen'),
    start: document.querySelector('#startButton'),
    novel: document.querySelector('#novelOverlay'),
    novelLeft: document.querySelector('#novelLeft'),
    novelRight: document.querySelector('#novelRight'),
    novelNext: document.querySelector('#novelNext'),
    novelSpeaker: document.querySelector('#novelSpeaker'),
    novelText: document.querySelector('#novelText'),
    result: document.querySelector('#resultScreen'),
    resultKicker: document.querySelector('#resultKicker'),
    resultTitle: document.querySelector('#resultTitle'),
    resultText: document.querySelector('#resultText'),
    finalScore: document.querySelector('#finalScore'),
    restart: document.querySelector('#restartButton'),
    sound: document.querySelector('#soundButton'),
    touch: document.querySelector('#touchButton')
  };

  const SPRITE_PATHS = {};
  [
    'idle', 'blink', 'ready', 'kiss-ready', 'kiss-1', 'kiss-2', 'recoil',
    'wink', 'hit', 'flustered', 'victory', 'defeat'
  ].forEach((pose) => {
    SPRITE_PATHS['dora-' + pose] = ROOT_V3 + 'dora-' + pose + '.png';
  });
  ['dora', 'miron', 'slava', 'maybe', 'morgen'].forEach((character) => {
    for (let frame = 1; frame <= 6; frame += 1) {
      const key = character + '-walk-' + String(frame);
      SPRITE_PATHS[key] = ROOT_V3 + key + '.png';
    }
  });
  for (let frame = 1; frame <= 4; frame += 1) {
    const key = 'dora-maybe-pat-' + String(frame);
    SPRITE_PATHS[key] = ROOT_V3 + key + '.png';
  }
  ['miron', 'slava', 'morgen'].forEach((character) => {
    for (let frame = 1; frame <= 4; frame += 1) {
      const key = character + '-cute-win-' + String(frame);
      SPRITE_PATHS[key] = ROOT_V3 + key + '.png';
    }
  });
  ['miron', 'slava', 'morgen'].forEach((character) => {
    ['angry', 'defiant', 'hit', 'flustered', 'defeated', 'soft', 'kind', 'farewell']
      .forEach((pose) => {
        const key = character + '-' + pose;
        SPRITE_PATHS[key] = ROOT_V3 + key + '.png';
      });
  });
  ['angry', 'defiant', 'hit', 'flustered', 'defeated', 'kind', 'kiss', 'victory']
    .forEach((pose) => {
      const key = 'maybe-' + pose;
      SPRITE_PATHS[key] = ROOT_V3 + key + '.png';
    });

  const SPRITES = {};
  const imagePromises = Object.entries(SPRITE_PATHS).map(([key, path]) => {
    const image = new Image();
    image.decoding = 'async';
    SPRITES[key] = image;
    return new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve;
      image.src = path;
    });
  });

  const LEVELS = [
    {
      name: 'НЕЙРОМИРОН',
      prefix: 'miron',
      hp: 935,
      approach: 0.0195,
      rule: 'SPACE — ПОЦЕЛУЙ',
      pre: [
        { speaker: 'НЕЙРОМИРОН', text: 'Этот город у меня под подошвой.', left: 'dora-idle', right: 'miron-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Смотри под ноги: там уже сердечко.', left: 'dora-ready', right: 'miron-angry' }
      ],
      post: [
        { speaker: 'НЕЙРОМИРОН', text: 'Ладно. Этот раунд твой.', left: 'dora-wink', right: 'miron-defeated' },
        { speaker: 'НЕЙРОДОРА', text: 'Дальше.', left: 'dora-ready', right: 'miron-kind' }
      ]
    },
    {
      name: 'НЕЙРОСЛАВА',
      prefix: 'slava',
      hp: 1300,
      approach: 0.0215,
      rule: 'ТРЕТИЙ УДАР ×2',
      pre: [
        { speaker: 'НЕЙРОСЛАВА', text: 'Здесь только «Грустные танцы».', left: 'dora-idle', right: 'slava-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Тогда попаду в ритм.', left: 'dora-ready', right: 'slava-angry' }
      ],
      post: [
        { speaker: 'НЕЙРОСЛАВА', text: 'Раунд окончен.', left: 'dora-wink', right: 'slava-defeated' },
        { speaker: 'НЕЙРОДОРА', text: 'Дальше.', left: 'dora-ready', right: 'slava-kind' }
      ]
    },
    {
      name: 'НЕЙРОМЭЙБИ',
      prefix: 'maybe',
      hp: 1735,
      approach: 0.0105,
      rule: 'НЕ ДАЙ ЕЙ ДОЙТИ',
      pre: [
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Я не отдам тебе «Аскорбинку»!', left: 'dora-idle', right: 'maybe-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Тогда попробуй сердечко.', left: 'dora-kiss-ready', right: 'maybe-angry' }
      ],
      post: [
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Ладно. Сыграем «Барбисайз» вдвоём.', left: 'dora-wink', right: 'maybe-defeated' },
        { speaker: 'НЕЙРОДОРА', text: 'Идёт.', left: 'dora-victory', right: 'maybe-kind' }
      ]
    },
    {
      name: 'НЕЙРОМОРГЕН',
      prefix: 'morgen',
      hp: 2535,
      approach: 0.0218,
      rule: 'ДОРА + МЭЙБИ',
      pre: [
        { speaker: 'НЕЙРОМОРГЕН', text: 'Мой Cadillac уже ждёт.', left: 'dora-idle', right: 'morgen-defiant' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Мы не уезжаем.', left: 'maybe-defiant', right: 'morgen-angry' },
        { speaker: 'НЕЙРОДОРА', text: 'Последний раунд.', left: 'dora-ready', right: 'morgen-angry' }
      ],
      post: [
        { speaker: 'НЕЙРОМОРГЕН', text: 'Это была «Последняя любовь»?', left: 'maybe-kind', right: 'morgen-defeated' },
        { speaker: 'НЕЙРОДОРА', text: 'Нет. Просто поцелуй.', left: 'dora-wink', right: 'morgen-kind' }
      ]
    }
  ];

  const PROLOGUE = [
    {
      speaker: 'НЕЙРОДОРА',
      text: '«Дождик за окном» закончился. Пора идти.',
      left: null,
      right: 'dora-idle'
    },
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Кьют-рок против всех.',
      left: null,
      right: 'dora-ready'
    }
  ];

  const EPILOGUE = [
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Всё. Финал.',
      left: 'dora-victory',
      right: 'maybe-kind'
    },
    {
      speaker: 'НЕЙРОМЭЙБИ',
      text: 'Заново?',
      left: 'dora-victory',
      right: 'maybe-kind'
    },
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Конечно.',
      left: 'dora-victory',
      right: 'maybe-kind'
    }
  ];

  const view = { w: 1600, h: 900, dpr: 1 };
  const shots = [];
  const particles = [];

  const game = {
    phase: 'title',
    phaseTime: 0,
    totalTime: 0,
    battleTime: 0,
    worldOffset: 0,
    dayMix: 0.04,
    levelIndex: 0,
    score: 0,
    lives: 1,
    hitCount: 0,
    enemy: null,
    allyJoined: false,
    kissReady: false,
    doraAction: 'idle',
    doraActionTime: 0,
    doraRecoil: 0,
    allyAction: 'idle',
    allyActionTime: 0,
    allyRecoil: 0,
    novelScenes: [],
    novelIndex: 0,
    novelDone: null,
    starting: false,
    muted: false
  };

  let audioContext = null;
  let ready = false;
  let lastFrame = performance.now();

  function show(element) {
    element.classList.remove('hidden');
  }

  function hide(element) {
    element.classList.add('hidden');
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function lerp(a, b, amount) {
    return a + (b - a) * amount;
  }

  function mixHex(a, b, amount) {
    const av = parseInt(a.slice(1), 16);
    const bv = parseInt(b.slice(1), 16);
    const ar = (av >> 16) & 255;
    const ag = (av >> 8) & 255;
    const ab = av & 255;
    const br = (bv >> 16) & 255;
    const bg = (bv >> 8) & 255;
    const bb = bv & 255;
    return 'rgb(' +
      Math.round(lerp(ar, br, amount)) + ',' +
      Math.round(lerp(ag, bg, amount)) + ',' +
      Math.round(lerp(ab, bb, amount)) + ')';
  }

  function getScale() {
    // Every source frame is 500px square. Keep a permanent camera safety area
    // above expressive poses instead of letting them touch the canvas edge.
    const heightScale = view.h / 900 * 0.74;
    const widthScale = view.w / 900 * 0.8;
    return clamp(Math.min(heightScale, widthScale), 0.28, 0.82);
  }

  function getGround() {
    return view.h * 0.945;
  }

  function getDoraX() {
    const scale = getScale();
    const safeMargin = 260 * scale;
    if (game.levelIndex === 3) {
      return Math.max(safeMargin, getAllyX() + 340 * scale, view.w * 0.285);
    }
    return Math.max(safeMargin, view.w * 0.185);
  }

  function getAllyX() {
    return Math.max(225 * getScale(), view.w * 0.115);
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const oldWidth = view.w;
    view.w = Math.max(320, rect.width || 1600);
    view.h = Math.max(180, rect.height || 900);
    view.dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(view.w * view.dpr);
    canvas.height = Math.round(view.h * view.dpr);
    if (game.enemy && oldWidth > 0) {
      game.enemy.x *= view.w / oldWidth;
    }
  }

  function ensureAudio() {
    if (game.muted) return null;
    if (!audioContext) {
      const AudioCtor = window.AudioContext || window.webkitAudioContext;
      if (AudioCtor) audioContext = new AudioCtor();
    }
    if (audioContext && audioContext.state === 'suspended') audioContext.resume();
    return audioContext;
  }

  function tone(frequency, duration, type, volume, delay) {
    const audio = ensureAudio();
    if (!audio) return;
    const start = audio.currentTime + (delay || 0);
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = type || 'sine';
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume || 0.025, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  function kissSound() {
    tone(610, 0.12, 'sine', 0.035, 0);
    tone(820, 0.16, 'sine', 0.022, 0.045);
  }

  function hitSound(echo) {
    tone(echo ? 990 : 760, 0.08, 'triangle', 0.018, 0);
    if (echo) tone(1230, 0.12, 'sine', 0.014, 0.07);
  }

  function setPortrait(element, key) {
    if (!key || !SPRITES[key]) {
      hide(element);
      element.removeAttribute('src');
      return;
    }
    element.src = SPRITES[key].src;
    show(element);
  }

  function startNovel(scenes, done) {
    game.phase = 'novel';
    game.phaseTime = 0;
    game.novelScenes = scenes;
    game.novelIndex = 0;
    game.novelDone = done;
    show(ui.novel);
    renderNovelScene();
  }

  function renderNovelScene() {
    const scene = game.novelScenes[game.novelIndex];
    if (!scene) return;
    ui.novelSpeaker.textContent = scene.speaker;
    ui.novelText.textContent = scene.text;
    setPortrait(ui.novelLeft, scene.left);
    setPortrait(ui.novelRight, scene.right);
  }

  function advanceNovel() {
    if (game.phase !== 'novel') return;
    tone(720, 0.05, 'sine', 0.012, 0);
    game.novelIndex += 1;
    if (game.novelIndex < game.novelScenes.length) {
      renderNovelScene();
      return;
    }
    hide(ui.novel);
    const done = game.novelDone;
    game.novelDone = null;
    if (done) done();
  }

  function resetRun() {
    shots.length = 0;
    particles.length = 0;
    game.phaseTime = 0;
    game.totalTime = 0;
    game.battleTime = 0;
    game.worldOffset = 0;
    game.dayMix = 0.04;
    game.levelIndex = 0;
    game.score = 0;
    game.lives = 1;
    game.hitCount = 0;
    game.enemy = null;
    game.allyJoined = false;
    game.kissReady = false;
    game.doraAction = 'idle';
    game.doraActionTime = 0;
    game.doraRecoil = 0;
    game.allyAction = 'idle';
    game.allyActionTime = 0;
    game.allyRecoil = 0;
    updateHud();
  }

  async function startStory() {
    if (game.starting) return;
    game.starting = true;
    await Promise.all(imagePromises);
    ready = true;
    resetRun();
    hide(ui.title);
    hide(ui.result);
    ui.result.classList.remove('loss');
    hide(ui.hud);
    hide(ui.enemyBar);
    hide(ui.levelCard);
    hide(ui.quote);
    show(ui.sound);
    canvas.focus();
    ensureAudio();
    startNovel(PROLOGUE, () => prepareLevel(0));
    game.starting = false;
  }

  function prepareLevel(index) {
    const level = LEVELS[index];
    game.levelIndex = index;
    game.battleTime = 0;
    game.hitCount = 0;
    game.doraAction = 'idle';
    game.allyAction = 'idle';
    game.enemy = {
      x: view.w * 0.82,
      hp: level.hp,
      maxHp: level.hp,
      hitTime: 0,
      walkDistance: 0,
      alpha: 1,
      state: 'defiant'
    };
    shots.length = 0;
    game.dayMix = Math.min(game.dayMix, 0.12);
    ui.enemyName.textContent = level.name;
    updateHud();
    show(ui.hud);
    show(ui.enemyBar);
    startNovel(level.pre, startLevelCard);
  }

  function startLevelCard() {
    const level = LEVELS[game.levelIndex];
    game.phase = 'levelIntro';
    game.phaseTime = 0;
    ui.levelTitle.textContent = level.name;
    ui.levelRule.textContent = level.rule;
    show(ui.levelCard);
    tone(440, 0.12, 'triangle', 0.018, 0);
    tone(660, 0.16, 'triangle', 0.018, 0.08);
  }

  function beginBattle() {
    game.phase = 'battle';
    game.phaseTime = 0;
    game.battleTime = 0;
    game.enemy.state = 'walk';
    game.kissReady = false;
    hide(ui.levelCard);
    canvas.focus();
  }

  function updateHud() {
    ui.score.textContent = String(Math.max(0, Math.round(game.score))).padStart(6, '0');
    ui.lives.forEach((heart, index) => {
      heart.classList.toggle('lost', index >= game.lives);
    });
    if (game.enemy) {
      const ratio = clamp(game.enemy.hp / game.enemy.maxHp, 0, 1);
      ui.enemyBarFill.style.width = String(ratio * 100) + '%';
    }
  }

  function readyKiss() {
    if (game.phase !== 'battle' || game.kissReady) return;
    game.kissReady = true;
    game.doraAction = 'kiss-ready';
    game.doraActionTime = 0;
    if (game.levelIndex === 3 && game.allyJoined) {
      game.allyAction = 'kiss-ready';
      game.allyActionTime = 0;
    }
  }

  function releaseKiss() {
    if (!game.kissReady) return;
    game.kissReady = false;
    if (game.phase === 'battle') fireKiss();
  }

  function fireKiss() {
    if (game.phase !== 'battle') return;
    const kiss = { damage: 25, push: 2.2 };
    game.doraAction = 'kiss1';
    game.doraActionTime = 0;
    game.doraRecoil = 8;
    spawnKiss('dora', kiss, 0);
    kissSound();

    if (game.levelIndex === 3 && game.allyJoined) {
      game.allyAction = 'kiss';
      game.allyActionTime = 0;
      game.allyRecoil = 8;
      spawnKiss('maybe', {
        damage: 18,
        push: 1.4,
      }, 0.055);
      tone(880, 0.13, 'sine', 0.018, 0.055);
    }
  }

  function spawnKiss(source, kiss, delay) {
    if (!game.enemy) return;
    const scale = getScale();
    const ground = getGround();
    // Anchors are the lips in the horizontally flipped kiss frames.
    const sourceX = source === 'maybe'
      ? getAllyX() + 42 * scale
      : getDoraX() + 22 * scale;
    const sourceY = ground - (source === 'maybe' ? 322 : 334) * scale;
    const targetY = ground - 305 * scale;
    shots.push({
      source,
      x: sourceX,
      startX: sourceX,
      startY: sourceY,
      targetY,
      y: sourceY,
      speed: view.w * 0.68 * PLAY_SPEED,
      damage: kiss.damage,
      push: kiss.push,
      delay: delay || 0,
      age: 0,
      phase: Math.random() * Math.PI * 2,
      amplitude: 8.5 * scale,
      color: source === 'maybe' ? '#a866e8' : '#ff678e'
    });
    for (let i = 0; i < 3; i += 1) {
      particles.push({
        type: 'spark',
        x: sourceX + Math.random() * 10 * scale,
        y: sourceY + (Math.random() - 0.5) * 12 * scale,
        vx: 35 + Math.random() * 45,
        vy: (Math.random() - 0.5) * 35,
        age: 0,
        life: 0.35,
        color: source === 'maybe' ? '#c69af4' : '#ff9ab6',
        size: 2.5 + Math.random() * 2.5
      });
    }
  }

  function heartImpact(shot) {
    if (game.phase !== 'battle' || !game.enemy) return;
    const enemy = game.enemy;
    let damage = shot.damage;
    let push = shot.push;
    game.hitCount += 1;
    const echo = game.levelIndex === 1 && game.hitCount % 3 === 0;
    if (echo) {
      damage += 18;
      push += 3.5;
      particles.push({
        type: 'text',
        text: 'эхо ♥',
        x: enemy.x,
        y: shot.y - 38,
        vx: 0,
        vy: -24,
        age: 0,
        life: 0.7,
        color: '#fff08a',
        size: 17
      });
    }

    enemy.hp = Math.max(0, enemy.hp - damage);
    enemy.hitTime = 0.16;
    enemy.x = Math.min(view.w * 0.86, enemy.x + push * getScale());
    game.score += Math.round(damage * 24);
    updateHud();
    hitSound(echo);

    for (let i = 0; i < 6; i += 1) {
      particles.push({
        type: i % 3 === 0 ? 'heart' : 'spark',
        x: enemy.x + (Math.random() - 0.5) * 26,
        y: shot.y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 120,
        vy: -35 - Math.random() * 80,
        age: 0,
        life: 0.45 + Math.random() * 0.35,
        color: shot.color,
        size: 3 + Math.random() * 5
      });
    }

    if (enemy.hp <= 0) defeatEnemy();
  }

  function defeatEnemy() {
    if (game.phase !== 'battle') return;
    game.phase = 'enemyDefeated';
    game.phaseTime = 0;
    game.doraAction = 'wink';
    game.allyAction = 'kind';
    game.enemy.state = 'defeated';
    game.enemy.alpha = 1;
    shots.length = 0;
    hide(ui.quote);
    tone(660, 0.18, 'sine', 0.025, 0);
    tone(880, 0.25, 'sine', 0.025, 0.14);
    tone(1100, 0.3, 'sine', 0.018, 0.28);
  }

  function enemyReachedDora() {
    if (game.phase !== 'battle') return;
    game.phase = 'hurt';
    game.phaseTime = 0;
    game.lives = Math.max(0, game.lives - 1);
    game.doraAction = 'defeat';
    game.kissReady = false;
    game.allyAction = 'defeated';
    shots.length = 0;
    updateHud();
    tone(190, 0.24, 'triangle', 0.028, 0);
  }

  function startWalkTransition() {
    game.phase = 'walk';
    game.phaseTime = 0;
    game.doraAction = 'walk';
    game.allyAction = 'walk';
    game.enemy = null;
    hide(ui.enemyBar);
    hide(ui.quote);
  }

  function startCuteWin() {
    game.phase = 'cuteWin';
    game.phaseTime = 0;
    game.enemy = null;
    shots.length = 0;
    hide(ui.enemyBar);
    hide(ui.quote);
  }

  function finishLevelStory() {
    if (game.levelIndex === LEVELS.length - 1) {
      game.dayMix = 1;
      startNovel(EPILOGUE, () => showResult(true));
      return;
    }
    if (game.levelIndex === 2) {
      game.allyJoined = true;
    }
    startWalkTransition();
  }

  function showResult(won) {
    game.phase = 'result';
    game.phaseTime = 0;
    hide(ui.hud);
    hide(ui.enemyBar);
    hide(ui.levelCard);
    hide(ui.quote);
    hide(ui.novel);
    ui.result.classList.toggle('loss', !won);
    if (won) {
      ui.resultKicker.textContent = 'РЕЗУЛЬТАТ';
      ui.resultTitle.textContent = 'ПОБЕДА';
      ui.resultText.textContent = 'КЬЮТ-РОК ПРОТИВ ВСЕХ — ПРОЙДЕНО.';
      tone(660, 0.2, 'sine', 0.025, 0);
      tone(880, 0.25, 'sine', 0.025, 0.16);
      tone(1100, 0.35, 'sine', 0.02, 0.34);
    } else {
      ui.resultKicker.textContent = 'РЕЗУЛЬТАТ';
      ui.resultTitle.textContent = 'ПОРАЖЕНИЕ';
      ui.resultText.textContent = 'ПОПРОБУЙ ЕЩЁ РАЗ.';
    }
    ui.finalScore.textContent = String(Math.round(game.score));
    show(ui.result);
  }

  function updateShots(dt) {
    const enemy = game.enemy;
    if (!enemy) {
      shots.length = 0;
      return;
    }
    const scale = getScale();
    for (let index = shots.length - 1; index >= 0; index -= 1) {
      const shot = shots[index];
      shot.delay -= dt;
      if (shot.delay > 0) continue;
      shot.age += dt;
      shot.x += shot.speed * dt;
      const distance = Math.max(1, enemy.x - shot.startX);
      const progress = clamp((shot.x - shot.startX) / distance, 0, 1);
      const baseY = lerp(shot.startY, shot.targetY, progress);
      shot.y = baseY + Math.sin(shot.age * 10.5 + shot.phase) * shot.amplitude;

      // The heart reaches the character centre, not the edge of the sprite canvas.
      if (shot.x >= enemy.x - 4 * scale) {
        shots.splice(index, 1);
        heartImpact(shot);
        // Defeat clears the whole volley. Stop before reading stale indexes.
        if (game.phase !== 'battle') break;
      } else if (shot.x > view.w + 80) {
        shots.splice(index, 1);
      }
    }
  }

  function updateParticles(dt) {
    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.age += dt;
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      if (particle.type !== 'text') particle.vy += 70 * dt;
      if (particle.age >= particle.life) particles.splice(index, 1);
    }
  }

  function updateActions(dt) {
    game.doraRecoil += (0 - game.doraRecoil) * Math.min(1, dt * 16);
    game.allyRecoil += (0 - game.allyRecoil) * Math.min(1, dt * 16);
    game.doraActionTime += dt;
    game.allyActionTime += dt;

    if (game.doraAction === 'kiss1' && game.doraActionTime > 0.07) {
      game.doraAction = 'kiss2';
      game.doraActionTime = 0;
    } else if (game.doraAction === 'kiss2' && game.doraActionTime > 0.07) {
      game.doraAction = 'recoil';
      game.doraActionTime = 0;
    } else if (game.doraAction === 'recoil' && game.doraActionTime > 0.09) {
      game.doraAction = 'wink';
      game.doraActionTime = 0;
    } else if (game.doraAction === 'wink' && game.doraActionTime > 0.11) {
      game.doraAction = 'idle';
      game.doraActionTime = 0;
    }
    if (game.allyAction === 'kiss' && game.allyActionTime > 0.16) {
      game.allyAction = 'victory';
      game.allyActionTime = 0;
    } else if (game.allyAction === 'victory' && game.allyActionTime > 0.12) {
      game.allyAction = 'kind';
      game.allyActionTime = 0;
    }
  }

  function updateBattle(dt) {
    const enemy = game.enemy;
    const level = LEVELS[game.levelIndex];
    game.battleTime += dt;
    enemy.hitTime = Math.max(0, enemy.hitTime - dt);

    let speedFactor = 1;
    if (game.levelIndex === 1) {
      speedFactor += Math.max(0, Math.sin(game.battleTime * 3.2)) * 0.22;
    } else if (game.levelIndex === 2) {
      const dash = game.battleTime % 6.2;
      if (dash > 5.55) speedFactor = 1.55;
    } else if (game.levelIndex === 3 && enemy.hp / enemy.maxHp < 0.5) {
      speedFactor = 1.34;
    }

    const travel = view.w * level.approach * speedFactor * PLAY_SPEED * dt;
    enemy.x -= travel;
    enemy.walkDistance += travel;
    updateShots(dt);

    const contactX = getDoraX() + 108 * getScale();
    if (enemy.x <= contactX) enemyReachedDora();
  }

  function update(dt) {
    game.totalTime += dt;
    game.phaseTime += dt;
    updateActions(dt);
    updateParticles(dt);

    if (game.phase === 'levelIntro' && game.phaseTime > 1.75) {
      beginBattle();
    } else if (game.phase === 'battle') {
      updateBattle(dt);
    } else if (game.phase === 'hurt') {
      if (game.phaseTime > 0.9) {
        if (game.lives <= 0) {
          showResult(false);
        } else {
          game.enemy.x = view.w * 0.8;
          game.enemy.state = 'walk';
          game.doraAction = 'idle';
          game.allyAction = 'kind';
          game.phase = 'battle';
          game.phaseTime = 0;
        }
      }
    } else if (game.phase === 'enemyDefeated') {
      game.dayMix = clamp(game.dayMix + dt * 0.9, 0, 1);
      if (game.phaseTime > 0.78) startCuteWin();
    } else if (game.phase === 'cuteWin') {
      game.dayMix = clamp(game.dayMix + dt * 0.55, 0, 1);
      if (game.phaseTime > 2.4) {
        const post = LEVELS[game.levelIndex].post;
        game.phase = 'storyPause';
        startNovel(post, finishLevelStory);
      }
    } else if (game.phase === 'walk') {
      game.worldOffset += view.w * 0.045 * PLAY_SPEED * dt;
      const fadeStart = 1.65;
      if (game.phaseTime > fadeStart) {
        const amount = clamp((game.phaseTime - fadeStart) / 1.6, 0, 1);
        game.dayMix = lerp(1, 0.06, amount);
      }
      if (game.phaseTime > 3.35) {
        prepareLevel(game.levelIndex + 1);
      }
    }
  }

  function wrapped(base, width, offset) {
    return ((base - offset) % width + width) % width;
  }

  function drawCloud(x, y, scale, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = mixHex('#cbd6e8', '#ffffff', game.dayMix);
    ctx.beginPath();
    ctx.ellipse(x, y, 92 * scale, 29 * scale, 0, 0, Math.PI * 2);
    ctx.ellipse(x - 55 * scale, y + 8 * scale, 57 * scale, 22 * scale, 0, 0, Math.PI * 2);
    ctx.ellipse(x + 62 * scale, y + 9 * scale, 67 * scale, 23 * scale, 0, 0, Math.PI * 2);
    ctx.ellipse(x + 3 * scale, y - 17 * scale, 52 * scale, 31 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawBackground() {
    const day = game.dayMix;
    const skyTop = mixHex('#17254e', '#9fd8f1', day);
    const skyBottom = mixHex('#445178', '#d9eff8', day);
    const gradient = ctx.createLinearGradient(0, 0, 0, view.h);
    gradient.addColorStop(0, skyTop);
    gradient.addColorStop(1, skyBottom);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, view.w, view.h);

    if (day < 0.7) {
      ctx.save();
      ctx.globalAlpha = (0.7 - day) / 0.7;
      ctx.fillStyle = '#fff7c9';
      ctx.beginPath();
      ctx.arc(view.w * 0.82, view.h * 0.16, view.h * 0.044, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 14; i += 1) {
        const x = ((i * 137 + 61) % 997) / 997 * view.w;
        const y = (0.055 + ((i * 71) % 330) / 1000) * view.h;
        const radius = i % 4 === 0 ? 1.7 : 1.05;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    const cloudOffset = game.worldOffset * 0.09;
    const cloudPeriod = view.w + 560;
    drawCloud(wrapped(view.w * 0.08, cloudPeriod, cloudOffset) - 200, view.h * 0.19, view.h / 900, 0.82);
    drawCloud(wrapped(view.w * 0.48, cloudPeriod, cloudOffset) - 120, view.h * 0.29, view.h / 1150, 0.74);
    drawCloud(wrapped(view.w * 0.83, cloudPeriod, cloudOffset) - 80, view.h * 0.2, view.h / 980, 0.8);

    const hillOffset = game.worldOffset * 0.32;
    ctx.fillStyle = mixHex('#223c55', '#63aa56', day);
    ctx.beginPath();
    ctx.moveTo(0, view.h * 0.77);
    for (let x = -100; x <= view.w + 140; x += 120) {
      const local = x - (hillOffset % 120);
      const y = view.h * (0.73 + 0.018 * Math.sin((x + 90) * 0.018));
      ctx.quadraticCurveTo(local + 60, y - 28, local + 120, view.h * 0.77);
    }
    ctx.lineTo(view.w, view.h);
    ctx.lineTo(0, view.h);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = mixHex('#2e5a43', '#45a63d', day);
    const bushOffset = game.worldOffset * 0.55;
    for (let i = -2; i < Math.ceil(view.w / 70) + 4; i += 1) {
      const x = i * 72 - (bushOffset % 72);
      const y = view.h * 0.79;
      const radius = 38 + (i % 3) * 5;
      ctx.beginPath();
      ctx.arc(x, y, radius, Math.PI, 0);
      ctx.lineTo(x + radius, view.h * 0.86);
      ctx.lineTo(x - radius, view.h * 0.86);
      ctx.closePath();
      ctx.fill();
    }

    ctx.fillStyle = mixHex('#31533d', '#8bcf22', day);
    ctx.fillRect(0, view.h * 0.79, view.w, view.h * 0.21);

    if (day > 0.35) {
      ctx.save();
      ctx.globalAlpha = clamp((day - 0.35) / 0.65, 0, 1);
      const flowerOffset = game.worldOffset * 0.85;
      for (let i = 0; i < 13; i += 1) {
        const x = wrapped(i * 157 + 80, view.w + 160, flowerOffset) - 60;
        const y = view.h * (0.83 + (i % 4) * 0.018);
        ctx.strokeStyle = '#3f9132';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y + 12);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = i % 2 ? '#fff4a2' : '#ffc2d8';
        ctx.beginPath();
        ctx.arc(x, y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function drawForegroundGrass() {
    const day = game.dayMix;
    const offset = game.worldOffset * 1.05;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.strokeStyle = mixHex('#1f483a', '#4b991e', day);
    ctx.lineWidth = Math.max(1.3, view.h / 650);
    const base = view.h * 0.965;
    for (let i = -4; i < Math.ceil(view.w / 18) + 8; i += 1) {
      const x = i * 18 - (offset % 18);
      const height = 18 + ((i * 17) % 23 + 23) % 23;
      const lean = ((i * 11) % 13) - 6;
      ctx.beginPath();
      ctx.moveTo(x, base);
      ctx.quadraticCurveTo(x + lean * 0.4, base - height * 0.55, x + lean, base - height);
      ctx.stroke();
    }
    ctx.restore();
  }

  function walkFrame(prefix, distance) {
    return prefix + '-walk-' + String((Math.floor(distance / 12) % 6) + 1);
  }

  function currentDoraSprite() {
    if (game.phase === 'walk') return walkFrame('dora', game.worldOffset);
    if (game.phase === 'hurt') return game.phaseTime < 0.36 ? 'dora-hit' : 'dora-defeat';
    if (game.phase === 'enemyDefeated') {
      return game.phaseTime > 1.15 ? 'dora-victory' : 'dora-wink';
    }
    if (game.phase === 'levelIntro') return 'dora-ready';
    if (game.doraAction === 'kiss-ready') return 'dora-kiss-ready';
    if (game.doraAction === 'kiss1') return 'dora-kiss-1';
    if (game.doraAction === 'kiss2') return 'dora-kiss-2';
    if (game.doraAction === 'recoil') return 'dora-recoil';
    if (game.doraAction === 'wink') return 'dora-wink';
    if (game.doraAction === 'flustered') return 'dora-flustered';
    if (game.doraAction === 'victory') return 'dora-victory';
    const blinkPhase = game.totalTime % 3.7;
    return blinkPhase > 3.52 ? 'dora-blink' : 'dora-idle';
  }

  function currentAllySprite() {
    if (game.phase === 'walk') return walkFrame('maybe', game.worldOffset);
    if (game.phase === 'hurt') return 'maybe-defeated';
    if (game.allyAction === 'kiss-ready') return 'maybe-flustered';
    if (game.allyAction === 'kiss') return 'maybe-kiss';
    if (game.allyAction === 'victory') return 'maybe-victory';
    return 'maybe-kind';
  }

  function currentEnemySprite() {
    if (!game.enemy) return null;
    const prefix = LEVELS[game.levelIndex].prefix;
    if (game.phase === 'hurt') return prefix + '-defiant';
    if (game.enemy.state === 'defeated') return prefix + '-defeated';
    if (game.enemy.state === 'soft') {
      return SPRITES[prefix + '-soft'] ? prefix + '-soft' : prefix + '-defeated';
    }
    if (game.enemy.state === 'kind') return prefix + '-kind';
    if (game.enemy.hitTime > 0) return prefix + '-hit';
    if (game.enemy.hp / game.enemy.maxHp < 0.34 && Math.sin(game.battleTime * 4) > 0.35) {
      return prefix + '-flustered';
    }
    if (game.phase === 'levelIntro' || game.phase === 'novel') return prefix + '-defiant';
    return walkFrame(prefix, game.enemy.walkDistance);
  }

  function drawActor(key, x, ground, scale, options) {
    const image = SPRITES[key];
    if (!image || !image.complete || image.naturalWidth === 0) return;
    const opts = options || {};
    const stretchY = opts.stretchY || 1;
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    ctx.save();
    ctx.globalAlpha = opts.alpha == null ? 1 : opts.alpha;
    ctx.translate(x, ground + (opts.y || 0));
    ctx.scale(opts.flipX ? -1 : 1, stretchY);
    ctx.drawImage(
      image,
      -width * scale / 2,
      -height * scale,
      width * scale,
      height * scale
    );
    ctx.restore();
  }

  function drawHeart(x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    ctx.shadowColor = color;
    ctx.shadowBlur = size * 0.8;
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.bezierCurveTo(-size * 0.18, size * 0.72, -size, size * 0.22, -size, -size * 0.3);
    ctx.bezierCurveTo(-size, -size * 0.86, -size * 0.32, -size * 1.05, 0, -size * 0.54);
    ctx.bezierCurveTo(size * 0.32, -size * 1.05, size, -size * 0.86, size, -size * 0.3);
    ctx.bezierCurveTo(size, size * 0.22, size * 0.18, size * 0.72, 0, size);
    ctx.closePath();
    const fill = ctx.createRadialGradient(-size * 0.25, -size * 0.32, 1, 0, 0, size * 1.15);
    fill.addColorStop(0, '#fffafc');
    fill.addColorStop(0.42, '#ffd7e4');
    fill.addColorStop(1, color);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = Math.max(2.2, size * 0.32);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1.2, size * 0.15);
    ctx.stroke();
    ctx.setLineDash([Math.max(1.5, size * 0.13), Math.max(1.5, size * 0.11)]);
    ctx.strokeStyle = 'rgba(255,98,143,0.72)';
    ctx.lineWidth = Math.max(1, size * 0.08);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.beginPath();
    ctx.ellipse(-size * 0.42, -size * 0.42, size * 0.16, size * 0.24, -0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawShots() {
    const scale = getScale();
    for (const shot of shots) {
      if (shot.delay > 0) continue;
      for (let trail = 1; trail <= 3; trail += 1) {
        ctx.save();
        ctx.globalAlpha = 0.34 / trail;
        ctx.fillStyle = trail % 2 ? '#fff8fb' : shot.color;
        ctx.beginPath();
        ctx.arc(
          shot.x - trail * 10 * scale,
          shot.y + Math.sin(shot.age * 12 + trail) * 3 * scale,
          (4.2 - trail * 0.7) * scale,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }
      drawHeart(shot.x, shot.y, 12.5 * scale, shot.color, 1);
    }
  }

  function drawParticles() {
    for (const particle of particles) {
      const alpha = clamp(1 - particle.age / particle.life, 0, 1);
      if (particle.type === 'heart') {
        drawHeart(particle.x, particle.y, particle.size, particle.color, alpha);
      } else if (particle.type === 'text') {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = '#344052';
        ctx.lineWidth = 3;
        ctx.font = '900 ' + String(particle.size) + 'px Arial Rounded MT Bold, sans-serif';
        ctx.textAlign = 'center';
        ctx.strokeText(particle.text, particle.x, particle.y);
        ctx.fillText(particle.text, particle.x, particle.y);
        ctx.restore();
      } else {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  }

  function drawActors() {
    const scale = getScale();
    const ground = getGround();
    if (game.phase === 'cuteWin') {
      const frame = Math.min(4, Math.floor(game.phaseTime / 0.44) + 1);
      const prefix = LEVELS[game.levelIndex].prefix;
      const key = prefix === 'maybe'
        ? 'dora-maybe-pat-' + String(frame)
        : prefix + '-cute-win-' + String(frame);
      drawActor(
        key,
        view.w * 0.5,
        ground,
        scale
      );
      return;
    }

    const breathing = game.phase === 'battle' && game.doraAction === 'idle'
      ? 1 + Math.sin(game.totalTime * 2.8) * 0.004
      : 1;

    if (game.enemy) {
      const enemyPrefix = LEVELS[game.levelIndex].prefix;
      drawActor(
        currentEnemySprite(),
        game.enemy.x,
        ground,
        scale,
        {
          alpha: game.enemy.alpha,
          // Maybe's approved sheet faces right for her later ally role. As an
          // opponent she approaches Dora from the right and must face left.
          flipX: enemyPrefix === 'maybe'
        }
      );
    }

    drawShots();

    if (game.allyJoined && game.levelIndex >= 2) {
      drawActor(
        currentAllySprite(),
        getAllyX() - game.allyRecoil,
        ground,
        scale,
        {
          stretchY: game.phase === 'battle' ? 1 + Math.sin(game.totalTime * 2.6 + 1) * 0.003 : 1,
          flipX: game.allyAction === 'kiss'
        }
      );
    }

    const doraSprite = currentDoraSprite();
    drawActor(
      doraSprite,
      getDoraX() - game.doraRecoil,
      ground,
      scale,
      {
        stretchY: breathing,
        flipX: doraSprite === 'dora-kiss-ready' ||
          doraSprite === 'dora-kiss-1' || doraSprite === 'dora-kiss-2'
      }
    );
  }

  function draw() {
    ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.clearRect(0, 0, view.w, view.h);
    drawBackground();
    drawForegroundGrass();
    if (ready && game.phase !== 'title' && game.phase !== 'result' && game.phase !== 'novel') {
      drawActors();
      drawParticles();
    }
  }

  function frame(now) {
    const dt = Math.min(0.034, Math.max(0, (now - lastFrame) / 1000));
    lastFrame = now;
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }

  ui.start.disabled = true;
  ui.start.innerHTML = 'ЗАГРУЖАЕМ <b>♥</b>';
  Promise.all(imagePromises).then(() => {
    ready = true;
    ui.start.disabled = false;
    ui.start.innerHTML = 'ИГРАТЬ <b>♥</b>';
  });

  ui.start.addEventListener('click', startStory);
  ui.restart.addEventListener('click', startStory);
  ui.novelNext.addEventListener('click', advanceNovel);
  ui.sound.addEventListener('click', () => {
    game.muted = !game.muted;
    ui.sound.textContent = game.muted ? '×' : '♪';
    ui.sound.setAttribute('aria-label', game.muted ? 'Включить звук' : 'Выключить звук');
    if (!game.muted) tone(660, 0.08, 'sine', 0.018, 0);
  });
  window.addEventListener('keydown', (event) => {
    if (event.code !== 'Space') return;
    event.preventDefault();
    if (game.phase === 'battle') {
      if (!event.repeat) readyKiss();
      return;
    }
    if (event.repeat) return;
    if (game.phase === 'title') startStory();
    else if (game.phase === 'novel') advanceNovel();
    else if (game.phase === 'result') startStory();
  });

  window.addEventListener('keyup', (event) => {
    if (event.code !== 'Space') return;
    event.preventDefault();
    releaseKiss();
  });

  ui.touch.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    ui.touch.setPointerCapture(event.pointerId);
    readyKiss();
  });
  ui.touch.addEventListener('pointerup', (event) => {
    event.preventDefault();
    releaseKiss();
  });
  ui.touch.addEventListener('pointercancel', () => {
    game.kissReady = false;
    if (game.phase === 'battle') {
      game.doraAction = 'idle';
      game.doraActionTime = 0;
      game.allyAction = 'kind';
      game.allyActionTime = 0;
    }
  });

  if (window.matchMedia('(pointer: coarse)').matches) show(ui.touch);
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  requestAnimationFrame(frame);

  window.__cuteRockGame = {
    game,
    LEVELS,
    SPRITES,
    shots,
    particles,
    startStory,
    prepareLevel,
    beginBattle,
    readyKiss,
    releaseKiss,
    fireKiss,
    advanceNovel,
    update,
    draw,
    currentDoraSprite,
    currentAllySprite,
    currentEnemySprite,
    getEnemy: () => game.enemy,
    getDoraX,
    getAllyX,
    getScale,
    getGround,
    getView: () => ({ ...view })
  };
})();
