import idleSpriteImg from "./sprites/idle.png";

const spriteSize = {
  w: 119,
  h: 124,
};

const canvasScale = 2.5;

const canvasSize = {
  w: spriteSize.w * canvasScale,
  h: spriteSize.h * canvasScale,
};

const canvas = document.createElement("canvas");
canvas.width = canvasSize.w;
canvas.height = canvasSize.h;
const ctx = canvas.getContext("2d");
ctx && (ctx.imageSmoothingEnabled = false);

const idleSpriteSheet = document.createElement("img");
idleSpriteSheet.src = idleSpriteImg;

const root =
  document.querySelector(".root") ||
  document.createElement("div");

root.appendChild(canvas);

const renderSprite = (frame: number) => {
  ctx?.clearRect(0, 0, canvasSize.w, canvasSize.h);
  ctx?.drawImage(
    idleSpriteSheet,
    0,
    frame * spriteSize.h,
    spriteSize.w,
    spriteSize.h,
    0,
    0,
    canvasSize.w,
    canvasSize.h
  );
};
let currentFrame = 0;
let prevTs = 0;
const loop = (ts: number = 0) => {
  if (ts - prevTs > 150) {
    if (currentFrame <= 8) {
      renderSprite(currentFrame);
      currentFrame++;
    } else {
      currentFrame = 1;
    }

    prevTs = ts;
  }

  window.requestAnimationFrame(loop);
};

loop();
