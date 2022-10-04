import { For, createSignal } from 'solid-js';
import { dataStore, setData } from "../data";
import { selectDatalayer } from '../lib/select-data-layer';
import { Tecnicos } from '../types/dataset';
import { CESAVEP } from '../data/cesavep';
import { EAT } from '../data/eat';
import { integracion } from '../data/integracion';

export function Controls() {
  const inputItems: Tecnicos[] = [
    {
      title: 'Integración SDR',
      items: CESAVEP,
    },
    {
      title: 'Integración Estrategia acompañamiento Técnico (EAT)',
      items: EAT,
    },
    {
      title: 'Integración CFSAEP',
      items: integracion,
    }
  ]
  const [show, setShow] = createSignal(true)
  const handleChange = ({items, color, checked, title}: {items: string[], color: string, checked: boolean, title: string}) => {
    const selectedLayer = selectDatalayer(items, color, title);

    const newSelectedData = checked
      ? [...dataStore.layers, ...selectedLayer]
      : dataStore
        .layers
        .filter(
          item => item.title !== title
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
        <For each={inputItems}>{({title, items}) =>
          <div class="tech-container">
            <h3>{title}</h3>
            <For each={Object.keys(items)}>{(itemName => 
              <label>
                <input type="checkbox" name={itemName} onChange={(e) => handleChange({
                  items: items[itemName].items,
                  color: items[itemName].color,
                  checked: e.target.checked,
                  title: `${itemName}-${title}`,
                })}/>
                <div class="circle" style={{background: items[itemName].color}}></div>
                {itemName.toUpperCase()}
              </label>
            )}</For>
          </div>
        }</For>
      </form>
    </div>
  );
}
/*

*/
