'use strict';
/* PULSO v0.2 · curaduría por foco/gesto. Mantener IDs originales protege historiales. */
(()=>{
const data=window.PULSO_DATA;
const make=(id,name,muscle,equipment,pose,rest,sets,reps,cue,avoid)=>({id,name,muscle,equipment,pose,rest,sets,reps,cue,avoid});
const extra=[
 make('curl_bar','Curl con barra','Bíceps','Barra','curl',90,3,'8–12','Codos cerca del torso; flexiona el codo manteniendo palmas arriba y baja controladamente.','No balancees espalda ni adelantes los codos.'),
 make('curl_cable','Curl supinado en polea','Bíceps','Polea baja','curl',75,3,'10–15','Con barra recta en polea baja y palmas arriba, flexiona codos sin mover hombros.','No uses el cuerpo para tirar.'),
 make('curl_preacher','Curl predicador','Bíceps','Banco Scott / barra','curl',90,3,'8–12','Apoya la cara posterior de los brazos; sube y baja con control.','No dejes caer el peso al extender el codo.'),
 make('hammer_rope','Curl martillo en polea con cuerda','Bíceps','Polea baja / cuerda','curl',75,2,'10–15','Agarre neutro; codos estables; acerca los extremos de la cuerda al pecho.','No supines las muñecas ni te balancees.'),
 make('hammer_cross','Curl martillo cruzado','Bíceps','Mancuernas','curl',75,2,'10–12','Eleva la mancuerna hacia el hombro opuesto manteniendo agarre neutro.','No eleves el hombro ni gires el tronco.'),
 make('neutral_pulldown','Jalón al pecho agarre neutro','Espalda','Polea alta / agarre neutro','pulldown',90,3,'8–12','Lleva codos hacia las costillas manteniendo el torso estable.','No conviertas el jalón en un remo reclinándote.'),
 make('assisted_pullup','Dominadas asistidas','Espalda','Máquina asistida','pulldown',150,3,'6–10','Con asistencia suficiente, lleva el pecho hacia la barra y desciende controlado.','No generes impulso con las piernas.'),
 make('chest_supported_row','Remo con pecho apoyado','Espalda','Mancuernas / banco inclinado','row',120,3,'8–12','Pecho apoyado; retrae escápulas y lleva codos hacia atrás.','No despegues el tronco del respaldo.'),
 make('single_cable_row','Remo unilateral en polea','Espalda','Polea baja','row',120,3,'8–12','Remo con un brazo; estabiliza el torso sin girarlo.','No rote el cuerpo para ganar recorrido.'),
 make('rear_delt_fly','Pájaros o reverse fly','Hombro posterior','Mancuernas','fly',75,2,'12–15','Abre los brazos desde una bisagra de cadera moderada; controla la vuelta.','No eleves los trapecios ni uses impulso.'),
 make('bench_db','Press plano con mancuernas','Pecho','Mancuernas / banco','bench',120,3,'8–12','Omóplatos estables; baja mancuernas a ambos lados del tórax y sube.','No choques las mancuernas.'),
 make('machine_chest_press','Press de pecho en máquina','Pecho','Máquina','bench',120,3,'8–12','Ajusta asiento; empuja a altura media de pecho y controla regreso.','No eleves hombros ni bloquees bruscamente codos.'),
 make('incline_barbell','Press inclinado con barra','Pecho','Barra / banco inclinado','bench',150,3,'8–12','Inclinación moderada, pies estables y descenso controlado a la parte superior del pecho.','No exageres la inclinación ni rebotes.'),
 make('incline_machine','Press inclinado en máquina','Pecho','Máquina','bench',120,3,'8–12','Regula altura para empujar hacia arriba y adelante, con escápulas estables.','No fuerces profundidad molesta.'),
 make('cable_fly','Aperturas con poleas','Pecho','Poleas dobles','fly',75,2,'10–15','Con codos flexionados, aproxima manos delante del tórax sin impulsarte.','No estires excesivamente los hombros.'),
 make('shoulder_machine','Press militar en máquina','Hombro','Máquina','shoulder',120,3,'8–12','Sujeta manillas al nivel del hombro y empuja vertical con tronco estable.','No hiperextiendas espalda.'),
 make('lateral_cable','Elevación lateral en polea','Hombro','Polea baja','lateral',75,3,'12–15','Con un brazo, eleva lateralmente hasta altura del hombro sin balanceo.','No subas encogiendo el trapecio.'),
 make('lateral_machine','Elevación lateral en máquina','Hombro','Máquina','lateral',75,3,'12–15','Ajusta brazos y asiento; abre hasta una altura cómoda.','No uses impulso ni eleves hombros.'),
 make('triceps_rope','Pushdown de tríceps con cuerda','Tríceps','Polea / cuerda','triceps',75,3,'10–15','Extiende codos con cuerda y separa ligeramente extremos abajo.','No muevas hombros para bajar la carga.'),
 make('triceps_bar','Pushdown de tríceps con barra','Tríceps','Polea / barra','triceps',75,3,'10–15','Codos próximos al torso; extiende sin inclinar el cuerpo.','No rebotes ni utilices carga excesiva.'),
 make('hack_squat','Sentadilla hack','Cuádriceps','Máquina hack','squat',150,3,'8–12','Apoya espalda; baja dentro del rango cómodo y sube con pies estables.','No fuerces flexión de rodilla dolorosa.'),
 make('leg_press_single','Prensa de piernas unilateral','Cuádriceps','Prensa','legpress',120,3,'10–12','Con menor carga, empuja una pierna manteniendo pelvis estable.','No gires la pelvis ni fuerces profundidad.'),
 make('rdl_db','Peso muerto rumano con mancuernas','Isquiotibiales','Mancuernas','hinge',120,3,'8–12','Cadera hacia atrás, rodillas ligeramente flexionadas; mancuernas junto a muslos.','No encorves la espalda.'),
 make('split_smith','Sentadilla dividida en Smith','Cuádriceps','Smith','lunge',120,2,'8–10','Con pies separados, baja verticalmente con equilibrio y rango cómodo.','No fuerces la rodilla si duele.'),
 make('hip_thrust_smith','Hip thrust en Smith','Glúteos','Smith / banco','hipthrust',120,3,'8–12','Espalda alta apoyada y barra guiada sobre cadera; sube hasta alinear tronco y muslos.','No hiperextiendas zona lumbar.'),
 make('glute_bridge','Puente de glúteos con barra','Glúteos','Barra / colchoneta','hipthrust',120,3,'10–15','Desde el suelo, eleva pelvis contrayendo glúteos sin arquear zona lumbar.','No empujes desde la espalda baja.'),
 make('seated_leg_curl','Curl femoral sentado','Isquiotibiales','Máquina','legcurl',90,3,'10–15','Ajusta apoyos; flexiona rodillas contra resistencia y controla la extensión.','No levantes pelvis ni rebotes.'),
 make('standing_calf','Elevación de gemelos de pie','Pantorrillas','Máquina de pie','calf',75,3,'10–15','Rodillas casi extendidas; eleva talones, pausa y baja con control.','No rebotes en la parte inferior.'),
 make('seated_calf','Elevación de sóleo sentado','Pantorrillas','Máquina sentado','calf',75,3,'12–20','Rodillas flexionadas; eleva talones pausando arriba.','No uses rebotes.'),
 make('hip_abduction_cable','Abducción de cadera en polea','Glúteos','Polea baja / tobillera','abduction',75,2,'12–15','Separa la pierna con tronco estable y control de pelvis.','No inclines exageradamente el cuerpo.'),
 make('dead_bug_heel','Dead bug con apoyo de talón','Abdomen','Colchoneta','core',60,2,'8–12','En posición supina, baja un talón al suelo alternando lados sin arquear lumbar.','No pierdas control de costillas.'),
 make('plank_knees','Plancha con rodillas apoyadas','Abdomen','Colchoneta','plank',60,2,'20–40 s','Antebrazos y rodillas apoyados; conserva tronco alineado y abdomen firme.','No hundas zona lumbar.'),
 make('leg_extension_single','Extensión de cuádriceps unilateral','Cuádriceps','Máquina','legpress',75,2,'10–15','Extiende una rodilla a la vez; controla fase de regreso.','Evita rango que provoque dolor anterior de rodilla.')
];
for (const e of extra) if(!data.exercises.some(x=>x.id===e.id))data.exercises.push(e);
/* Cada grupo tiene el mismo objetivo principal, pero NO implica activación muscular idéntica. */
const groups=[
 ['vertical_lats',['lat_pulldown','neutral_pulldown','assisted_pullup']],
 ['horizontal_row',['seated_row','chest_supported_row','cable_row']],
 ['horizontal_row_unilateral',['db_row','single_cable_row']],
 ['rear_delt_face',['face_pull']],
 ['rear_delt_fly',['rear_delt_fly']],
 ['supinated_elbow',['biceps_curl','curl_bar','curl_cable','curl_preacher']],
 ['neutral_elbow',['hammer_curl','hammer_rope','hammer_cross']],
 ['flat_press',['bench_press','bench_db','machine_chest_press']],
 ['incline_press',['incline_press','incline_barbell','incline_machine']],
 ['chest_adduction',['chest_fly','pec_deck','cable_fly']],
 ['vertical_press',['shoulder_press','shoulder_machine']],
 ['lateral_delt',['lateral_raise','lateral_cable','lateral_machine']],
 ['elbow_extension_down',['triceps_push','triceps_rope','triceps_bar']],
 ['leg_press_quad',['leg_press','leg_press_single']],
 ['squat_quad',['goblet_squat','back_squat','hack_squat']],
 ['hip_hinge_hams',['rdl','rdl_db']],
 ['split_squat_quad',['split_squat','split_smith']],
 ['hip_thrust_glute',['hip_thrust','hip_thrust_smith','glute_bridge']],
 ['knee_flexion_hams',['leg_curl','seated_leg_curl']],
 ['standing_gastroc',['calf_raise','standing_calf']],
 ['seated_soleus',['seated_calf']],
 ['hip_abductors',['hip_abduction','hip_abduction_cable']],
 ['anti_extension_dynamic',['dead_bug','dead_bug_heel']],
 ['anti_extension_static',['plank','plank_knees']],
 ['knee_extension_quad',['leg_extension','leg_extension_single']]
];
const relatedPairs=[
 [['supinated_elbow'],['neutral_elbow']],
 [['rear_delt_face'],['rear_delt_fly']],
 [['leg_press_quad'],['squat_quad']],
 [['standing_gastroc'],['seated_soleus']],
 [['anti_extension_dynamic'],['anti_extension_static']],
 [['horizontal_row'],['vertical_lats']],
 [['horizontal_row'],['horizontal_row_unilateral']],
 [['hip_hinge_hams'],['hip_thrust_glute']],
 [['split_squat_quad'],['squat_quad']],
 [['flat_press'],['incline_press']]
];
const byId=Object.fromEntries(data.exercises.map(x=>[x.id,x]));
const focusText={
vertical_lats:['Jalón vertical · dorsal ancho','Tracción vertical'],horizontal_row:['Remo horizontal · espalda media','Tracción horizontal'],horizontal_row_unilateral:['Remo unilateral · dorsal ancho y espalda media','Tracción horizontal unilateral'],
rear_delt_face:['Deltoides posterior + rotadores externos','Tracción alta + rotación externa'],rear_delt_fly:['Deltoides posterior · abducción horizontal','Apertura inversa'],
supinated_elbow:['Flexión de codo con supinación · bíceps braquial','Flexión de codo supinada'],neutral_elbow:['Flexión de codo neutra · braquial y braquiorradial','Flexión de codo neutra'],
flat_press:['Empuje horizontal · pectoral','Empuje horizontal'],incline_press:['Empuje inclinado · pectoral superior','Empuje inclinado'],
chest_adduction:['Aducción horizontal · pectoral','Apertura/aducción horizontal'],vertical_press:['Empuje vertical · deltoides','Empuje vertical'],
lateral_delt:['Abducción de hombro · deltoides medio','Abducción de hombro'],elbow_extension_down:['Extensión de codo · tríceps','Extensión de codo'],
leg_press_quad:['Empuje de piernas · cuádriceps','Extensión de rodilla/cadera guiada'],squat_quad:['Sentadilla · cuádriceps + glúteos','Patrón sentadilla'],
hip_hinge_hams:['Bisagra de cadera · isquiotibiales','Bisagra de cadera'],split_squat_quad:['Sentadilla dividida · cuádriceps y glúteos','Sentadilla dividida'],
hip_thrust_glute:['Extensión de cadera · glúteo mayor','Extensión de cadera'],knee_flexion_hams:['Flexión de rodilla · isquiotibiales','Flexión de rodilla'],
standing_gastroc:['Flexión plantar con rodilla extendida · gastrocnemio','Flexión plantar de pie'],seated_soleus:['Flexión plantar con rodilla flexionada · sóleo','Flexión plantar sentado'],
hip_abductors:['Abducción de cadera · glúteo medio','Abducción de cadera'],anti_extension_dynamic:['Antiextensión lumbar dinámica · core','Estabilización de tronco dinámica'],
anti_extension_static:['Antiextensión lumbar isométrica · core','Estabilización isométrica'],knee_extension_quad:['Extensión aislada de rodilla · cuádriceps','Extensión de rodilla']
};
for(const [group,ids] of groups){
 const [focus,pattern]=focusText[group];for(const id of ids){const e=byId[id];if(!e)throw new Error('Falta ejercicio '+id);e.group=group;e.focus=focus;e.pattern=pattern;e.equivalentIds=ids.filter(x=>x!==id);e.relatedIds=[];}
}
for(const [a,b] of relatedPairs){const left=groups.filter(x=>a.includes(x[0])).flatMap(x=>x[1]);const right=groups.filter(x=>b.includes(x[0])).flatMap(x=>x[1]);for(const id of left)byId[id].relatedIds.push(...right);for(const id of right)byId[id].relatedIds.push(...left)}
for(const e of data.exercises){e.relatedIds=[...new Set(e.relatedIds)];
 const eq=e.equipment.toLowerCase();e.equipmentType=eq.includes('smith')?'Smith':eq.includes('mancuerna')?'Mancuernas':eq.includes('polea')?'Polea':eq.includes('barra')?'Barra':eq.includes('máquina')||eq.includes('prensa')?'Máquina':eq.includes('colchoneta')?'Sin equipamiento':'Otro';
 e.laterality=/(unilateral|un brazo|unilateral|una pierna|cruzado|un brazo)/i.test(e.name)?'Unilateral':'Bilateral';
}
/* Fotografías para IDs concretos; los ausentes NO reciben una foto de otro ejercicio. */
const photoIDs={
 lat_pulldown:'Wide-Grip_Lat_Pulldown',seated_row:'Seated_Cable_Rows',db_row:'One-Arm_Dumbbell_Row',face_pull:'Face_Pull',biceps_curl:'Dumbbell_Bicep_Curl',hammer_curl:'Alternate_Hammer_Curl',
 bench_press:'Barbell_Bench_Press_-_Medium_Grip',incline_press:'Incline_Dumbbell_Press',chest_fly:'Dumbbell_Flyes',shoulder_press:'Dumbbell_Shoulder_Press',lateral_raise:'Side_Lateral_Raise',triceps_push:'Triceps_Pushdown',
 leg_press:'Leg_Press',back_squat:'Barbell_Squat',hip_thrust:'Barbell_Hip_Thrust',leg_curl:'Lying_Leg_Curls',plank:'Plank',pec_deck:'Butterfly',leg_extension:'Leg_Extensions',
 curl_cable:'Standing_Biceps_Cable_Curl',curl_bar:'Barbell_Curl',curl_preacher:'Preacher_Curl',hammer_rope:'Cable_Hammer_Curls_-_Rope_Attachment',hammer_cross:'Cross_Body_Hammer_Curl',triceps_rope:'Triceps_Pushdown_-_Rope_Attachment',
 neutral_pulldown:'Close-Grip_Front_Lat_Pulldown',chest_supported_row:'Dumbbell_Incline_Row',single_cable_row:'One_Arm_Cable_Row',rear_delt_fly:'Reverse_Flyes',
 bench_db:'Dumbbell_Bench_Press',machine_chest_press:'Leverage_Chest_Press',incline_machine:'Leverage_Incline_Chest_Press',incline_barbell:'Barbell_Incline_Bench_Press_-_Medium_Grip',cable_fly:'Cable_Crossover',shoulder_machine:'Leverage_Shoulder_Press',
 hack_squat:'Hack_Squat',
 glute_bridge:'Barbell_Glute_Bridge',standing_calf:'Standing_Barbell_Calf_Raise',seated_leg_curl:'Seated_Leg_Curl',seated_calf:'Seated_Calf_Raise',
 goblet_squat:'Goblet_Squat',rdl:'Romanian_Deadlift',hip_abduction:'Thigh_Abductor',calf_raise:'Standing_Calf_Raises'
};
for(const e of data.exercises){e.photoId=photoIDs[e.id]||null}
data.version='0.4';
})();
