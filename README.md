# PULSO v0.5 — Bienvenida personalizada

**Actualización sobre PULSO v0.4:** crea una bienvenida para cada dispositivo que abra la app por primera vez. Los usuarios con datos guardados no reciben un formulario obligatorio y conservan su historial.

## Subir a GitHub Pages

1. Antes, en la instalación actual, ir a Configuración > Exportar y guardar el archivo JSON fuera de la aplicación.
2. Descomprimir `PULSO-v0.5-ACTUALIZACION.zip`.
3. En el repositorio `adanbt/pulso`, utilizar `Add file > Upload files` y subir **solo** `index.html`, `app.js`, `styles.css`, `sw.js` y `README.md` a la raíz. Confirmar el reemplazo de los archivos anteriores.
4. No borrar `data.js`, `catalog-v02.js`, `assets` ni `manifest.webmanifest`.
5. Confirmar el despliegue en GitHub Pages. Abrir la PWA con Wi-Fi e intentar cerrarla/reabrirla. La caché puede tardar en renovarse en iOS.

## Funciones nuevas

- Bienvenida con objetivo, experiencia, nombre/apodo opcional, peso opcional, meta opcional.
- Días semanales de fuerza y cardio, tiempo por sesión, días disponibles, modalidad preferida de cardio y cardio final.
- Plan semanal inicial automático en función de las respuestas, cambiable cada semana.
- Seguimiento semanal del número elegido de sesiones de fuerza/cardio, en lugar de 3/2 fijos.
- Configuración > Editar perfil y planificación habitual para volver a modificar preferencias sin borrar el historial.
- La base personal de IndexedDB se mantiene separada por dispositivo. Sin cuentas, sin backend y sin sincronización entre dispositivos.

## Compatibilidad y seguridad

- Usuarios que ya habían abierto PULSO: se conserva el perfil previo, los pesos, las fotos, historial y planes (no se fuerza una nueva configuración).
- Nuevas instalaciones: valores personales opcionales en blanco; no se atribuyen por defecto 103 kg ni meta de 85 kg a amigos.
- Respaldos anteriores v1 se pueden restaurar y la importación no exige la bienvenida.
- El botón de edición de perfil no elimina registros ni fotos. Los días fijados manualmente dentro de cada semana se respetan al reorganizar.
- Los datos del dispositivo son independientes. No subir respaldos ni fotos privadas al repositorio público.
- La rutina base y ejercicios siguen siendo generales; el perfil no produce entrenamiento clínicamente personalizado.

## Limitaciones vigentes

- No se agrega sincronización Huawei Health ni Apple Salud.
- La biblioteca de ejercicios mantiene las limitaciones conocidas de fotografías externas.
- Las notificaciones del temporizador en segundo plano siguen sujetas a iOS.
