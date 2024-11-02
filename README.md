# Aplicación Web: Variación de Área y Volumen del Lago de Valencia

## Descripción del proyecto (Español)

La transferencia de agua del río Pao a la cuenca del lago de Valencia ha causado un impacto ambiental severo, con serias consecuencias económicas y sociales, debido al aumento de la cota del lago. Este estudio ha creado un **modelo de evolución histórica y espacial** para estimar la variación de la **superficie** y **volumen** del lago desde **1986 hasta 2024**.

### Metodología

- **Integración de datos batimétricos**: Se utilizó un **Modelo Digital de Elevación** con una resolución espacial de 30 metros.
- **Análisis temporal**: La **superficie cubierta por el lago** se determinó para los años **1986, 1990, 2000, 2014, 2019 y 2023**, utilizando el índice modificado de diferencia normalizada de agua (**MNDWI**), a partir de imágenes satelitales **LANDSAT**.
- **Estimaciones de volumen y área**: El área y el volumen del lago fueron estimados con base en estos datos.

### Resultados

- El lago de Valencia se expandió de **344 km²** en 1986 a **415 km²** en 2023.
- El volumen del lago aumentó de **2175,83 millones de metros cúbicos** a **9552,16 millones de metros cúbicos**.
- Se observó que la altura estimada del lago en 2017 es **10 metros mayor** a la medida en terreno.

### Herramientas utilizadas

El análisis se realizó utilizando diversas herramientas:

- **QGIS**
- **GRASS GIS**
- **ArcGIS Pro**

### Limitaciones

Aunque el modelo proporciona un marco útil para el análisis, es necesario ajustarlo con datos de campo para obtener resultados más precisos. Actualmente, los datos oficiales del lago provienen de un solo punto de monitoreo, lo que limita la validación del modelo a corto plazo.

---

## Project Description (English)

The transfer of water from the **Pao River** to the **Lake Valencia basin** has caused severe environmental impacts, with serious economic and social consequences due to the rise in the lake's water level. This study created a **historical and spatial model** to estimate the variation in **surface area** and **volume** of the lake from **1986 to 2024**.

### Methodology

- **Integration of bathymetric data**: A **30-meter resolution Digital Elevation Model** was used.
- **Temporal analysis**: The **lake surface** was determined for **1986, 1990, 2000, 2014, 2019, and 2023** using the **Modified Normalized Difference Water Index (MNDWI)** from **LANDSAT satellite images**.
- **Volume and area estimations**: Area and volume estimates were calculated based on these data.

### Results

- Lake Valencia expanded from **344 km²** in 1986 to **415 km²** in 2023.
- The lake's volume increased from **2175.83 million cubic meters** to **9552.16 million cubic meters**.
- The lake's estimated height in 2017 was **10 meters higher** than field measurements.

### Tools Used

The analysis was carried out using the following tools:

- **QGIS**
- **GRASS GIS**
- **ArcGIS Pro**

### Limitations

Although the model provides a useful framework for analysis, it must be adjusted with field data for more precise decision-making. Currently, the official lake level data comes from only one monitoring point, limiting the short-term validation of the model.

---

## Tecnologías utilizadas / Technologies used

- **ArcGIS Pro 3.1.2** (ArcPy) para el procesamiento y análisis de datos.
- **ArcGIS Maps SDK for JavaScript 4.30** para el desarrollo de la aplicación web interactiva.
- **QGIS** y **GRASS GIS** para el análisis comparativo de los resultados del modelo.

---

## Uso de la aplicación / How to Use the Application

1. La aplicación permite visualizar las variaciones de área y volumen del lago en diferentes años.
2. El usuario puede interactuar con la línea de tiempo y activar capas específicas correspondientes a cada año de análisis.
3. Los resultados del volumen y la superficie del lago son calculados dinámicamente, y las capas pueden activarse o desactivarse para su visualización.

---

## Contribución y desarrollo futuro / Contribution and Future Development

Este es un proyecto en desarrollo. Se aceptan sugerencias, contribuciones y mejoras para afinar el modelo y su visualización.

---

