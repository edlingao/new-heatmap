import { Layer, LayerType } from '../types/dataset';
import general from '../assets/json/general.json';

export function selectDatalayer(localities: string[], color: string, title: string): Layer[] {
  const newGeoJSON = {...general};
  
  newGeoJSON.features = newGeoJSON
    .features
    .filter(
      ({properties: {Name: name}}) => 
        localities.some(
          localityName => localityName.toLowerCase() === name.toLowerCase()
        ));

  return [
    {
      title,
      color,
      type: LayerType.Heatmap,
      src: newGeoJSON,
    },
    {
      title,
      color,
      type: LayerType.Circle,
      src: newGeoJSON,
    }
  ]
}