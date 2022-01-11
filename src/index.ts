import skeletonImgSrc from "./sprites/skeleton.png";
import SpriteSheet from "./system/SpriteSheet";

// import KeyboardController from "./system/KeyboardController";
// const controller = new KeyboardController();
// controller.onControll = (e: string) => {
//   // console.log("Event Listened", e);
// };
const skeletonImage = document.createElement("img");
skeletonImage.src = skeletonImgSrc;

skeletonImage.addEventListener("load", (ev) => {
  const skeletonSpriteSheet = new SpriteSheet(skeletonImage, {
    size: {
      w: 64,
      h: 64,
    },
    stateList: {
      attack: {
        name: "attack",
        index: 0,
        numOfFrames: 13,
      },
      idle: {
        name: "idle",
        index: 3,
        numOfFrames: 4,
      },
    },
    initialState: "idle",
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;
  // ctx.imageSmoothingEnabled = false;
  canvas.width = 64;
  canvas.height = 64;

  const root = document.querySelector(".root") as HTMLElement;
  root.appendChild(canvas);

  const renderSprite = () => {
    ctx.clearRect(0, 0, 64, 64);
    ctx.drawImage(skeletonSpriteSheet.nextFrame(), 0, 0);
  };

  let previousTs = 0;
  const gameLoop = (ts: number) => {
    if (ts - previousTs > 100) {
      renderSprite();
      previousTs = ts;
    }

    window.requestAnimationFrame(gameLoop);
  };

  skeletonSpriteSheet.currentState = "attack";
  gameLoop(previousTs);
});

// const renderSprite = (frame: number) => {
//   ctx?.clearRect(0, 0, canvasSize.w, canvasSize.h);
//   ctx?.drawImage(
//     idleSpriteSheet,
//     0,
//     frame * spriteSize.h,
//     spriteSize.w,
//     spriteSize.h,
//     0,
//     0,
//     canvasSize.w,
//     canvasSize.h
//   );
// };
// let currentFrame = 0;
// let prevTs = 0;
// const loop = (ts: number = 0) => {
//   if (ts - prevTs > 150) {
//     if (currentFrame <= 8) {
//       renderSprite(currentFrame);
//       currentFrame++;
//     } else {
//       currentFrame = 0;
//     }

//     prevTs = ts;
//   }

//   window.requestAnimationFrame(loop);
// };

// loop();
