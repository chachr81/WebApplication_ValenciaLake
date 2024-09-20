import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer.js";
import { createPopupTemplate } from "./popups.js";

// Función para crear capas de variación del lago con visibilidad inicial opcional y ventana emergente
export function createLayer(url, title, year, initialVisibility = false) {
  return new FeatureLayer({
    url: url,
    title: title,
    visible: initialVisibility,
    popupTemplate: createPopupTemplate(year)
  });
}

// Función para crear la capa de MDE con la ventana emergente de valores de elevación
export function createMDELayer(url, title, renderer = null, showPopup = false) {
  return new ImageryTileLayer({
    url: url,
    title: title,
    renderer: renderer,
    popupTemplate: showPopup ? createElevationPopupTemplate() : null
  });
}

// Función para manejar la visibilidad de capas según el año
export function showLayerForYear(year, layers) {
  layers.forEach(layer => {
    layer.visible = layer.title.includes(year);
  });
}
