# PULSO v0.6 — actualización de entrenamiento diario

Fecha: 4 de noviembre de 2026. Aplicación web instalable (PWA) para iPhone/Android.

## Qué cambió

1. **Temporizador junto al ejercicio**: aparece en la tarjeta del ejercicio cuyas series activaron el descanso. Se puede iniciar también manualmente con «Descansar». Ajustes ±15 s y detener. Aviso visual + sonido cuando la app está activa.
2. **Añadir ejercicios ocasionales**: desde una sesión de fuerza pulsa «Agregar ejercicio»; busca uno de los 59 ejercicios incluidos o crea uno propio (nombre, músculo, equipo, series, repeticiones o segundos, descanso, técnica personal). Se agrega solo a esa sesión, no modifica las plantillas A/B/C. Los ejercicios creados quedan en la biblioteca de ese dispositivo. Evita duplicados.
3. **Intercambiar días**: en «Plan» toca el día y después «Intercambiar con otro día». El intercambio cambia solo la planificación; conserva las sesiones efectivamente registradas, aunque estén en el pasado. Se puede seguir editando directamente el tipo de sesión de un día. Si hay una sesión activa en alguna de las fechas, termina primero esa sesión.
4. **Aviso fin de descanso**: señal visual + tres tonos mientras PULSO está activa. La vibración se intenta únicamente donde `navigator.vibrate` esté disponible (Safari de iPhone no la admite). Las notificaciones requieren permiso explícito y compatibilidad del navegador; **no están garantizadas con la pantalla bloqueada o la app suspendida**. Sin un servidor push o app nativa no se puede garantizar un aviso en segundo plano en iPhone. Configuración → Avisos de descanso → Probar aviso.
5. **Notas de máquina/carga**: cada ejercicio tiene una sección desplegable «Nota de máquina o carga». Puedes escribir, por ejemplo, «máquina 4, 2 discos de 20 kg por lado + carro». La nota se conserva durante la sesión, en el historial y se propone nuevamente la próxima vez que uses ese ejercicio. Las cargas siguen siendo los kilos que ingreses, no calculamos ni asumimos la masa del equipo.
6. **Técnica sin fotografía**: los 15 ejercicios sin referencia fotográfica tienen indicaciones propias de 3 pasos, accesibles en la tarjeta durante el entrenamiento y en la ficha. Los demás tienen recordatorios generales por patrón y la descripción original. Los ejercicios personalizados no reciben recomendaciones supuestamente verificadas.
7. **Correcciones de precisión**: recuperación de kilos/repeticiones del historial anterior (el almacenamiento de la v0.5 no guardaba el atributo `done` de los sets terminados y la recuperación era demasiado estricta). El cardio Z2 final ya empieza en 0 minutos para evitar registrar ejercicio no realizado.

## Actualizar sin perder los datos

1. Abre PULSO actual → Configuración → **Exportar**. Guarda el JSON en Archivos/iCloud Drive. No lo subas a GitHub; contiene información personal e incluso fotos.
2. Descomprime el paquete `PULSO-v0.6-ACTUALIZACION.zip`.
3. En tu repositorio GitHub Pages existente, sube **todos** los archivos del paquete a la raíz del repositorio mediante «Add file → Upload files» y «Commit changes». Se reemplazan los archivos con igual nombre y se incorpora `technique-v06.js`.
4. No borres `data.js`, `catalog-v02.js`, `manifest.webmanifest`, `assets/`, el repositorio ni la app instalada.
5. Abre la dirección de PULSO con internet, recarga y luego abre la app del iPhone. Comprueba en Configuración que indique `PULSO v0.6`. Si sigue sirviendo una versión anterior, intenta abrir primero en Safari conectado a internet sin borrar datos.
6. Haz una prueba con una nota de máquina, un ejercicio agregado y un intercambio de días; exporta un nuevo respaldo cuando confirmes que se guardaron.

**Conservación de datos**: mantiene el mismo nombre de la base de datos IndexedDB (`pulso-training`), su versión 1 y el formato JSON `pulso-backup-v1`. Los campos nuevos son opcionales. No hace falta reinicializar el perfil ni importar datos si tu actualización se realiza en la misma instalación. Esto no equivale a una garantía frente a borrados del almacenamiento de Safari; por eso el respaldo previo es obligatorio.

## Fundamento de las fichas técnicas

Las fichas son resúmenes redactados para facilitar un movimiento controlado, un ajuste del equipo, la estabilización y el manejo del rango de movimiento. No afirman un «ángulo óptimo» universal ni prescriben cargas individuales. Se basan en principios generales de entrenamiento de resistencia y recomendaciones de seguridad, no en evaluación clínica individual.

- American College of Sports Medicine (ACSM). *Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults: An Overview of Reviews* (2026). https://doi.org/10.1249/MSS.0000000000003897
- Purdue University Extension. *Healthy Exercises for Every Body*, HHS-738-W. https://www.extension.purdue.edu/extmedia/HHS/HHS-738-W.pdf
- ACSM. *Progression Models in Resistance Training for Healthy Adults* (posición sobre progresión, selección, orden y descanso). https://pubmed.ncbi.nlm.nih.gov/11828249/

**Avisos en iPhone**:
- WebKit: *Web Push for Web Apps on iOS and iPadOS* https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/
- Apple Developer: *Sending web push notifications in web apps and browsers* https://developer.apple.com/documentation/usernotifications/sending-web-push-notifications-in-web-apps-and-browsers
- Compatibilidad de vibración web: https://caniuse.com/vibration

## Límites conocidos

- Las fotos de algunos ejercicios siguen dependiendo de fuentes externas y pueden faltar; no se sustituyen por imágenes de otro ejercicio. La explicación de técnica siempre queda dentro del paquete offline.
- En iPhone Safari/PWA no hay vibración web nativa; el audio puede ser silenciado o suspendido cuando bloqueas la pantalla. El temporizador mantiene un instante final y corrige su cuenta al volver a la app, pero no puede asegurar alertas al segundo exacto en segundo plano.
- No hay sincronización automática con Huawei Health ni cuentas externas.
- Los ejercicios creados por el usuario no cuentan con curaduría profesional. Verifica técnica, equipo y dolor con un entrenador o profesional adecuado.

## Archivos en la actualización

`index.html`, `app.js`, `styles.css`, `sw.js`, `technique-v06.js`, `README.md`.

La edición completa también contiene `data.js`, `catalog-v02.js`, `manifest.webmanifest` y los recursos gráficos originales.
