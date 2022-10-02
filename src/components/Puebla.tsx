import { Component, createSignal, For, Show } from "solid-js";
import MapGL, { Control, Layer, Marker, Source, Viewport } from "solid-map-gl";
import { dataStore } from "../data";
import circleStyles from "../data/circleStyles";
import heatmapStyles from "../data/heatmapStyles";
import { Controls } from "./Controls";

export function PueblaMap(){
  const [viewport, setViewport] = createSignal({
    center: [-98.22052001953125, 19.043945074620254],
    zoom: 9,
  } as Viewport);

  return (
    <MapGL
      asMapLibre
      options={{
        style: 'https://api.maptiler.com/maps/bright/style.json?key=RZSPWjehjmfMovr1Kng6',
      }}
      viewport={viewport()}
      onViewportChange={(evt: Viewport) => setViewport(evt)}
    >
      <For each={dataStore.layers}>{ (layer) =>
        <Source
          source={{
            type: 'geojson',
            data: layer.src,
          }}
        >
          <Layer
            style={{
              type: layer.type,
              paint: layer.type === 'heatmap' ? heatmapStyles(layer.color) : circleStyles(layer.color),
            }}
          />
        </Source>
      }</For>
      <Controls />
    </MapGL>
  );
};