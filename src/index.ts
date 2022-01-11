import idleSpriteImg from "./sprites/idle.png";

const canvas = document.createElement("canvas");
canvas.width = canvas.height = 150;
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

idleSpriteSheet.onload = () => {
  ctx?.drawImage(
    idleSpriteSheet,
    0,
    0,
    spriteSize.w,
    spriteSize.h,
    0,
    0,
    spriteSize.w,
    spriteSize.h
  );
};
