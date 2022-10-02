export enum LayerType {
  Heatmap = "heatmap",
  Circle = 'circle',
}

export interface Layer {
  type: LayerType;
  color: string;
  src: string;
}

export interface DataStore {
  layers: Layer[];
}