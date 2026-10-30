# PULSO — entrenador personal offline (v0.1)

App móvil sin suscripciones, librerías externas ni servicios de analítica. Se diseñó para iPhone, pero funciona en computador.

## Funcionalidades de esta versión

- Inicio con botón principal de entrenamiento y recuperación de la sesión en curso.
- Planificación semanal: minutos disponibles, preferencia de gimnasio/cardio, días editables, presets de semana habitual u ocupada y reorganización automática.
- Rutinas A/B/C y variantes full body para semanas con 1 o 2 sesiones de fuerza.
- Registro de kilos, repeticiones, calentamientos, descansos y ejercicios sustitutos. Recupera las últimas cargas por ejercicio.
- Temporizador visual con aviso audible mientras la app está activa (iOS puede suspender temporizadores en segundo plano; se recalcula según la hora al volver).
- Registro de cardio manual con duración, distancia, frecuencia cardiaca opcional y molestias articulares (0–10).
- Biblioteca de 26 ejercicios con dos esquemas SVG por ejercicio, explicaciones y errores frecuentes. Incluida en modo offline.
- Peso corporal, meta, gráfica de tendencia, fotos comprimidas y respaldos JSON que incluyen fotografías.
- Almacenamiento solo en IndexedDB del navegador; sin cuentas. Exportación y restauración completa.

## Instalar en iPhone — alojamiento gratuito mediante GitHub Pages

1. Crea una cuenta de GitHub si no tienes una.
2. Crea un repositorio **público** nuevo, por ejemplo `pulso`.
3. Sube a la raíz del repositorio todos los archivos y carpetas contenidos en este ZIP (no solo el ZIP).
4. En el repositorio, abre **Settings > Pages** y elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. Abre en Safari la dirección mostrada en Pages; normalmente sigue el patrón `https://USUARIO.github.io/pulso/` (reemplaza USUARIO por el tuyo).
6. En Safari, pulsa Compartir > **Agregar a pantalla de inicio** > habilitar **Abrir como aplicación web**, si aparece > Agregar.
7. Abre PULSO conectado a internet una vez, esperando que el navegador almacene los archivos. Luego ya puedes registrar entrenamientos sin conexión.
8. En Configuración, exporta respaldos con frecuencia y guárdalos en Archivos/iCloud Drive.

**Seguridad:** GitHub Pages publicará el código estático, NO los registros ni las fotografías del usuario. No subas respaldos personales ni fotos al repositorio. Los datos locales pueden perderse si Safari elimina el almacenamiento del sitio, si borras los datos del navegador o si cambias de teléfono. Exporta respaldos periódicamente.

**Prueba local en computador:** abre un terminal dentro de esta carpeta y ejecuta `python -m http.server 8080`, luego visita `http://localhost:8080/`. No abras `index.html` directamente desde `file://`, porque el service worker exige un origen web seguro y algunas opciones de almacenamiento pueden fallar.

## Límites actuales

- **Huawei Health no se sincroniza automáticamente.** El navegador no puede leer datos privados de Apple Salud directamente; por ahora registra las actividades manualmente.
- Sin recordatorios push ni sincronización entre dispositivos.
- Dibujos de ejercicios esquemáticos, no fotografía ni asesoramiento técnico profesional personalizado.
- Planificación mediante reglas de distribución, no recomendaciones médicas ni IA en la nube.
- Los tiempos de descanso no pueden garantizar sonidos o alarmas cuando iOS suspende la aplicación.
- La app no mide frecuencia cardíaca por sí sola ni calcula zonas personalizadas.

## Archivos

- `index.html`: contenedor de la app y metadatos de instalación.
- `styles.css`: diseño móvil oscuro.
- `data.js`: ejercicios y rutinas.
- `app.js`: lógica de entrenamiento, planificación, guardado, fotos e import/export.
- `sw.js`: caché offline.
- `manifest.webmanifest`: instalación como PWA.
- `assets/exercises/`: ilustraciones SVG.
- `assets/icons/`: iconos PWA.
- `generate_assets.py`: generador reproducible de ilustraciones e iconos (no necesario en GitHub).

## Nota de salud

Dado que has comunicado molestias de rodillas, tobillos y caderas al correr, no hay progresión automática de carrera en esta versión. Las alternativas de bajo impacto permiten mantener actividad sin forzar dolor. Si el dolor persiste, aumenta o altera la marcha, consulta profesionalmente antes de incrementar kilometraje/intensidad.
