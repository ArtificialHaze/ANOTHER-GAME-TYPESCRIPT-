export const MAX_ROWS = 9;
export const MAX_COLS = 9;
export const NO_OF_BOMBS = 10;

export enum CellValue {
  none,
  bomb,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}

export enum CellState {
  open,
  visible,
  flagged,
}

export type Cell = {
  value: CellValue;
  state: CellState;
  red?: boolean;
};

export enum Face {
  smile = "😁",
  oh = "😮",
  lost = "😵",
  won = "😎",
}
