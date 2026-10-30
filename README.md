# PULSO v0.4 — Rutinas, cargas y planificación flexible

## Actualización sobre la app instalada

1. En la app ya instalada abre Configuración > Exportar y guarda la copia de seguridad en Archivos/iCloud Drive.
2. Descomprime `PULSO-v0.4-ACTUALIZACION.zip` en tu computador.
3. En el repositorio público `adanbt/pulso` sube los 5 archivos sueltos a la raíz: `index.html`, `app.js`, `catalog-v02.js`, `styles.css`, `sw.js`. Acepta sobrescribir versiones anteriores, sin borrar `data.js`, `manifest.webmanifest` ni `assets`.
4. Haz Commit changes. Cuando GitHub Pages publique, abre https://adanbt.github.io/pulso/ con internet en Safari. Puede requerir cerrar y reabrir la app de pantalla de inicio para que el service worker actualice el código.
5. Comprueba que Configuración diga PULSO v0.4; la biblioteca debe indicar 59 ejercicios.
6. Desde Ejercicios pulsa Preparar fotografías para uso offline para guardar solo las fotografías disponibles. Revisa el diagnóstico de las que fallan. **No todas las imágenes están disponibles ni están integradas en el ZIP**. No elimines los datos de Safari ni la app sin respaldo.

## Revisiones incorporadas

- No se incluye Huawei Health ni importación de Apple Salud.
- Mantiene los mismos IDs de los 59 ejercicios y el mismo almacenamiento IndexedDB; los respaldos v1 siguen siendo compatibles.
- Las sustituciones siguen separadas por foco muscular vs variaciones relacionadas. Detecta duplicados y no descarta series completadas al resolverlos.
- Dos referencias de fotografías confirmadas como inexistentes quedaron desactivadas y se incorporaron cuatro pares inicio/final adicionales verificados. El catálogo queda con **44 ejercicios con referencias fotográficas y 15 sin referencia**. La descarga de cada imagen en el iPhone aún depende de su disponibilidad. Se muestra una explicación textual en vez de una foto de otro ejercicio. El catálogo proviene de [yuhonas/free-exercise-db](https://github.com/yuhonas/free-exercise-db) (licencia declarada Unlicense).
- El diagnóstico de fotos queda guardado localmente; los fallos de descarga se pueden revisar después.
- Entrenamientos de hasta 60 minutos priorizan movimientos principales y hasta 45 minutos usan cuatro ejercicios. El cardio es opcional y siempre cuenta dentro del tiempo disponible.
- Si solo hay una sesión de fuerza por semana, las rutinas full body A/B alternan según la última registrada.
- Consulta tus cargas anteriores desde la ficha del ejercicio y los máximos recientes en Progreso.
- Las entradas de peso y repeticiones se guardan mientras escribes (con un pequeño retardo de guardado), no solo al salir del campo.

## Limitaciones honestas

- No se han descargado/copiado fotografías reales dentro del ZIP. Las imágenes remotas dependen de estar disponibles en el catálogo. Solo las efectivamente descargadas quedan para uso offline.
- Las imágenes son ejemplos generales y pueden variar en configuración de máquina; revisa la ejecución con un profesional.
- El sonido del temporizador no está garantizado en segundo plano por restricciones del iPhone.
- No hay sincronización automática entre dispositivos, ni con Huawei, ni con Apple Salud.
- Una instalación de pantalla de inicio puede mantener archivos de caché antiguos hasta que se abra con internet de nuevo.
- GitHub Pages publica los archivos de la aplicación, **no** los entrenamientos ni las fotografías privadas del usuario; esos permanecen localmente hasta que el usuario los exporte.

### Fuentes de material fotográfico

[yuhonas/free-exercise-db](https://github.com/yuhonas/free-exercise-db) y documentación del repositorio. Se respetan referencias individualizadas por ejercicio; no se muestran fotos falsas cuando el archivo falta.
