import Home from "@arcgis/core/widgets/Home.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";

// Función para inicializar los widgets
export function initializeWidgets(view, map) {
  // Crear el LayerList sin leyenda, solo con la lista de capas
  const layerList = new LayerList({
    view: view,
    listItemCreatedFunction: function (event) {
      const item = event.item;
      item.panel = null;  // Remueve la leyenda de cada capa en el LayerList
    }
  });

  // Expandible para LayerList, desplegado por defecto
  const layerListExpand = new Expand({
    view: view,
    content: layerList,
    expandIconClass: "esri-icon-layer-list",
    expandTooltip: "Mostrar Capas",
    expanded: false  // Desplegado por defecto
  });
  view.ui.add(layerListExpand, "top-left");

  // Leyenda desplegada por defecto
  const legend = new Legend({
    view: view
  });

  const legendExpand = new Expand({
    view: view,
    content: legend,
    expandIconClass: "esri-icon-legend",
    expandTooltip: "Mostrar Leyenda",
    expanded: false  // Desplegado por defecto
  });
  view.ui.add(legendExpand, "bottom-left");

  // Home widget
  const homeWidget = new Home({
    view: view
  });
  view.ui.add(homeWidget, "bottom-right");

  // Basemap Gallery (selector de basemap oficial de Esri)
  const basemapGallery = new BasemapGallery({
    view: view,
    source: {
      portal: {
        url: "https://www.arcgis.com",
        useVectorBasemaps: true
      }
    }
  });

  const basemapExpand = new Expand({
    view: view,
    content: basemapGallery,
    expandIconClass: "esri-icon-basemap",
    expandTooltip: "Seleccionar Mapa Base"
  });
  view.ui.add(basemapExpand, "top-right");
}
