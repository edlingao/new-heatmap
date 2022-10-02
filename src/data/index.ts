import { createStore } from 'solid-js/store';
import { Abejas, Aves, AvesPorcinos, Bovinos, BovinosCaprinosOvinos, BovinosCaprinosPorcinosEquinosPorcinos, Caprinos, CaprinosAbejas, Conejos, Obvinos, Porcinos, Cafe, CafeYMiel, Frijol, Maiz, MaizYFrijol, Miel } from './heatMapDatasets';
import { DataStore } from '../types/dataset';


const initialDataStore: DataStore = {
  layers: []
}

export const [dataStore, setData] = createStore(initialDataStore);

