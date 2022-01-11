interface SpriteSheetProperties {
  size: { w: number; h: number };
  stateList: {
    [index: string | number]: {
      name: string;
      index: number;
      numOfFrames: number;
    };
  };
  initialState: string;
  initialFrame?: number;
}

export default class SpriteSheet {
  private readonly canvas = document.createElement("canvas");
  private readonly ctx = this.canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  private readonly image: HTMLImageElement;

  private properties: SpriteSheetProperties;
  private _currentState: string;
  private currentFrame: number;

  constructor(
    image: HTMLImageElement,
    props: SpriteSheetProperties
  ) {
    this.properties = props;
    this.image = image;

    this._currentState = props.initialState;

    this.currentFrame = props.initialFrame || -1;

    this.ctx.imageSmoothingEnabled = false;
    this.canvas.width = props.size.w;
    this.canvas.height = props.size.h;
  }

  set currentState(state: string) {
    this.properties.stateList[state] &&
      (this._currentState = state);
    this.currentFrame = -1;
  }

  nextFrame(): HTMLCanvasElement {
    this.currentFrame++;
    const maxFrames =
      this.properties.stateList[this._currentState]
        .numOfFrames - 1;

    const index =
      this.properties.stateList[this._currentState].index;

    const { w, h } = this.properties.size;

    if (this.currentFrame > maxFrames) {
      this.currentFrame = -1;
      return this.nextFrame();
    }

    this.ctx.clearRect(0, 0, w, h);

    this.ctx.drawImage(
      this.image, // img
      this.currentFrame * w, // sx
      index * h, // sy
      w, // sW
      h, // sH
      0, // dx
      0, // dy
      w, // dW
      h // dH
    );
    return this.canvas;
  }
}
