'use strict';
// Catálogo local: la aplicación nunca necesita internet para mostrar estas fichas.
window.PULSO_DATA = {
 exercises: [
  ['lat_pulldown','Jalón al pecho','Espalda','Polea alta','pulldown',90,3,'8–12','Pecho elevado; baja la barra hacia la parte alta del pecho; controla el regreso.','No tires tras la nuca ni te balancees.'],
  ['seated_row','Remo sentado en polea','Espalda','Polea baja','row',120,3,'8–12','Torso estable; lleva los codos hacia atrás; junta suavemente las escápulas.','Evita impulsarte con la espalda.'],
  ['db_row','Remo con mancuerna','Espalda','Mancuerna','row',120,3,'8–12','Apoya la mano libre; mantén la espalda neutral; lleva el codo hacia la cadera.','No gires el tronco para subir la carga.'],
  ['face_pull','Face pull','Hombro posterior','Polea alta','facepull',75,2,'12–15','Tira de la cuerda hacia el rostro con los codos altos; controla el retorno.','No arquees la zona lumbar.'],
  ['biceps_curl','Curl de bíceps','Bíceps','Mancuernas','curl',75,3,'8–12','Codos cerca del cuerpo; sube sin impulso; baja lento.','No balancees el torso.'],
  ['hammer_curl','Curl martillo','Bíceps','Mancuernas','curl',75,2,'10–12','Palmas enfrentadas; mantiene la muñeca neutra durante todo el recorrido.','Evita subir con el hombro.'],
  ['bench_press','Press de banca','Pecho','Barra / banco','bench',150,3,'6–10','Apoya los pies; retrae escápulas; baja con control y empuja de forma estable.','Evita rebotar la barra en el pecho.'],
  ['incline_press','Press inclinado','Pecho','Mancuernas','bench',120,3,'8–12','Banco con inclinación moderada; controla la bajada y mantén muñecas alineadas.','No abras excesivamente los codos.'],
  ['chest_fly','Aperturas de pecho','Pecho','Máquina / mancuernas','fly',75,2,'10–15','Flexiona levemente codos; cierra los brazos sin elevar los hombros.','No fuerces un estiramiento doloroso.'],
  ['shoulder_press','Press de hombros','Hombro','Mancuernas / máquina','shoulder',120,3,'8–12','Empuja verticalmente; tronco firme; evita arquear la espalda.','No lleves la cabeza muy adelante.'],
  ['lateral_raise','Elevaciones laterales','Hombro','Mancuernas','lateral',75,3,'12–15','Eleva los brazos hacia los lados con codos suaves y movimiento controlado.','No te impulses con las piernas.'],
  ['triceps_push','Extensión de tríceps en polea','Tríceps','Polea / cuerda','triceps',75,3,'10–15','Codos pegados al cuerpo; extiende los antebrazos sin mover el hombro.','Evita inclinarte para ganar impulso.'],
  ['leg_press','Prensa de piernas','Cuádriceps','Prensa','legpress',150,3,'8–12','Apoya toda la planta; baja según movilidad; empuja sin bloquear bruscamente rodillas.','No despegues la pelvis del respaldo.'],
  ['goblet_squat','Sentadilla goblet','Cuádriceps','Mancuerna','squat',120,3,'8–12','Mantén el peso cerca del pecho; rodillas acompañan la línea de los pies.','No fuerces una profundidad con dolor.'],
  ['back_squat','Sentadilla con barra','Cuádriceps','Barra / rack','squat',150,3,'6–10','Estabiliza el tronco; desciende con control según tu movilidad.','Evita perder el equilibrio o colapsar rodillas.'],
  ['rdl','Peso muerto rumano','Isquiotibiales','Barra / mancuernas','hinge',150,3,'8–12','Lleva caderas atrás, rodillas suaves; espalda neutra y carga cerca de piernas.','No redondees la espalda buscando más recorrido.'],
  ['split_squat','Sentadilla dividida','Cuádriceps','Mancuernas','lunge',120,2,'8–10','Coloca los pies separados; desciende vertical y controla la estabilidad.','Acorta rango si aparece dolor articular.'],
  ['hip_thrust','Hip thrust','Glúteos','Banco / barra','hipthrust',120,3,'8–12','Apoya espalda alta en banco; eleva caderas contrayendo glúteos.','Evita hiperextender la zona lumbar.'],
  ['leg_curl','Curl femoral','Isquiotibiales','Máquina','legcurl',90,3,'10–15','Mantén pelvis estable; flexiona rodillas y controla el regreso.','No levantes las caderas de la máquina.'],
  ['calf_raise','Elevación de pantorrillas','Pantorrillas','Máquina / escalón','calf',75,3,'10–15','Eleva talones con control; pausa arriba; baja sin rebotes.','Evita movimientos demasiado rápidos.'],
  ['hip_abduction','Abducción de cadera','Glúteos','Máquina','abduction',75,2,'12–15','Abre las piernas sin impulso y controla el regreso.','No uses el torso para mover la carga.'],
  ['dead_bug','Dead bug','Abdomen','Colchoneta','core',60,2,'8–12','Mantén la espalda baja estable; extiende brazo y pierna contrarios.','No arquees la espalda.'],
  ['plank','Plancha','Abdomen','Colchoneta','plank',60,2,'30–45 s','Aprieta abdomen y glúteos; forma una línea de hombros a talones.','No dejes caer la pelvis.'],
  ['cable_row','Remo en máquina','Espalda','Máquina','row',120,3,'8–12','Pecho estable contra el apoyo; tira con los codos, no con impulso.','Evita encorvar hombros.'],
  ['pec_deck','Pec deck','Pecho','Máquina','fly',75,2,'10–15','Ajusta asiento; acerca los brazos y vuelve despacio.','No extiendas excesivamente los hombros.'],
  ['leg_extension','Extensión de cuádriceps','Cuádriceps','Máquina','legpress',75,2,'10–15','Ajusta eje de la máquina a la rodilla y extiende controladamente.','Detén o modifica si genera dolor anterior de rodilla.']
 ].map(x=>({id:x[0],name:x[1],muscle:x[2],equipment:x[3],pose:x[4],rest:x[5],sets:x[6],reps:x[7],cue:x[8],avoid:x[9]})),
 routines: {
  A:{name:'Espalda y bíceps',subtitle:'Tirón · espalda, bíceps y postura',exerciseIds:['lat_pulldown','seated_row','face_pull','biceps_curl','hammer_curl','dead_bug']},
  B:{name:'Pecho, hombros y tríceps',subtitle:'Empuje · pectoral y tren superior',exerciseIds:['bench_press','incline_press','chest_fly','shoulder_press','lateral_raise','triceps_push']},
  C:{name:'Piernas y glúteos',subtitle:'Tren inferior · fuerza y estabilidad',exerciseIds:['leg_press','rdl','split_squat','hip_thrust','leg_curl','calf_raise']},
  FB1:{name:'Cuerpo completo · A',subtitle:'Adaptada para semanas con menos días',exerciseIds:['leg_press','bench_press','lat_pulldown','rdl','lateral_raise','dead_bug']},
  FB2:{name:'Cuerpo completo · B',subtitle:'Adaptada para semanas con menos días',exerciseIds:['goblet_squat','incline_press','seated_row','hip_thrust','triceps_push','biceps_curl']}
 }
};
