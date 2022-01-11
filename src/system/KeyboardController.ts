interface KeyList {
  [index: string]: string;
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
  onControll!: (e: string) => any;

  private keyDownHandler = (e: KeyboardEvent): void => {
    this.onControll(this.keys[e.code] || "");
  };

  constructor() {
    document.addEventListener("keydown", this.keyDownHandler);
  }
}
