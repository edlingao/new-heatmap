import { For, createSignal } from 'solid-js';
import { dataStore, setData } from "../data";
import { selectDatalayer } from '../lib/select-data-layer';

export function Controls() {
  const inputItems = [
    'Abejas',
    'Aves',
    'Bovinos',
    'Caprinos',
    'Ovinos',
    'Conejos',
    'Porcinos',
    'Aves y Porcinos',
    'Caprinos y Abejas',
    'Bovinos, Caprinos y Ovinos',
    'Bovinos, Caprinos, Porcinos y Equinos',
    'Cafe',
    'Miel',
    'Cafe y Miel',
    'Frijol',
    'Maiz',
    'Maiz y Frijol',
  ]
  const [show, setShow] = createSignal(true)
  const handleChange = (e: MouseEvent) => {
    const selectedLayer = selectDatalayer(e.target.name);

    const newSelectedData = e.target.checked
      ? [...dataStore.layers, ...selectedLayer]
      : dataStore
        .layers
        .filter(
          item => item.src !== selectedLayer[0].src
        );
    setData('layers', newSelectedData);
  }

  return (
    <div class="selector-container" classList={{collapsed: !show()}}>
      <div className="header">
        <button class="float-button" onClick={() => setShow(!show())}>X</button>
        <h1>Tecnicos</h1>
      </div>
      <form>
        <For each={inputItems}>{(name) => 
          <label>
            <input type="checkbox" name={name} onChange={handleChange}/>
            <div class="circle" style={{background: selectDatalayer(name)[0].color}}></div>
            {name}
          </label>
        }</For>
      </form>
    </div>
  );
}
/*

*/
