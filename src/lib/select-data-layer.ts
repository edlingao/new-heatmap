import { Layer } from '../types/dataset';
import {
  Abejas,
  Aves,
  Bovinos,
  Caprinos,
  Conejos,
  Obvinos,
  Porcinos,
  AvesPorcinos,
  BovinosCaprinosOvinos,
  BovinosCaprinosPorcinosEquinosPorcinos,
  CaprinosAbejas,
  Cafe,
  Miel,
  Maiz,
  Frijol,
  CafeYMiel,
  MaizYFrijol,
} from '../data/heatMapDatasets';

export function selectDatalayer(name: string): Layer[] {
  switch(name) {
    case 'Abejas':
      return Abejas;
    case 'Aves':
      return Aves;
    case 'Bovinos':
      return Bovinos;
    case 'Caprinos':
      return Caprinos;
    case 'Ovinos':
      return Obvinos;
    case 'Conejos':
      return Conejos;
    case 'Porcinos':
      return Porcinos;
    case 'Aves y Porcinos':
      return AvesPorcinos;
    case 'Caprinos y Abejas':
      return CaprinosAbejas;
    case 'Bovinos, Caprinos y Ovinos':
      return BovinosCaprinosOvinos;
    case 'Bovinos, Caprinos, Porcinos y Equinos':
      return BovinosCaprinosPorcinosEquinosPorcinos;
    case 'Cafe':
      return Cafe;
    case 'Miel':
      return Miel;
    case 'Cafe y Miel':
      return CafeYMiel;
    case 'Frijol':
      return Frijol;
    case 'Maiz':
      return Maiz;
    case 'Maiz y Frijol':
      return MaizYFrijol;
  }
}