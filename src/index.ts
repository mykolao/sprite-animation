import idleSpriteImg from "./sprites/idle.png";

const canvas = document.createElement("canvas");
canvas.width = 119;
canvas.height = 124;
const ctx = canvas.getContext("2d");

const idleSpriteSheet = document.createElement("img");
idleSpriteSheet.src = idleSpriteImg;

const spriteSize = {
  w: 119,
  h: 124,
};

const root =
  document.querySelector(".root") ||
  document.createElement("div");

root.appendChild(canvas);

const renderSprite = (frame: number) => {
  console.log(frame);
  ctx?.clearRect(0, 0, 119, 124);
  ctx?.drawImage(
    idleSpriteSheet,
    0,
    frame * spriteSize.h,
    spriteSize.w,
    spriteSize.h,
    0,
    0,
    spriteSize.w,
    spriteSize.h
  );
};
let currentFrame = 0;
let prevTs = 0;
const loop = (ts: number = 0) => {
  if (ts - prevTs > 100) {
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

idleSpriteSheet.onload = () => {
  loop();
};
