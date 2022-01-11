type Key = "UP" | "DOWN" | "LEFT" | "RIGHT" | "OTHER"
interface KeyList {
  [index: string]: Key;
}

export default class KeyboardController {
  private readonly keys: KeyList = {
    ["KeyW"]: "UP",
    ["ArrowUp"]: "UP",
    ["KeyA"]: "LEFT",
    ["ArrowLeft"]: "LEFT",
    ["KeyS"]: "DOWN",
    ["ArrowDown"]: "DOWN",
    ["KeyD"]: "RIGHT",
    ["ArrowRight"]: "RIGHT",
  };

  element = document.createElement("div");
  onControll!: (e: Key) => any;

  private keyDownHandler = (e: KeyboardEvent): void => {
    this.onControll(this.keys[e.code] || "OTHER");
  };

  constructor() {
    document.addEventListener("keydown", this.keyDownHandler);
  }
}
