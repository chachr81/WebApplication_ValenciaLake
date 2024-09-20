import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import { createLayer, showLayerForYear } from "./layerManager.js";
import { initializeWidgets } from "./widgets.js";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer.js";
import RasterShadedReliefRenderer from "@arcgis/core/renderers/RasterShadedReliefRenderer.js";
import * as rasterColorRamps from "@arcgis/core/smartMapping/raster/support/colorRamps.js";

// Inicializar el mapa
const map = new Map({
  basemap: "satellite"
});

// Crear la vista del mapa
const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-67.75, 10.165],
  zoom: 12
});

// Definir un renderer para el colorRamp de elevación
const elevationRenderer = {
  type: "raster-stretch", // Usar "raster-stretch" para aplicar colorRamp
  colorRamp: rasterColorRamps.createColorRamp(rasterColorRamps.byName("Elevation #1")), // Rampa de colores Elevation #1, Elevation #2 ó Surface
  stretchType: "min-max", // Ajustar los valores entre mínimo y máximo
  statistics: [
    {
      min: 376.25, // Valor mínimo del ráster
      max: 1640.59 // Valor máximo del ráster
    }
  ]
};

// Capa de elevación con colorRamp
const elevationLayer = new ImageryTileLayer({
  url: "https://tiledimageservices3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Modelo_Digital_Integrado/ImageServer",
  title: "Modelo de Elevación (Integrado)",
  renderer: elevationRenderer, // Aplicar el renderer con la rampa de colores
  opacity: 0.5, // Hacer la capa completamente visible
  popupTemplate: {
    title: "Modelo Digital Integrado",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "Raster.ServicePixelValue",
        label: "Altura (m)",
        format: {
          places: 2, // Truncar a dos decimales
          digitSeparator: true
        }
      }]
    }]
  }
});

// Definir un renderer básico para el sombreado sin colorRamp
const shadedReliefRenderer = new RasterShadedReliefRenderer({
  altitude: 45, // Altitud del sol en el cielo
  azimuth: 315, // Dirección del sol
  hillshadeType: "multi-directional", // Para un sombreado más detallado
  zFactor: 3, // Exageración de la elevación
  scalingType: "adjusted", // Ajustar el relieve para diferentes escalas
  pixelSizeFactor: 0.5,
  colorRamp: rasterColorRamps.createColorRamp(rasterColorRamps.byName("Elevation #1")) // Rampa de colores Elevation #1, Elevation #2 ó Surface
});

// Capa para el sombreado
const shadedLayer = new ImageryTileLayer({
  url: "https://tiledimageservices3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Modelo_Digital_Integrado/ImageServer",
  title: "Modelo de Elevación (Sombreado)",
  renderer: shadedReliefRenderer, // Aplicar el renderer con sombreado
  opacity: 1 // Hacer el sombreado ligeramente visible
});

// Añadir ambas capas al mapa
map.addMany([shadedLayer, elevationLayer]);

// Crear capas de variación del lago por año con pop-ups
const layers = [
  createLayer("https://services3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Capas_Variación_Lago/FeatureServer/18", "Área del Lago para el año 1986", 1986, true),
  createLayer("https://services3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Capas_Variación_Lago/FeatureServer/16", "Área del Lago para el año 1990", 1990, false),
  createLayer("https://services3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Capas_Variación_Lago/FeatureServer/15", "Área del Lago para el año 2000", 2000, false),
  createLayer("https://services3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Capas_Variación_Lago/FeatureServer/14", "Área del Lago para el año 2014", 2014, false),
  createLayer("https://services3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Capas_Variación_Lago/FeatureServer/13", "Área del Lago para el año 2019", 2019, false),
  createLayer("https://services3.arcgis.com/XuOr56waALcX7RSy/arcgis/rest/services/Capas_Variación_Lago/FeatureServer/4", "Área del Lago para el año 2023", 2023, false)
];

// Añadir capas de variación del lago al mapa
map.addMany(layers);

// Inicializar los widgets
initializeWidgets(view, map);

// Control deslizante de tiempo
const timeSlider = document.getElementById("timeSlider");
const yearLabel = document.getElementById("yearLabel");

const years = [1986, 1990, 2000, 2014, 2019, 2023];

// Función para actualizar el año
function updateYear(newYear) {
  timeSlider.value = newYear;
  yearLabel.textContent = newYear;
  showLayerForYear(newYear, layers);
}

// Avanzar de año
const forwardButton = document.getElementById("forwardButton");
forwardButton.addEventListener("click", () => {
  let currentYear = parseInt(timeSlider.value, 10);
  let currentIndex = years.indexOf(currentYear);
  if (currentIndex < years.length - 1) {
    updateYear(years[currentIndex + 1]); // Avanza al siguiente año en la lista
  }
});

// Retroceder de año
const rewindButton = document.getElementById("rewindButton");
rewindButton.addEventListener("click", () => {
  let currentYear = parseInt(timeSlider.value, 10);
  let currentIndex = years.indexOf(currentYear);
  if (currentIndex > 0) {
    updateYear(years[currentIndex - 1]); // Retrocede al año anterior en la lista
  }
});

// Botón de reproducción automática
const playButton = document.getElementById("playButton");
let playing = false;
let interval;

playButton.addEventListener("click", () => {
  if (!playing) {
    playing = true;
    playButton.textContent = "⏸";
    interval = setInterval(() => {
      let currentYear = parseInt(timeSlider.value, 10);
      let currentIndex = years.indexOf(currentYear);
      if (currentIndex < years.length - 1) {
        updateYear(years[currentIndex + 1]); // Avanza al siguiente año
      } else {
        updateYear(years[0]); // Reinicia al primer año si llega al final
      }
    }, 1000);
  } else {
    playing = false;
    playButton.textContent = "▶";
    clearInterval(interval);
  }
});
