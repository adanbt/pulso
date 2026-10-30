# PULSO v0.2 — entrenamiento adaptable y sustituciones curadas

Aplicación móvil de uso personal, sin suscripción, diseñada para instalarse como PWA desde Safari en iPhone.

## Novedades de v0.2

- **59 ejercicios** (26 originales + 33 nuevos) con ficha de foco muscular, gesto principal, implemento y unilateral/bilateral.
- Sustituciones cercanas **curadas manualmente por foco y patrón**; las variaciones que cambian estímulo aparecen en otra pestaña y requieren confirmación.
- Evita repetir exactamente el mismo ejercicio dentro de la sesión. Si ya figura en la rutina, ofrece un **cambio doble** que conserva el foco muscular original de la sesión. No permite reemplazar series completadas silenciosamente.
- Motivos del cambio: máquina ocupada, molestia/dolor, preferencia por mancuerna o búsqueda de alternativa; filtros por equipamiento y unilateral/bilateral.
- Demostraciones de inicio y fin con **fotografías reales** de Free Exercise DB para 38 ejercicios, cuando estén disponibles, y descripción técnica para los 59. No se reutilizan fotos de ejercicios distintos para simular ilustraciones.
- Botón **«Preparar fotografías para uso offline»** en Ejercicios. Descarga las fotos desde una fuente externa, revisa disponibilidad y las guarda en la caché del navegador (pueden faltar algunas).

## Actualizar desde v0.1 en GitHub Pages (manteniendo historial)

1. **Antes de actualizar**, abre PULSO en tu iPhone: Configuración → Exportar respaldo; guarda el archivo JSON en Archivos/iCloud Drive. NO subas ese respaldo a GitHub.
2. En GitHub, abre el repositorio donde ya publicaste PULSO, por ejemplo `https://github.com/adanbt/pulso`.
3. Descarga y descomprime **PULSO-v0.2-ACTUALIZACION.zip**. Contiene `index.html`, `app.js`, `styles.css`, `sw.js`, `catalog-v02.js` y `README.md`.
4. Haz **Add file → Upload files**, arrastra esos seis archivos a la **raíz** del repositorio y confirma que GitHub permite reemplazar los que ya existen. Haz **Commit changes**. No es necesario borrar `data.js`, `manifest.webmanifest` ni `assets/`.
5. Espera a que GitHub Pages publique la actualización. En el iPhone abre PULSO conectada a internet; si ves la interfaz anterior, cierra la app y vuelve a abrir o recarga la página de Safari. A veces la actualización de la PWA exige abrirla dos veces para renovar el service worker.
6. Ve a **Ejercicios → Preparar fotografías para uso offline** con Wi-Fi. Espera a que indique cuántas fotos quedaron listas. Luego prueba la biblioteca en modo avión.

**Persistencia:** la actualización usa la MISMA base IndexedDB (`pulso-training`) y el MISMO esquema de datos de v0.1; no incluye instrucciones para borrar datos locales. Sin embargo, haz respaldo antes de actualizar porque los datos locales dependen del navegador y no existe sincronización remota. No desinstales PULSO, no borres datos de Safari y no cambies la URL del sitio durante la actualización.

## Instalación nueva (si no tienes v0.1)

Sube a un repositorio público de GitHub el contenido de **PULSO-v0.2-COMPLETA.zip**, directamente a su raíz. En Settings → Pages, elige «Deploy from a branch», rama `main` y carpeta `/ (root)`. Abre la dirección publicada desde Safari y elige Compartir → Agregar a pantalla de inicio. Con internet, abre la biblioteca y prepara las fotos para uso sin conexión.

## Funcionamiento offline y limitaciones

- El código, la base de ejercicios y las descripciones funcionan offline después de instalarse correctamente y cachearse con el service worker.
- **Las fotografías no vienen dentro del ZIP**: se descargan de Free Exercise DB, en la primera preparación con conexión, y se guardan en Cache Storage del dispositivo. Al pulsar «Preparar fotografías», el contador informa cuántas se guardaron y cuántas fallaron. La disponibilidad depende del proveedor, la conexión y la política de almacenamiento de iOS. Si una foto no se puede consultar o no existe, la aplicación muestra un aviso; **no utiliza el dibujo de otro ejercicio**.
- La app no tiene garantía de que iOS conserve indefinidamente la caché de imágenes ni IndexedDB. Guarda respaldos periódicos de tus entrenamientos y fotos.
- Huawei Health no sincroniza automáticamente y los cambios de ejercicios son sugerencias generales, no prescripción clínica. Ante dolor articular persistente, consulta con un profesional y no fuerces la actividad dolorosa.
- Al sustituir entre máquinas distintas, los pesos no se transfieren porque las cargas no son equivalentes. Los registros originales siguen disponibles en el historial.
- Fotos originales: [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), recopilación de yuhonas basada en wrkout/exercises.json. El repositorio publica el conjunto como Unlicense; por prudencia se reconoce también la atribución declarada en fuentes secundarias a Everkinetic (CC BY-SA 4.0) para parte del material fotográfico. No hay publicidad ni analítica.

## Estructura de archivos

- `index.html`: inicio de la aplicación.
- `data.js`: 26 ejercicios originales y las rutinas existentes; NO se modifica.
- `catalog-v02.js`: ejercicios nuevos, grupos de equivalencia, focos y asociación específica de fotografías.
- `app.js`: controles de sesiones, filtros, resolución de duplicados, preparación offline y biblioteca.
- `styles.css`: presentación.
- `sw.js`: caché offline (v0.2).
- `assets/`: iconos y recursos heredados. Los esquemas antiguos no se usan en la interfaz v0.2.
