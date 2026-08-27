(() => {
  'use strict';

  // Relative roots keep the standalone game working from a local file, the
  // site root and the itch.io archive. game/index.html supplies a base URL.
  const ROOT_V3 = 'assets/game-approved-v3/';
  const ROOT_V02 = 'assets/game-v02/';
  const ROOT_DIALOGUE = 'assets/game-dialogue-v01/';
  const MAX_LIVES = 3;
  const ENEMY_SPEED_MULTIPLIER = 2.5;
  const BATTLE_REFERENCE_SPAN = 0.59;
  const HEART_TRAVEL_SECONDS = 1.6;
  const MUSIC_VOLUME = 0.17;
  const SOUND_EFFECTS = {
    // These tiny user-supplied MP3s are embedded losslessly so a rapid first
    // kiss never waits on another request, including local and itch builds.
    kiss: { src: 'data:audio/mpeg;base64,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', voices: 6, volume: 0.78 },
    hit: { src: 'data:audio/mpeg;base64,SUQzAwAAAAAAKFRTU0UAAAAUAAADTEFNRTMuMTAxIChiZXRhIDIpAAAAAAAAAAAAAAD/+5BkAAATEAlGEekwoiRgGJkYQQEOraMbFYKAAJqA4kaYMAAAVlARFCaZ1hsVisNk4oCCBBAwghAeHh4eGAAAAAAeHpw8MAADwAPDw8Pf/AAQHh78z4AAACMw/x+H8EYD+vzfwAd5/n9f+AB//0PW4AADoH9fgZx3+Hh5+AAI8AH9H28AAACte6QAAgTg+H0lFZmnKOd5d9Vn1O/b5d/lP///r1d3+X/1g+CL6sAARYUCzRPhnK7F+yuvEq8ufCIteh+VP4wWExwqURKKoZDGEsX+xTjSmOiuMc7EstSKp0JOc7tWjlVGNmVFtZ3s+WcxzvTbZXq7qrKaYdZ7VQ01umut2Mi3LMrLsdn9b5St65lLR6GqQY9kFjIKi4wj6LpAdPYgCYsYotjV000aF99ZhaK/1f1e6r/6W8D0b/Xt2bfWwpR1rWqJcjIZP2bTWWO1yO2zQ0jA4RGsQADjBnqA5MEqLUDF0rzTyTNhYICV4DnJAq5QROtyxMbWGB2VNwdtQRYgqRUMpyhtuEobxpmThtNlNWSqkkHJBQzr7wuQw/D/+5JkLQAGz2ZV7mcEBCegCo/BAACORO9FvaWAIL8G48ueMADT7RKlvY1GsRSUWbcvk85T47/Km1VxgSgjEjllK9s3D7v0jlw7Ur2aX9ymkuxeWSiKdlc/G5+UQ/NYuXlKNWs8v39qtUsYQ/f5LMNyiWP/MWtZ3aSxhnN3Z791u1pdUpdf3O3/87/4Z9sbxtSmUd1bln42952LGufvXd87z8fuZGhAYOggqOqw7D8fgAAAAAOBAITKgUOOrDzEuFy4+1DvNpMCbyQveMATIAEdaZZSQoFR9U1ZzROFTpg1ltLSMiyOHANWzPcrCwRW5m4CQ/I5q5FJcdyrDy5w9ap6XXult3zUOlGOKh7v3Q7movlsf3zMXUsu7c5zYmvnqL5a6/4mnNNoIiUFXi1K6KyktKo3Sy2NRvX/tUsusNzFcwR06VS9+NeDCYi3FuLeGjFgR2Y1UoGAhE+jt06Xfb+j/+vp7P/0///0fod//XWFABJUZysCn8mczlXLOnyRWmFKkJRWDmiQZtwiGEQ8Cl8nhbg50SJkkQ6Cno3ISws8llba//uSZBoAg4I7SkNmHCAl4Pi5CGYICjxLCGek0AC6Ap1YwwwQn5VDVfI1aUtWJs+3/6qsqo5UqpeRltVjHDVWyaGvhngqdiIiRCZNPyUs+d1hrTW6g9wrsBUsOAwNCICmAAAZWmSAECQUvOTbRKJJdffld6lo9/NP/j1R/Fv+v//zu3///8sAACXAN4wzoR6UPIhIkwfokJAC7mAb5+Is9iAjJJAXtAhoUkRUCAiakpqSiywyAgkLEXN4s3t/FhZr/1N/2oULCxoKxZr8WQ+oW+v//4qLaxTrCErABMJ4AC0FopBaKioZc17NbDISFRXxUi5grATYr/62/1t/r//+r//4qLUBUUVMQU1FMy4xMDEgKGJldGEgMilVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==', voices: 10, volume: 0.72 }
  };
  const KISS_RECOIL_DISTANCE = 18;
  const KISS_MOUTH_ANCHORS = {
    dora: { x: 68, y: 350 },
    // Maybe's source sprite is mirrored at draw time, so her mouth sits only
    // slightly to the right of the sprite centre after the flip.
    maybe: { x: 14, y: 334 }
  };
  const WALK_SCROLL_SPEED_PER_VIEW = 0.065;
  const WALK_FRAMES_PER_SECOND = 8;
  const SPRITE_FOOT_PADDING = 3;
  const WALK_OPTICAL_OFFSETS = {
    dora: [7.5, 5.5, 3, 5, 1.5, 6],
    miron: [-3, 13, 0, 0.5, 13, -2],
    slava: [-4.5, 0, 0.5, -14.5, 0, -0.5],
    maybe: [6.5, 1.5, 17.5, 15.5, 3, 16.5],
    morgen: [3, -0.5, 4, 4, -0.5, -0.5]
  };
  const CUTE_WIN_DURATION = 5.05;
  const DIALOGUE_SPEAKER_THEMES = {
    'НЕЙРОДОРА': 'dora',
    'НЕЙРОМИРОН': 'miron',
    'НЕЙРОСЛАВА': 'slava',
    'НЕЙРОМЭЙБИ': 'maybe',
    'НЕЙРОМОРГЕН': 'morgen'
  };
  const DIALOGUE_CHARACTERS = new Set(['dora', 'miron', 'slava', 'maybe', 'morgen']);
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
    resultCast: document.querySelector('#resultCast'),
    telegram: document.querySelector('#resultTelegram'),
    restart: document.querySelector('#restartButton'),
    sound: document.querySelector('#soundButton'),
    music: document.querySelector('#backgroundMusic')
  };

  const SPRITE_PATHS = {};
  [
    'idle', 'blink', 'ready', 'kiss-ready', 'kiss-1', 'kiss-2', 'recoil',
    'wink', 'hit', 'flustered', 'victory', 'defeat'
  ].forEach((pose) => {
    SPRITE_PATHS['dora-' + pose] = ROOT_V3 + 'dora-' + pose + '.webp';
  });
  ['dora', 'miron', 'slava', 'maybe', 'morgen'].forEach((character) => {
    for (let frame = 1; frame <= 6; frame += 1) {
      const key = character + '-walk-' + String(frame);
      SPRITE_PATHS[key] = ROOT_V3 + key + '.webp';
    }
  });
  for (let frame = 1; frame <= 4; frame += 1) {
    const key = 'dora-maybe-pat-' + String(frame);
    SPRITE_PATHS[key] = ROOT_V3 + key + '.webp';
  }
  ['miron', 'slava', 'morgen'].forEach((character) => {
    for (let frame = 1; frame <= 4; frame += 1) {
      const key = character + '-cute-win-' + String(frame);
      SPRITE_PATHS[key] = ROOT_V3 + key + '.webp';
    }
  });
  ['miron', 'slava', 'maybe', 'morgen'].forEach((character) => {
    for (let frame = 1; frame <= 6; frame += 1) {
      const key = character + '-interaction-' + String(frame);
      SPRITE_PATHS[key] = ROOT_V02 + key + '.webp';
    }
  });
  ['miron', 'slava', 'morgen'].forEach((character) => {
    ['angry', 'defiant', 'hit', 'flustered', 'defeated', 'soft', 'kind', 'farewell']
      .forEach((pose) => {
        const key = character + '-' + pose;
        SPRITE_PATHS[key] = ROOT_V3 + key + '.webp';
      });
  });
  ['angry', 'defiant', 'hit', 'flustered', 'defeated', 'kind', 'kiss', 'victory']
    .forEach((pose) => {
      const key = 'maybe-' + pose;
      SPRITE_PATHS[key] = ROOT_V3 + key + '.webp';
    });

  const SPRITES = {};
  const spritePromises = Object.entries(SPRITE_PATHS).map(([key, path]) => {
    const image = new Image();
    image.decoding = 'async';
    SPRITES[key] = image;
    return new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve;
      image.src = path;
    });
  });
  const spritesReady = Promise.all(spritePromises);
  const PORTRAITS = {};
  const PORTRAIT_KEYS = new Set(Object.keys(SPRITE_PATHS)
    .filter((key) => !key.includes('-walk-') && !key.includes('-interaction-') &&
      !key.includes('-cute-win-') && !key.includes('dora-maybe-pat-')));
  const portraitPromises = new Map();

  function loadPortrait(key) {
    if (!PORTRAIT_KEYS.has(key)) return Promise.resolve(null);
    if (portraitPromises.has(key)) return portraitPromises.get(key);
    const image = new Image();
    image.decoding = 'async';
    PORTRAITS[key] = image;
    const promise = new Promise((resolve) => {
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = ROOT_DIALOGUE + key + '.webp';
    });
    portraitPromises.set(key, promise);
    return promise;
  }

  function preloadPortraits(scenes) {
    const keys = new Set();
    scenes.forEach((scene) => {
      if (scene.left) keys.add(scene.left);
      if (scene.right) keys.add(scene.right);
    });
    return Promise.all([...keys].map(loadPortrait));
  }

  const LEVELS = [
    {
      name: 'НЕЙРОМИРОН',
      prefix: 'miron',
      hp: 935,
      approach: 0.0195,
      speedPar: 11,
      speedBonus: 4500,
      theme: 'miron',
      interactionScale: 1.06,
      pre: [
        { speaker: 'НЕЙРОМИРОН', text: 'Сердечко — не аргумент. Это подмена тезиса.', left: 'dora-idle', right: 'miron-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'А ты уже споришь.', left: 'dora-wink', right: 'miron-defiant' },
        { speaker: 'НЕЙРОМИРОН', text: 'Я уточняю формулировку.', left: 'dora-blink', right: 'miron-angry' },
        { speaker: 'НЕЙРОДОРА', text: 'Тогда подойди поближе.', left: 'dora-ready', right: 'miron-angry' }
      ],
      post: [
        { speaker: 'НЕЙРОМИРОН', text: 'Воротник и правда был крив.', left: 'dora-wink', right: 'miron-flustered' },
        { speaker: 'НЕЙРОДОРА', text: 'Я же говорила.', left: 'dora-idle', right: 'miron-soft' },
        { speaker: 'НЕЙРОМИРОН', text: 'Ты ничего не говорила.', left: 'dora-blink', right: 'miron-kind' },
        { speaker: 'НЕЙРОДОРА', text: 'Зато поправила.', left: 'dora-wink', right: 'miron-farewell' },
        { speaker: 'НЕЙРОМИРОН', text: 'Убедительно.', left: 'dora-wink', right: 'miron-farewell' }
      ]
    },
    {
      name: 'НЕЙРОСЛАВА',
      prefix: 'slava',
      hp: 1300,
      approach: 0.0215,
      speedPar: 14,
      speedBonus: 6500,
      theme: 'slava',
      interactionScale: 1.04,
      pre: [
        { speaker: 'НЕЙРОСЛАВА', text: 'Мне уже не нравится.', left: 'dora-idle', right: 'slava-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Я ещё ничего не сделала.', left: 'dora-blink', right: 'slava-angry' },
        { speaker: 'НЕЙРОСЛАВА', text: 'Вот. И как-то тревожно.', left: 'dora-wink', right: 'slava-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Могу начать.', left: 'dora-idle', right: 'slava-defiant' },
        { speaker: 'НЕЙРОСЛАВА', text: 'Теперь ещё хуже.', left: 'dora-ready', right: 'slava-angry' },
        { speaker: 'НЕЙРОСЛАВА', text: 'Ладно. Если понравится — это постирония.', left: 'dora-ready', right: 'slava-defiant' }
      ],
      post: [
        { speaker: 'НЕЙРОСЛАВА', text: 'Кулачок был случайный.', left: 'dora-idle', right: 'slava-flustered' },
        { speaker: 'НЕЙРОДОРА', text: 'Конечно.', left: 'dora-wink', right: 'slava-soft' },
        { speaker: 'НЕЙРОСЛАВА', text: 'И улыбка тоже.', left: 'dora-idle', right: 'slava-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Её я не видела.', left: 'dora-blink', right: 'slava-soft' },
        { speaker: 'НЕЙРОСЛАВА', text: 'Вот и договорились.', left: 'dora-victory', right: 'slava-kind' }
      ]
    },
    {
      name: 'НЕЙРОМЭЙБИ',
      prefix: 'maybe',
      hp: 1735,
      approach: 0.0142,
      speedPar: 18,
      speedBonus: 9000,
      theme: 'maybe',
      interactionScale: 1.06,
      pre: [
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Добро пожаловать в Мэйбилэнд. Ненадолго.', left: 'dora-idle', right: 'maybe-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Я только бантик поправлю.', left: 'dora-wink', right: 'maybe-angry' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Не трогай бантик.', left: 'dora-blink', right: 'maybe-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Он криво.', left: 'dora-ready', right: 'maybe-angry' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Подойдёшь — пожалеешь.', left: 'dora-ready', right: 'maybe-defiant' }
      ],
      post: [
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Убери руку. Я не маленькая.', left: 'dora-idle', right: 'maybe-flustered' },
        { speaker: 'НЕЙРОДОРА', text: 'Убрала.', left: 'dora-blink', right: 'maybe-kind' },
        { speaker: 'НЕЙРОМЭЙБИ', text: '…Не так резко.', left: 'dora-wink', right: 'maybe-flustered' },
        { speaker: 'НЕЙРОДОРА', text: 'Ещё раз?', left: 'dora-idle', right: 'maybe-kind' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Один раз. И никому.', left: 'dora-victory', right: 'maybe-victory' },
        { speaker: 'НЕЙРОДОРА', text: 'Договорились.', left: 'dora-wink', right: 'maybe-kind' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'И дальше я с тобой.', left: 'dora-idle', right: 'maybe-kind' },
        { speaker: 'НЕЙРОДОРА', text: 'Это тоже секрет?', left: 'dora-wink', right: 'maybe-flustered' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Пока да.', left: 'dora-victory', right: 'maybe-victory' }
      ]
    },
    {
      name: 'НЕЙРОМОРГЕН',
      prefix: 'morgen',
      hp: 2535,
      approach: 0.0218,
      speedPar: 16,
      speedBonus: 12000,
      theme: 'morgen',
      interactionScale: 1.13,
      pre: [
        { speaker: 'НЕЙРОМОРГЕН', text: 'Вы вдвоём? Дорогой состав.', left: 'dora-idle', right: 'morgen-defiant' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'А тебя никто не спрашивал.', left: 'maybe-defiant', right: 'morgen-angry' },
        { speaker: 'НЕЙРОМОРГЕН', text: 'Я так не договаривался. По очереди.', left: 'maybe-angry', right: 'morgen-defiant' },
        { speaker: 'НЕЙРОДОРА', text: 'Не получится.', left: 'dora-blink', right: 'morgen-angry' },
        { speaker: 'НЕЙРОМОРГЕН', text: 'Понял. Будет громко.', left: 'dora-ready', right: 'morgen-defiant' }
      ],
      post: [
        { speaker: 'НЕЙРОМОРГЕН', text: 'Фото не выкладывайте.', left: 'maybe-kind', right: 'morgen-flustered' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Поздно.', left: 'maybe-victory', right: 'morgen-soft' },
        { speaker: 'НЕЙРОМОРГЕН', text: 'Хоть нормальное?', left: 'maybe-kind', right: 'morgen-kind' },
        { speaker: 'НЕЙРОДОРА', text: 'Ты там улыбаешься.', left: 'dora-wink', right: 'morgen-flustered' },
        { speaker: 'НЕЙРОМОРГЕН', text: 'Тогда выкладывайте.', left: 'dora-idle', right: 'morgen-soft' },
        { speaker: 'НЕЙРОМЭЙБИ', text: 'Вот и договорились.', left: 'maybe-victory', right: 'morgen-kind' }
      ]
    }
  ];

  const THEMES = {
    miron: {
      hostile: {
        skyTop: '#18142d', skyBottom: '#9b493b', cloud: '#756978',
        hills: '#271b2b', bushes: '#4b2e3d', ground: '#5d3740', grass: '#2d1c2a'
      },
      healed: {
        skyTop: '#51477c', skyBottom: '#f3a66f', cloud: '#f9e0d2',
        hills: '#5d435a', bushes: '#86505c', ground: '#bc7765', grass: '#65404d'
      }
    },
    slava: {
      hostile: {
        skyTop: '#474b5c', skyBottom: '#9295a1', cloud: '#c4c3c8',
        hills: '#464653', bushes: '#565a63', ground: '#666b70', grass: '#3e4249'
      },
      healed: {
        skyTop: '#76718c', skyBottom: '#c8a8b1', cloud: '#eee2e1',
        hills: '#656174', bushes: '#777080', ground: '#93808a', grass: '#595361'
      }
    },
    maybe: {
      hostile: {
        skyTop: '#33275d', skyBottom: '#c64c91', cloud: '#baa5d0',
        hills: '#49356b', bushes: '#6f3f77', ground: '#7d4779', grass: '#482b57'
      },
      healed: {
        skyTop: '#7779cf', skyBottom: '#f2a9ca', cloud: '#fff0f8',
        hills: '#846db0', bushes: '#b56ca0', ground: '#d387ad', grass: '#745080'
      }
    },
    morgen: {
      hostile: {
        skyTop: '#11172b', skyBottom: '#64512a', cloud: '#82795f',
        hills: '#312d24', bushes: '#51452d', ground: '#5f4d29', grass: '#352d21'
      },
      healed: {
        skyTop: '#35507a', skyBottom: '#e8b44a', cloud: '#fff0c8',
        hills: '#7d6031', bushes: '#a47a32', ground: '#c8953b', grass: '#71511f'
      }
    }
  };

  const PROLOGUE = [
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Говорят, я слишком милая для драки.',
      left: null,
      right: 'dora-idle'
    },
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Я и не собираюсь драться.',
      left: null,
      right: 'dora-wink'
    },
    {
      speaker: 'НЕЙРОДОРА',
      text: 'У меня другой способ.',
      left: null,
      right: 'dora-ready'
    }
  ];

  const EPILOGUE = [
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Ну что. Ещё кто-нибудь против кьют-рока?',
      left: 'dora-victory',
      right: 'maybe-kind'
    },
    {
      speaker: 'НЕЙРОСЛАВА',
      text: 'Я временно воздержусь.',
      left: 'dora-victory',
      right: 'slava-kind'
    },
    {
      speaker: 'НЕЙРОМИРОН',
      text: 'Это называется «передумал».',
      left: 'miron-kind',
      right: 'slava-flustered'
    },
    {
      speaker: 'НЕЙРОСЛАВА',
      text: 'Не порти момент.',
      left: 'miron-kind',
      right: 'slava-flustered'
    },
    {
      speaker: 'НЕЙРОМОРГЕН',
      text: 'Ближе встаньте. Фото сделаем.',
      left: 'maybe-kind',
      right: 'morgen-kind'
    },
    {
      speaker: 'НЕЙРОМЭЙБИ',
      text: 'Дора, ты со мной.',
      left: 'dora-victory',
      right: 'maybe-victory'
    },
    {
      speaker: 'НЕЙРОДОРА',
      text: 'Я и не уходила.',
      left: 'dora-wink',
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
    dayMix: 0,
    levelIndex: 0,
    score: 0,
    lastSpeedBonus: 0,
    lives: MAX_LIVES,
    hitCount: 0,
    enemy: null,
    allyJoined: false,
    kissReady: false,
    doraAction: 'idle',
    doraActionTime: 0,
    allyAction: 'idle',
    allyActionTime: 0,
    novelScenes: [],
    novelIndex: 0,
    novelDone: null,
    starting: false,
    muted: false
  };

  let audioContext = null;
  const soundBuffers = new Map();
  const soundBufferPromises = new Map();
  const soundOutputs = new Map();
  const activeSoundSources = new Set();
  let ready = false;
  let lastFrame = performance.now();
  let activeKissPointerId = null;
  let resizeFrame = null;
  const colorChannelCache = new Map();

  function show(element) {
    element.classList.remove('hidden');
  }

  function hide(element) {
    element.classList.add('hidden');
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function smoothstep(value) {
    const amount = clamp(value, 0, 1);
    return amount * amount * (3 - 2 * amount);
  }

  function lerp(a, b, amount) {
    return a + (b - a) * amount;
  }

  function colorChannels(value) {
    if (colorChannelCache.has(value)) return colorChannelCache.get(value);
    let channels;
    if (value.startsWith('#')) {
      const parsed = parseInt(value.slice(1), 16);
      channels = [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255];
    } else {
      const match = value.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
      if (!match) throw new Error('Unsupported colour: ' + value);
      channels = [Number(match[1]), Number(match[2]), Number(match[3])];
    }
    colorChannelCache.set(value, channels);
    return channels;
  }

  function mixHex(a, b, amount) {
    const [ar, ag, ab] = colorChannels(a);
    const [br, bg, bb] = colorChannels(b);
    return 'rgb(' +
      Math.round(lerp(ar, br, amount)) + ',' +
      Math.round(lerp(ag, bg, amount)) + ',' +
      Math.round(lerp(ab, bb, amount)) + ')';
  }

  function getScale() {
    // All poses share a 500px safety frame. Leave visible breathing room around
    // raised hands, recoil and the widest walk frames at every aspect ratio.
    const heightScale = view.h / 900 * 0.68;
    const widthScale = view.w / 900 * 0.86;
    return clamp(Math.min(heightScale, widthScale), 0.16, 0.75);
  }

  function getGround() {
    return view.h * 0.945;
  }

  function getActorEdgePadding() {
    return 250 * getScale() + Math.max(8, Math.min(24, view.w * 0.018));
  }

  function getEnemyStartX() {
    const edgePadding = getActorEdgePadding();
    return Math.max(edgePadding, Math.min(view.w * 0.82, view.w - edgePadding));
  }

  function getDoraX() {
    const scale = getScale();
    const safeMargin = getActorEdgePadding();
    if (game.levelIndex === 3) {
      // The duet must read as two friends sharing one side, without their
      // silhouettes merging into a single sprite.
      return Math.max(safeMargin, getAllyX() + 175 * scale, view.w * 0.19);
    }
    return Math.max(safeMargin, view.w * 0.185);
  }

  function getAllyX() {
    return Math.max(getActorEdgePadding(), view.w * 0.115);
  }

  function getContactX() {
    return getDoraX() + 108 * getScale();
  }

  function getBattleSpan() {
    return Math.max(1, getEnemyStartX() - getContactX());
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const oldStartX = getEnemyStartX();
    const oldSpan = getBattleSpan();
    const enemyProgress = game.enemy
      ? clamp((oldStartX - game.enemy.x) / oldSpan, 0, 1)
      : 0;
    // Never render to a larger logical minimum and squeeze it back down with
    // CSS: that distorted every sprite on narrow tablets and phones.
    view.w = Math.max(1, rect.width || 1600);
    view.h = Math.max(1, rect.height || 900);
    view.dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(view.w * view.dpr);
    canvas.height = Math.round(view.h * view.dpr);
    if (game.enemy) {
      // Preserve the opponent's progress through the lane, not raw pixels.
      // Rotating a phone or resizing a window must not shorten the battle.
      game.enemy.x = getEnemyStartX() - getBattleSpan() * enemyProgress;
    }
  }

  function scheduleResize() {
    if (resizeFrame !== null) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = null;
      resizeCanvas();
    });
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

  function syncBackgroundMusic() {
    if (!ui.music) return;
    ui.music.volume = MUSIC_VOLUME;
    ui.music.muted = game.muted;
    if (game.muted) {
      ui.music.pause();
      return;
    }
    const playing = ui.music.play();
    if (playing && typeof playing.catch === 'function') playing.catch(() => {});
  }

  function getSoundOutput(name, audio) {
    if (soundOutputs.has(name)) return soundOutputs.get(name);
    const config = SOUND_EFFECTS[name];
    if (!config || !audio) return null;
    const output = audio.createGain();
    output.gain.setValueAtTime(config.volume, audio.currentTime);
    output.connect(audio.destination);
    soundOutputs.set(name, output);
    return output;
  }

  function loadSoundBuffer(name) {
    if (soundBuffers.has(name)) return Promise.resolve(soundBuffers.get(name));
    if (soundBufferPromises.has(name)) return soundBufferPromises.get(name);
    const config = SOUND_EFFECTS[name];
    const audio = ensureAudio();
    if (!config || !audio || typeof fetch !== 'function') return Promise.resolve(null);
    const loading = fetch(config.src)
      .then((response) => {
        if (!response.ok) throw new Error('Cannot load sound: ' + name);
        return response.arrayBuffer();
      })
      .then((bytes) => audio.decodeAudioData(bytes))
      .then((buffer) => {
        soundBuffers.set(name, buffer);
        getSoundOutput(name, audio);
        return buffer;
      })
      .catch(() => null);
    soundBufferPromises.set(name, loading);
    return loading;
  }

  function preloadSoundEffects() {
    return Promise.all(Object.keys(SOUND_EFFECTS).map(loadSoundBuffer));
  }

  function playSample(name) {
    if (game.muted) return;
    const audio = ensureAudio();
    const buffer = soundBuffers.get(name);
    const output = getSoundOutput(name, audio);
    if (!audio || !buffer || !output) {
      // Decode once in the background, but do not queue a stale effect.
      loadSoundBuffer(name);
      return;
    }
    const source = audio.createBufferSource();
    source.buffer = buffer;
    source.connect(output);
    activeSoundSources.add(source);
    source.onended = () => activeSoundSources.delete(source);
    source.start();
  }

  function stopSoundSamples() {
    activeSoundSources.forEach((source) => {
      try {
        source.stop();
      } catch (error) {
        // A source may have completed between iteration and stop().
      }
    });
    activeSoundSources.clear();
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
    playSample('kiss');
  }

  function hitSound() {
    playSample('hit');
  }

  function setPortrait(element, key) {
    if (!key || !SPRITES[key]) {
      hide(element);
      element.removeAttribute('src');
      delete element.dataset.portraitKey;
      delete element.dataset.character;
      element.classList.remove('dim');
      return;
    }
    element.dataset.portraitKey = key;
    const character = key.split('-')[0];
    element.dataset.character = DIALOGUE_CHARACTERS.has(character) ? character : 'narrator';
    const portrait = PORTRAITS[key];
    element.src = portrait && portrait.complete && portrait.naturalWidth
      ? portrait.src
      : SPRITES[key].src;
    show(element);
    loadPortrait(key).then((loaded) => {
      if (loaded && element.dataset.portraitKey === key) element.src = loaded.src;
    });
  }

  function startNovel(scenes, done) {
    game.phase = 'novel';
    game.phaseTime = 0;
    game.novelScenes = scenes;
    game.novelIndex = 0;
    game.novelDone = done;
    show(ui.novel);
    // Load only the portraits for the current scene group. Gameplay sprites
    // are available immediately as a fallback, so a slow network never blocks
    // dialogue and future levels no longer inflate the initial download.
    preloadPortraits(scenes);
    renderNovelScene();
  }

  function renderNovelScene() {
    const scene = game.novelScenes[game.novelIndex];
    if (!scene) return;
    const speakerTheme = DIALOGUE_SPEAKER_THEMES[scene.speaker] || 'narrator';
    ui.novel.dataset.speaker = speakerTheme;
    ui.novelSpeaker.textContent = scene.speaker;
    ui.novelText.textContent = scene.text;
    setPortrait(ui.novelLeft, scene.left);
    setPortrait(ui.novelRight, scene.right);
    [ui.novelLeft, ui.novelRight].forEach((portrait) => {
      const isSomeoneSpeaking = speakerTheme !== 'narrator';
      portrait.classList.toggle(
        'dim',
        isSomeoneSpeaking && portrait.dataset.character !== speakerTheme
      );
    });
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
    game.dayMix = 0;
    game.levelIndex = 0;
    game.score = 0;
    game.lastSpeedBonus = 0;
    game.lives = MAX_LIVES;
    game.hitCount = 0;
    game.enemy = null;
    game.allyJoined = false;
    game.kissReady = false;
    game.doraAction = 'idle';
    game.doraActionTime = 0;
    game.allyAction = 'idle';
    game.allyActionTime = 0;
    game.novelScenes = [];
    game.novelIndex = 0;
    game.novelDone = null;
    activeKissPointerId = null;
    updateHud();
  }

  function returnToTitle() {
    resetRun();
    game.phase = 'title';
    game.starting = false;
    hide(ui.result);
    hide(ui.novel);
    hide(ui.hud);
    hide(ui.enemyBar);
    hide(ui.levelCard);
    ui.result.classList.remove('loss');
    show(ui.title);
    show(ui.sound);
    ui.start.focus();
  }

  async function startStory() {
    if (game.starting) return;
    game.starting = true;
    // Start from the user's click/keypress so mobile autoplay policies allow it.
    syncBackgroundMusic();
    await Promise.all([spritesReady, preloadPortraits(PROLOGUE), preloadSoundEffects()]);
    ready = true;
    resetRun();
    hide(ui.title);
    hide(ui.result);
    ui.result.classList.remove('loss');
    hide(ui.hud);
    hide(ui.enemyBar);
    hide(ui.levelCard);
    show(ui.sound);
    canvas.focus();
    ensureAudio();
    startNovel(PROLOGUE, () => prepareLevel(0));
    game.starting = false;
  }

  function prepareLevel(index) {
    const level = LEVELS[index];
    preloadPortraits(level.pre.concat(level.post));
    game.levelIndex = index;
    game.battleTime = 0;
    game.hitCount = 0;
    game.doraAction = 'idle';
    game.allyAction = 'idle';
    game.enemy = {
      x: getEnemyStartX(),
      hp: level.hp,
      maxHp: level.hp,
      hitTime: 0,
      walkTime: 0,
      alpha: 1,
      state: 'defiant'
    };
    shots.length = 0;
    game.dayMix = 0;
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

  function cancelKiss() {
    game.kissReady = false;
    if (game.phase !== 'battle') return;
    game.doraAction = 'idle';
    game.doraActionTime = 0;
    game.allyAction = 'kind';
    game.allyActionTime = 0;
  }

  function fireKiss() {
    if (game.phase !== 'battle') return;
    const kiss = { damage: 25, push: 2.2 };
    game.doraAction = 'kiss1';
    game.doraActionTime = 0;
    spawnKiss('dora', kiss, 0);
    kissSound();

    if (game.levelIndex === 3 && game.allyJoined) {
      game.allyAction = 'kiss';
      game.allyActionTime = 0;
      spawnKiss('maybe', {
        damage: 18,
        push: 1.4,
      }, 0.055);
    }
  }

  function spawnKiss(source, kiss, delay) {
    if (!game.enemy) return;
    const scale = getScale();
    const ground = getGround();
    // Anchors follow the actual lips in the approved, right-facing kiss poses.
    const mouth = KISS_MOUTH_ANCHORS[source];
    const sourceX = (source === 'maybe' ? getAllyX() : getDoraX()) + mouth.x * scale;
    const sourceY = ground - mouth.y * scale;
    const targetY = ground - 305 * scale;
    shots.push({
      source,
      x: sourceX,
      startX: sourceX,
      startY: sourceY,
      targetY,
      y: sourceY,
      // Each heart takes the same time to cross its full lane on every screen.
      // A narrow phone compresses the drawing, not the gameplay timing.
      speed: Math.max(1, getEnemyStartX() - sourceX) / HEART_TRAVEL_SECONDS,
      damage: kiss.damage,
      push: kiss.push,
      delay: delay || 0,
      age: 0,
      phase: 0,
      amplitude: clamp(view.h * 0.028, 14, 26),
      size: clamp(Math.min(view.w, view.h) * 0.021, 14, 22),
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
    const damage = shot.damage;
    const push = shot.push;
    game.hitCount += 1;

    enemy.hp = Math.max(0, enemy.hp - damage);
    enemy.hitTime = 0.16;
    enemy.x = Math.min(getEnemyStartX(), enemy.x + push * getScale());
    game.score += Math.round(damage * 24);
    updateHud();
    hitSound();

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

  function calculateSpeedBonus(level, battleSeconds) {
    const elapsed = Math.max(1, Number.isFinite(battleSeconds) ? battleSeconds : level.speedPar);
    // A par-time finish earns the listed bonus. Faster play can double it;
    // slower play still earns a smaller, continuously decreasing amount.
    const pace = clamp(level.speedPar / elapsed, 0.25, 2);
    return Math.round(level.speedBonus * pace);
  }

  function defeatEnemy() {
    if (game.phase !== 'battle') return;
    const level = LEVELS[game.levelIndex];
    game.lastSpeedBonus = calculateSpeedBonus(level, game.battleTime);
    game.score += game.lastSpeedBonus;
    updateHud();
    game.phase = 'enemyDefeated';
    game.phaseTime = 0;
    game.doraAction = 'wink';
    game.allyAction = 'kind';
    game.enemy.state = 'defeated';
    game.enemy.alpha = 1;
    shots.length = 0;
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
  }

  function startCuteWin() {
    game.phase = 'cuteWin';
    game.phaseTime = 0;
    game.doraAction = 'victory';
    game.allyAction = 'kind';
    shots.length = 0;
    hide(ui.enemyBar);
  }

  function finishLevelStory() {
    game.enemy = null;
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
    hide(ui.novel);
    ui.result.classList.toggle('loss', !won);
    ui.resultCast.src = won
      ? ROOT_V3 + 'dora-maybe-pat-4.webp'
      : ROOT_V3 + 'dora-defeat.webp';
    if (won) {
      ui.resultKicker.textContent = 'КЬЮТ-РОК ПРОТИВ ВСЕХ';
      ui.resultTitle.textContent = 'ПОБЕДА';
      ui.resultText.textContent = 'ИГРА ПРОЙДЕНА.';
      show(ui.telegram);
      tone(660, 0.2, 'sine', 0.025, 0);
      tone(880, 0.25, 'sine', 0.025, 0.16);
      tone(1100, 0.35, 'sine', 0.02, 0.34);
    } else {
      ui.resultKicker.textContent = 'ИГРА ОКОНЧЕНА';
      ui.resultTitle.textContent = 'ПОРАЖЕНИЕ';
      ui.resultText.textContent = 'ПОПРОБУЙ ЕЩЁ РАЗ.';
      hide(ui.telegram);
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
      const flutterIn = clamp(shot.age / 0.22, 0, 1);
      const changingAmplitude = shot.amplitude * (0.82 + Math.sin(shot.age * 1.35) * 0.18);
      const primaryFlutter = Math.sin(shot.age * 4.05) * changingAmplitude;
      const softSway = Math.sin(shot.age * 2.15) * shot.amplitude * 0.18;
      shot.y = baseY + (primaryFlutter + softSway) * flutterIn;

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
      if (dash > 5.4) speedFactor = 1.65;
    } else if (game.levelIndex === 3 && enemy.hp / enemy.maxHp < 0.5) {
      speedFactor = 1.34;
    }

    // Move through a fixed fraction of the playable lane per second. The lane
    // is shorter on narrow screens because actors need safe edge padding.
    const travel = getBattleSpan() * level.approach * speedFactor *
      ENEMY_SPEED_MULTIPLIER / BATTLE_REFERENCE_SPAN * dt;
    enemy.x -= travel;
    // Animation cadence is time-based, so the same walk cycle is shown on a
    // phone and a desktop. Dashes still speed the feet up naturally.
    enemy.walkTime += dt * speedFactor;
    updateShots(dt);

    if (enemy.x <= getContactX()) enemyReachedDora();
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
          game.enemy.x = getEnemyStartX();
          game.enemy.state = 'walk';
          game.doraAction = 'idle';
          game.allyAction = 'kind';
          game.phase = 'battle';
          game.phaseTime = 0;
        }
      }
    } else if (game.phase === 'enemyDefeated') {
      game.dayMix = clamp(game.dayMix + dt * 0.9, 0, 1);
      if (game.phaseTime > 0.9) startCuteWin();
    } else if (game.phase === 'cuteWin') {
      game.dayMix = clamp(game.dayMix + dt * 0.55, 0, 1);
      if (game.phaseTime > CUTE_WIN_DURATION) {
        const post = LEVELS[game.levelIndex].post;
        game.phase = 'storyPause';
        game.enemy = null;
        startNovel(post, finishLevelStory);
      }
    } else if (game.phase === 'walk') {
      // Challenge speed must not accelerate Dora's feet or the scenery.
      game.worldOffset += view.w * WALK_SCROLL_SPEED_PER_VIEW * dt;
      if (game.phaseTime > 3.35) {
        prepareLevel(game.levelIndex + 1);
      }
    }
  }

  function wrapped(base, width, offset) {
    return ((base - offset) % width + width) % width;
  }

  function themePalette(index, healed) {
    const key = LEVELS[index] ? LEVELS[index].theme : 'miron';
    const theme = THEMES[key];
    const palette = {};
    Object.keys(theme.hostile).forEach((name) => {
      palette[name] = mixHex(theme.hostile[name], theme.healed[name], healed);
    });
    return { key, palette };
  }

  function mixPalette(first, second, amount) {
    const palette = {};
    Object.keys(first).forEach((name) => {
      palette[name] = mixHex(first[name], second[name], amount);
    });
    return palette;
  }

  function backdropState() {
    const current = themePalette(game.levelIndex, game.dayMix);
    if (game.phase !== 'walk' || game.levelIndex >= LEVELS.length - 1) {
      return {
        palette: current.palette,
        currentKey: current.key,
        nextKey: null,
        transition: 0,
        healed: game.dayMix
      };
    }
    const transition = smoothstep((game.phaseTime - 0.85) / 2.2);
    const next = themePalette(game.levelIndex + 1, 0);
    return {
      palette: mixPalette(current.palette, next.palette, transition),
      currentKey: current.key,
      nextKey: next.key,
      transition,
      healed: lerp(game.dayMix, 0, transition)
    };
  }

  function drawCloud(x, y, scale, alpha, color) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, 92 * scale, 29 * scale, 0, 0, Math.PI * 2);
    ctx.ellipse(x - 55 * scale, y + 8 * scale, 57 * scale, 22 * scale, 0, 0, Math.PI * 2);
    ctx.ellipse(x + 62 * scale, y + 9 * scale, 67 * scale, 23 * scale, 0, 0, Math.PI * 2);
    ctx.ellipse(x + 3 * scale, y - 17 * scale, 52 * scale, 31 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawThemeLandmarks(key, alpha, healed) {
    if (alpha <= 0) return;
    const offset = game.worldOffset * 0.18;
    ctx.save();
    ctx.globalAlpha = alpha;

    if (key === 'miron') {
      ctx.fillStyle = mixHex('#1c1422', '#5b3d50', healed);
      for (let i = -1; i < 9; i += 1) {
        const x = i * (view.w / 7) - (offset % (view.w / 7));
        const base = view.h * 0.76;
        const peak = base - view.h * (0.12 + (i % 3 + 3) % 3 * 0.035);
        ctx.beginPath();
        ctx.moveTo(x - view.w * 0.1, base);
        ctx.lineTo(x, peak);
        ctx.lineTo(x + view.w * 0.1, base);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = mixHex('#140f1c', '#684551', healed);
      [0.16, 0.42, 0.72, 0.9].forEach((ratio, index) => {
        const x = ratio * view.w - (offset * 0.4 % view.w);
        const base = view.h * 0.75;
        const height = view.h * (0.13 + index % 2 * 0.04);
        ctx.fillRect(x - 5, base - height, 10, height);
        ctx.beginPath();
        ctx.moveTo(x - 15, base - height);
        ctx.lineTo(x, base - height - 25);
        ctx.lineTo(x + 15, base - height);
        ctx.closePath();
        ctx.fill();
      });
    } else if (key === 'slava') {
      ctx.fillStyle = mixHex('#3b3c47', '#625b6c', healed);
      const blockWidth = Math.max(90, view.w * 0.11);
      for (let i = -1; i < Math.ceil(view.w / blockWidth) + 2; i += 1) {
        const x = i * blockWidth - (offset % blockWidth);
        const top = view.h * (0.57 + (i % 3 + 3) % 3 * 0.045);
        ctx.fillRect(x, top, blockWidth - 7, view.h * 0.78 - top);
        ctx.fillStyle = mixHex('#757683', '#a8899a', healed);
        for (let row = 0; row < 2; row += 1) {
          ctx.fillRect(x + 18 + row * 35, top + 18, 12, 9);
        }
        ctx.fillStyle = mixHex('#3b3c47', '#625b6c', healed);
      }
      ctx.save();
      ctx.translate(view.w * 0.72, view.h * 0.58);
      ctx.rotate(-0.045);
      ctx.fillStyle = mixHex('#777985', '#ad879c', healed);
      ctx.fillRect(-62, -24, 124, 48);
      ctx.fillStyle = '#ddd4db';
      ctx.fillRect(-4, 24, 8, 72);
      ctx.restore();
    } else if (key === 'maybe') {
      ctx.strokeStyle = mixHex('#4a3768', '#8e5b91', healed);
      ctx.lineWidth = Math.max(2, view.h / 330);
      const fenceY = view.h * 0.7;
      ctx.beginPath();
      ctx.moveTo(0, fenceY);
      ctx.lineTo(view.w, fenceY);
      for (let x = -(offset % 62); x < view.w + 62; x += 62) {
        ctx.moveTo(x, fenceY - 62);
        ctx.lineTo(x, fenceY + 58);
      }
      ctx.stroke();
      ctx.fillStyle = mixHex('#674071', '#bc73a8', healed);
      for (let i = 0; i < 8; i += 1) {
        const x = wrapped(i * 213 + 40, view.w + 180, offset) - 70;
        ctx.beginPath();
        ctx.arc(x, fenceY - 55 - (i % 2) * 20, 10 + (i % 3) * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (key === 'morgen') {
      ctx.fillStyle = mixHex('#3c321f', '#9e7630', healed);
      for (let i = -1; i < 7; i += 1) {
        const width = view.w * 0.23;
        const x = i * width - (offset % width);
        const base = view.h * 0.78;
        const peak = base - view.h * (0.2 + (i % 3 + 3) % 3 * 0.045);
        ctx.beginPath();
        ctx.moveTo(x - width * 0.7, base);
        ctx.lineTo(x, peak);
        ctx.lineTo(x + width * 0.72, base);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = mixHex('#675027', '#d7a33e', healed);
        ctx.beginPath();
        ctx.moveTo(x, peak);
        ctx.lineTo(x + width * 0.22, base);
        ctx.lineTo(x + width * 0.72, base);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = mixHex('#3c321f', '#9e7630', healed);
      }
      ctx.fillStyle = mixHex('#b28738', '#ffe19a', healed);
      ctx.beginPath();
      ctx.arc(view.w * 0.82, view.h * 0.16, view.h * 0.045, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawBackground(state) {
    const palette = state.palette;
    const gradient = ctx.createLinearGradient(0, 0, 0, view.h);
    gradient.addColorStop(0, palette.skyTop);
    gradient.addColorStop(1, palette.skyBottom);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, view.w, view.h);

    drawThemeLandmarks(state.currentKey, 1 - state.transition, game.dayMix);
    if (state.nextKey) drawThemeLandmarks(state.nextKey, state.transition, 0);

    const cloudOffset = game.worldOffset * 0.09;
    const cloudPeriod = view.w + 560;
    drawCloud(wrapped(view.w * 0.08, cloudPeriod, cloudOffset) - 200, view.h * 0.19, view.h / 900, 0.68, palette.cloud);
    drawCloud(wrapped(view.w * 0.48, cloudPeriod, cloudOffset) - 120, view.h * 0.29, view.h / 1150, 0.58, palette.cloud);
    drawCloud(wrapped(view.w * 0.83, cloudPeriod, cloudOffset) - 80, view.h * 0.2, view.h / 980, 0.64, palette.cloud);

    const hillOffset = game.worldOffset * 0.32;
    ctx.fillStyle = palette.hills;
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

    ctx.fillStyle = palette.bushes;
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

    ctx.fillStyle = palette.ground;
    ctx.fillRect(0, view.h * 0.79, view.w, view.h * 0.21);

    if (state.healed > 0.35) {
      ctx.save();
      ctx.globalAlpha = clamp((state.healed - 0.35) / 0.65, 0, 1);
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

  function drawForegroundGrass(state) {
    const palette = state.palette;
    const offset = game.worldOffset * 1.05;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.strokeStyle = palette.grass;
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

  function walkFrame(prefix, elapsedSeconds) {
    return prefix + '-walk-' + String((Math.floor(elapsedSeconds * WALK_FRAMES_PER_SECOND) % 6) + 1);
  }

  function spriteOpticalOffset(key) {
    const match = key && key.match(/^(dora|miron|slava|maybe|morgen)-walk-([1-6])$/);
    if (!match) return 0;
    return WALK_OPTICAL_OFFSETS[match[1]][Number(match[2]) - 1];
  }

  function currentDoraSprite() {
    if (game.phase === 'walk') return walkFrame('dora', game.phaseTime);
    if (game.phase === 'hurt') return game.phaseTime < 0.36 ? 'dora-hit' : 'dora-defeat';
    if (game.phase === 'enemyDefeated') {
      return game.phaseTime > 0.48 ? 'dora-victory' : 'dora-wink';
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
    if (game.phase === 'walk') {
      // Half a cycle apart reads as two friends walking together rather than
      // one duplicated animation.
      return walkFrame('maybe', game.phaseTime + 3 / WALK_FRAMES_PER_SECOND);
    }
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
    return walkFrame(prefix, game.enemy.walkTime);
  }

  function drawActor(key, x, ground, scale, options) {
    const image = SPRITES[key];
    if (!image || !image.complete || image.naturalWidth === 0) return;
    const opts = options || {};
    const displayScale = scale * (opts.uniformScale || 1);
    const stretchY = opts.stretchY || 1;
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    ctx.save();
    ctx.globalAlpha = opts.alpha == null ? 1 : opts.alpha;
    const opticalOffset = spriteOpticalOffset(key);
    // Every approved gameplay frame carries the same 3 px transparent safety
    // strip below the shoes. Compensating it here makes the visible soles, not
    // the PNG rectangle, touch the ground line. The per-frame optical offset
    // removes the generated walk-cycle's sideways jitter without flattening
    // its natural head-and-shoulder bounce.
    ctx.translate(x, ground + SPRITE_FOOT_PADDING * displayScale + (opts.y || 0));
    ctx.scale(opts.flipX ? -1 : 1, stretchY);
    ctx.drawImage(
      image,
      (-width / 2 - opticalOffset) * displayScale,
      -height * displayScale,
      width * displayScale,
      height * displayScale
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
    for (const shot of shots) {
      if (shot.delay > 0) continue;
      for (let trail = 1; trail <= 2; trail += 1) {
        ctx.save();
        ctx.globalAlpha = 0.22 / trail;
        ctx.fillStyle = trail === 1 ? '#fff8fb' : shot.color;
        ctx.beginPath();
        ctx.arc(
          shot.x - trail * shot.size * 0.72,
          shot.y + Math.sin(shot.age * 4.05 - trail * 0.7) * shot.size * 0.18,
          shot.size * (0.20 - trail * 0.045),
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }
      const breathe = 1 + Math.sin(shot.age * 3.1) * 0.045;
      drawHeart(shot.x, shot.y, shot.size * breathe, shot.color, 1);
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

  function getKissRecoilOffset(action, actionTime, strength) {
    const distance = KISS_RECOIL_DISTANCE * getScale() * (strength || 1);
    if (action === 'kiss2') {
      return distance * smoothstep(actionTime / 0.07);
    }
    if (action === 'recoil') {
      return distance * (1 - smoothstep(actionTime / 0.09));
    }
    if (action === 'kiss') {
      const progress = clamp(actionTime / 0.16, 0, 1);
      return distance * 0.78 * Math.sin(progress * Math.PI);
    }
    return 0;
  }

  function drawSeparateActors(alpha, positions, renderOptions) {
    const scale = getScale();
    const ground = getGround();
    const actorAlpha = alpha == null ? 1 : alpha;
    const render = renderOptions || {};
    const actorPositions = positions || {
      enemy: game.enemy ? game.enemy.x : getEnemyStartX(),
      ally: getAllyX(),
      dora: getDoraX()
    };
    const breathing = !render.doraSprite && game.phase === 'battle' && game.doraAction === 'idle'
      ? 1 + Math.sin(game.totalTime * 2.8) * 0.004
      : 1;

    if (game.enemy) {
      const enemyPrefix = LEVELS[game.levelIndex].prefix;
      drawActor(
        render.enemySprite || currentEnemySprite(),
        actorPositions.enemy,
        ground,
        scale * (render.enemyScale || 1),
        {
          alpha: game.enemy.alpha * actorAlpha,
          // Maybe's approved sheet faces right for her later ally role. As an
          // opponent she approaches Dora from the right and must face left.
          flipX: enemyPrefix === 'maybe'
        }
      );
    }

    if (actorAlpha > 0.7) drawShots();

    if (game.allyJoined && game.levelIndex >= 2) {
      drawActor(
        render.allySprite || currentAllySprite(),
        actorPositions.ally - getKissRecoilOffset(game.allyAction, game.allyActionTime, 0.8),
        ground,
        scale * (render.allyScale || 1),
        {
          stretchY: game.phase === 'battle' ? 1 + Math.sin(game.totalTime * 2.6 + 1) * 0.003 : 1,
          flipX: game.allyAction === 'kiss',
          alpha: actorAlpha
        }
      );
    }

    const doraSprite = render.doraSprite || currentDoraSprite();
    drawActor(
      doraSprite,
      actorPositions.dora - getKissRecoilOffset(game.doraAction, game.doraActionTime, 1),
      ground,
      scale * (render.doraScale || 1),
      {
        stretchY: breathing,
        alpha: actorAlpha,
        flipX: false
      }
    );
  }

  function getInteractionFrame() {
    const time = Math.max(0, game.phaseTime);
    if (time < 0.46) return 1;
    if (time < 0.92) return 2;
    if (time < 1.38) return 3;
    if (time < 1.84) return 4;
    if (time < 2.3) return 5;
    return 6;
  }

  function getInteractionUniformScale(prefix) {
    const level = LEVELS.find((item) => item.prefix === prefix) || LEVELS[game.levelIndex];
    const image = SPRITES[prefix + '-interaction-1'];
    const width = image && image.naturalWidth ? image.naturalWidth : (prefix === 'morgen' ? 980 : 720);
    const height = image && image.naturalHeight ? image.naturalHeight : 520;
    const baseScale = Math.max(0.001, getScale());
    const sideRoom = Math.max(8, view.w * 0.025);
    const topRoom = Math.max(8, view.h * 0.035);
    const widthFit = (view.w - sideRoom * 2) / (width * baseScale);
    const heightFit = (getGround() - topRoom) / (height * baseScale);
    return Math.max(0.5, Math.min(level.interactionScale, widthFit, heightFit));
  }

  function drawActors() {
    if (game.phase === 'cuteWin') {
      const scale = getScale();
      const ground = getGround();
      const level = LEVELS[game.levelIndex];
      const prefix = level.prefix;
      drawActor(
        prefix + '-interaction-' + String(getInteractionFrame()),
        view.w * 0.5,
        ground,
        scale,
        {
          uniformScale: getInteractionUniformScale(prefix),
          flipX: prefix === 'miron' || prefix === 'slava'
        }
      );
      return;
    }
    drawSeparateActors(1);
  }

  function draw() {
    // Title and result screens are opaque DOM layers. Avoid doing a full
    // canvas scene render behind them on every animation frame.
    if (game.phase === 'title' || game.phase === 'result') return;
    ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.clearRect(0, 0, view.w, view.h);
    const state = backdropState();
    drawBackground(state);
    drawForegroundGrass(state);
    if (ready && game.phase !== 'title' && game.phase !== 'result' && game.phase !== 'novel') {
      drawActors();
      drawParticles();
    }
  }

  function frame(now) {
    if (document.hidden) {
      lastFrame = now;
      requestAnimationFrame(frame);
      return;
    }
    const dt = Math.min(0.034, Math.max(0, (now - lastFrame) / 1000));
    lastFrame = now;
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }

  ui.start.disabled = true;
  ui.start.innerHTML = '<span>ЗАГРУЖАЕМ</span><b>♥</b>';
  Promise.all([spritesReady, preloadPortraits(PROLOGUE)]).then(() => {
    ready = true;
    ui.start.disabled = false;
    ui.start.innerHTML = '<span>ИГРАТЬ</span><b>♥</b>';
  });

  ui.start.addEventListener('click', startStory);
  ui.restart.addEventListener('click', returnToTitle);
  ui.novelNext.addEventListener('click', advanceNovel);
  ui.sound.addEventListener('click', () => {
    game.muted = !game.muted;
    if (game.muted) stopSoundSamples();
    ui.sound.textContent = game.muted ? '×' : '♪';
    ui.sound.setAttribute('aria-label', game.muted ? 'Включить звук' : 'Выключить звук');
    syncBackgroundMusic();
    if (!game.muted) {
      preloadSoundEffects();
      tone(660, 0.08, 'sine', 0.018, 0);
    }
  });
  window.addEventListener('keydown', (event) => {
    if (game.phase === 'title' && (event.code === 'Enter' || event.code === 'Space')) {
      event.preventDefault();
      if (!event.repeat) startStory();
      return;
    }
    if (event.code !== 'Space') return;
    event.preventDefault();
    if (game.phase === 'battle') {
      if (!event.repeat) readyKiss();
      return;
    }
    if (event.repeat) return;
    if (game.phase === 'novel') advanceNovel();
    else if (game.phase === 'result') returnToTitle();
  });

  window.addEventListener('keyup', (event) => {
    if (event.code !== 'Space') return;
    event.preventDefault();
    releaseKiss();
  });

  canvas.addEventListener('pointerdown', (event) => {
    if (game.phase !== 'battle' || activeKissPointerId !== null) return;
    event.preventDefault();
    activeKissPointerId = event.pointerId;
    if (typeof canvas.setPointerCapture === 'function') {
      canvas.setPointerCapture(event.pointerId);
    }
    readyKiss();
  });
  canvas.addEventListener('pointerup', (event) => {
    if (event.pointerId !== activeKissPointerId) return;
    event.preventDefault();
    activeKissPointerId = null;
    releaseKiss();
  });
  canvas.addEventListener('pointercancel', (event) => {
    if (event.pointerId !== activeKissPointerId) return;
    activeKissPointerId = null;
    cancelKiss();
  });
  canvas.addEventListener('lostpointercapture', (event) => {
    if (event.pointerId !== activeKissPointerId) return;
    activeKissPointerId = null;
    cancelKiss();
  });
  window.addEventListener('blur', () => {
    activeKissPointerId = null;
    cancelKiss();
  });
  document.addEventListener('visibilitychange', () => {
    lastFrame = performance.now();
    if (document.hidden) {
      activeKissPointerId = null;
      cancelKiss();
    } else if (!game.muted && game.phase !== 'title') {
      syncBackgroundMusic();
    }
  });

  window.addEventListener('resize', scheduleResize, { passive: true });
  if (typeof ResizeObserver === 'function') {
    const stageResizeObserver = new ResizeObserver(scheduleResize);
    stageResizeObserver.observe(ui.stage);
  }
  resizeCanvas();
  requestAnimationFrame(frame);

  window.__cuteRockGame = {
    game,
    LEVELS,
    SPRITES,
    shots,
    particles,
    startStory,
    returnToTitle,
    syncBackgroundMusic,
    prepareLevel,
    beginBattle,
    readyKiss,
    releaseKiss,
    cancelKiss,
    fireKiss,
    showResult,
    advanceNovel,
    update,
    draw,
    resizeCanvas,
    currentDoraSprite,
    currentAllySprite,
    currentEnemySprite,
    getEnemy: () => game.enemy,
    getDoraX,
    getAllyX,
    getEnemyStartX,
    getContactX,
    getBattleSpan,
    calculateSpeedBonus,
    preloadSoundEffects,
    getDecodedSoundCount: () => soundBuffers.size,
    getActiveSoundCount: () => activeSoundSources.size,
    getScale,
    getGround,
    getInteractionUniformScale,
    spriteOpticalOffset,
    mixHex,
    backdropState,
    preloadPortraits,
    getLoadedPortraitCount: () => portraitPromises.size,
    getView: () => ({ ...view })
  };
})();
