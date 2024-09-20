// Función para crear la plantilla del popup (ventana emergente) con los atributos correspondientes
export function createPopupTemplate(year) {
  return {
    title: `Área del Lago para el año ${year}`,
    content: [
      {
        type: "fields",
        fieldInfos: [
          // {
          //   fieldName: "Z_Min",
          //   label: "Altura Mínima",
          //   format: {
          //     places: 2,
          //     digitSeparator: true
          //   }
          // },
          // {
          //   fieldName: "Z_Max",
          //   label: "Altura Máxima",
          //   format: {
          //     places: 2,
          //     digitSeparator: true
          //   }
          // },
          // {
          //   fieldName: "Z_Mean",
          //   label: "Altura Promedio",
          //   format: {
          //     places: 2,
          //     digitSeparator: true
          //   }
          // },
          {
            fieldName: "SArea",
            label: "Área (km²)",
            format: {
              places: 2,
              digitSeparator: true
            }
          }
        ]
      },
      {
        type: "media",
        mediaInfos: [
          {
            title: "<b>Niveles de Superficies Inundadas</b>", // Nombre del gráfico encima del gráfico
            type: "column-chart",
            caption: "Altura mínima, máxima y promedio", // Pie de gráfico
            value: {
              fields: ["Z_Min", "Z_Max", "Z_Mean"],
              normalizeField: null,
              tooltipField: "Alturas en metros"
            }
          }
        ]
      }
    ]
  };
}
