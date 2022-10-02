export enum LayerType {
  Heatmap = "heatmap",
  Circle = 'circle',
}

export interface Layer {
  title?: string;
  type: LayerType;
  color: string;
  src: string | Object;
}

export interface DataStore {
  layers: Layer[];
}

export interface Tecnicos {
  title: string;
  items: Object;
}
