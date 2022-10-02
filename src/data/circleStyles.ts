export default (color) => ({
  // Size circle radius by earthquake magnitude and zoom level
  "circle-radius": [
    "interpolate",
    ["linear"],
    ["zoom"],
    7,
    ["interpolate", ["linear"], ["get", "mag"], 1, 1, 6, 4],
    16,
    ["interpolate", ["linear"], ["get", "mag"], 1, 5, 6, 50],
  ],
  // Color circle by earthquake magnitude
  "circle-color": color,
  "circle-stroke-color": color,
  "circle-stroke-width": 1,
  // Transition from heatmap to circle layer by zoom level
  "circle-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 1],
});
