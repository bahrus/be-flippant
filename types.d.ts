


export interface StyleMap {
    readonly [key: string]: string | number;
}
export  interface Rect extends ClientRect {
    readonly top: number;
    readonly bottom: number;
    readonly left: number;
    readonly right: number;
    readonly width: number;
    readonly height: number;
    readonly transform?: string;
}

export interface Delta extends Partial<Rect> {
    x: number;
    y: number;
    widthRatio: number;
    heightRatio: number;
}

export type FlipData = {
    state:
      | 'read'
      | 'pre-enter'
      | 'enter'
      | 'pre-move'
      | 'move'
      | 'pre-exit'
      | 'exit';
    key: string;
    element: HTMLElement | undefined;
    rect: Rect | undefined;
    styles: StyleMap | undefined;
    delta: Delta;
    inverse: Delta;
    previous: FlipData | undefined;
  };

export type FlipElementMap = Record<string, HTMLElement | undefined>;
  
export type FlipListener = (data: FlipData) => void;

export interface FlippingConfig {
    getKey: ((element: HTMLElement) => string | null | undefined) | string;
}