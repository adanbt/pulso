# PULSO v0.7 — Fechas reales, motivos por serie y gimnasio extra

## Novedades

- Separación entre `plannedDate` (día de planificación) y `date` (día real de ejecución). Desde ahora las sesiones guardadas usan la fecha local al **iniciar** el entrenamiento, incluso si se abre la rutina de otro día.
- **Corregir sesiones antiguas:** entra a Progreso → Historial → Ver → Corregir fecha real. Puedes elegir intercambiar los planes del día original y el nuevo. Se conservan kilos, repeticiones, notas, fotografía y rutina.
- **Descanso inmediato:** al tocar «Hecho» se inicia el contador del ejercicio correspondiente, también para calentamiento. Por limitaciones de iPhone, alarmas en segundo plano y vibración no están garantizadas.
- **Motivo por serie:** `＋ Motivo / nota de serie` permite registrar fallo muscular, dolor/molestia, fatiga, pérdida de técnica, interrupción u otra nota. Permite marcar cero repeticiones solo cuando se anotó un motivo. El motivo se conserva en el historial y los respaldos.
- **Sesión extra:** en Plan → `Añadir día extra de gimnasio` o en cualquier día del calendario, sugerencia `Full body · Extra`, 2 series de trabajo por ejercicio. No altera el ciclo A/B/C ni borra sesiones anteriores. Se puede agregar, por ejemplo, un sábado después de entrenar entre lunes y viernes.
- **Recomendación prudente:** si entrenaste fuerza hoy o ayer la app recuerda considerar la recuperación. No implica recomendación automática de entrenamiento de alta intensidad.
- **Sin cambios de servicio:** no cuenta con sincronización Huawei Health.

## Actualización sobre la versión instalada

1. Desde PULSO → Configuración → Exportar, guarda un respaldo JSON en Archivos/iCloud Drive. **No subas ese respaldo a GitHub.**
2. En `https://github.com/adanbt/pulso` utiliza Add file → Upload files.
3. Sube y reemplaza los archivos del ZIP de actualización (app.js, data.js, styles.css, index.html, sw.js), en la **raíz** del repositorio.
4. Al publicarse, abre la app con internet; verifica que Configuración muestre **PULSO v0.7**.
5. Los registros permanecen en IndexedDB; la importación del JSON sirve como recuperación si fuera necesario.

## Compatibilidad

Mantiene el identificador de IndexedDB `pulso-training`, las tiendas `data` y `photos`, el formato de respaldo `pulso-backup-v1` y `state.version:1`. Los nuevos campos `plannedDate`, `extra`, `reason`, `correctedFrom` son opcionales. No se reescriben ni se trasladan automáticamente sesiones antiguas; el usuario decide cuáles corregir.

## Limitaciones

Las estadísticas incluyen sesiones extra, por lo que los contadores semanales pueden superar el objetivo (p. ej., 4/3 de fuerza). Las fotos de ejercicios aún dependen de su catálogo externo. Un entrenamiento nuevo se fecha al **inicio**, no al final de una sesión que cruza medianoche.
