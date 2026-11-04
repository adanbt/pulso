/* PULSO: fichas prácticas de técnica. Síntesis educativa, no diagnóstico clínico.
   Referencia metodológica: ACSM 2026, doi:10.1249/MSS.0000000000003897
   Referencias de seguridad complementarias: Purdue HHS-738-W; ACSM Guidelines.
   La ejecución puede variar según máquina, anatomía y movilidad. */
(()=>{'use strict';
const details={
 split_squat:['Coloca un pie adelante y otro atrás con una separación estable; apóyate si falta equilibrio.','Flexiona ambas rodillas de forma controlada, manteniendo pelvis y tronco estables.','Empuja con el pie delantero para volver; usa un rango sin dolor y sin rebotes.'],
 dead_bug:['Acuéstate boca arriba con caderas y rodillas flexionadas y brazos hacia el techo.','Mantén abdomen activo y costillas controladas sin arquear excesivamente la zona lumbar.','Aleja lentamente brazo y pierna contrarios; vuelve y alterna sin perder el control del tronco.'],
 cable_row:['Ajusta el apoyo de pecho y el asiento; comienza con hombros cómodos y brazos extendidos.','Tira de los agarres llevando los codos hacia atrás, sin despegar el pecho del apoyo.','Vuelve despacio, permitiendo movimiento escapular controlado sin encorvar ni impulsar el cuerpo.'],
 assisted_pullup:['Selecciona una asistencia que te permita mantener control; apoya rodillas o pies según la máquina.','Desde un agarre firme, lleva los codos hacia abajo y el cuerpo hacia la barra sin patear ni balancearte.','Desciende con control hasta un estiramiento cómodo de hombros, sin caer bruscamente.'],
 lateral_cable:['Coloca la polea baja y ubícate estable, con el cable al lado del cuerpo.','Eleva el brazo ligeramente flexionado hacia el costado dentro de un arco cómodo.','Desciende lento; evita inclinar el tronco, encoger el hombro o usar impulso.'],
 lateral_machine:['Regula asiento y apoyos para que coincidan con la altura apropiada de tus brazos.','Eleva los brazos a los costados con codos apoyados según el diseño de la máquina.','Regresa con control y evita elevar los hombros hacia las orejas.'],
 triceps_bar:['Ajusta la polea alta y toma la barra con muñecas alineadas y codos cerca del torso.','Extiende los codos sin desplazar los hombros ni inclinar el cuerpo para generar impulso.','Regresa con control hasta flexión cómoda; no bloquees de manera brusca.'],
 leg_press_single:['Ajusta asiento y respaldo; centra la pelvis y coloca un pie firme sobre la plataforma.','Desciende gradualmente con rodilla alineada al pie, evitando que la pelvis rote o se separe.','Empuja controladamente sin bloquear la rodilla; usa menos carga que en la variante bilateral.'],
 rdl_db:['Sujeta mancuernas cerca de los muslos, con rodillas levemente flexionadas.','Lleva la cadera hacia atrás, manteniendo carga cerca del cuerpo y columna estable.','Vuelve extendiendo la cadera; termina erguido sin hiperextender la zona lumbar.'],
 split_smith:['Regula la altura de la barra y separa los pies de forma estable bajo la trayectoria guiada.','Flexiona ambas piernas en un rango cómodo, con tronco y pelvis controlados.','Sube empujando desde el pie delantero; no dependas del recorrido de la barra para compensar dolor.'],
 hip_thrust_smith:['Apoya la espalda alta en un banco estable y coloca la barra acolchada sobre la cadera.','Con pies firmes, eleva la pelvis extendiendo la cadera y manteniendo costillas controladas.','Baja lentamente; termina arriba con tronco y muslos próximos a una línea, sin arquear la espalda baja.'],
 hip_abduction_cable:['Ajusta la tobillera a la polea baja; sujétate para mantener equilibrio.','Con pelvis nivelada, separa la pierna de forma controlada sin girar el tronco.','Regresa lentamente hasta el inicio sin que el peso arrastre la extremidad.'],
 dead_bug_heel:['Acuéstate boca arriba con caderas y rodillas flexionadas y abdomen activo.','Baja un talón hacia el suelo manteniendo la pelvis estable y la espalda lumbar controlada.','Regresa y alterna; reduce el recorrido si pierdes estabilidad.'],
 plank_knees:['Apoya antebrazos y rodillas, ubicando codos bajo los hombros.','Activa abdomen y glúteos para mantener una línea estable entre cabeza, tronco y pelvis.','Respira sin dejar caer la zona lumbar ni elevar excesivamente las caderas.'],
 leg_extension_single:['Ajusta asiento y rodillo para que el eje de giro coincida con tu rodilla.','Extiende una rodilla de forma controlada, con pelvis estable y rango cómodo.','Baja despacio; detén o modifica si aparece dolor anterior de rodilla.']
};
const patterns={
 'curl':['Ajusta la posición y estabiliza codos y tronco.','Flexiona el codo sin balancear el cuerpo.','Baja con control manteniendo el agarre previsto.'],
 'pulldown':['Regula asiento y agarre para alcanzar la polea sin perder el control.','Tira de los codos hacia abajo manteniendo el tronco estable.','Permite el retorno controlado sin rebotes.'],
 'row':['Estabiliza cadera y tronco, con agarre firme.','Lleva los codos hacia atrás según la trayectoria del equipo.','Regresa con control, evitando tirar con impulso.'],
 'bench':['Ajusta banco y apoyos, manteniendo pies estables.','Baja la carga de forma controlada dentro de un rango cómodo.','Empuja sin rebote y mantén la trayectoria estable.'],
 'fly':['Ajusta los apoyos y conserva una ligera flexión de codos.','Acerca los brazos delante del tórax de forma controlada.','Vuelve sin forzar un estiramiento doloroso del hombro.'],
 'legpress':['Regula asiento y posición de los pies, con pelvis estable.','Flexiona rodillas dentro de tu movilidad cómoda y alineada.','Extiende sin movimientos bruscos, sin despegar caderas del respaldo.'],
 'squat':['Mantén apoyo firme de los pies y tronco activo.','Flexiona caderas y rodillas con control y recorrido cómodo.','Sube empujando el suelo sin perder alineación.'],
 'hinge':['Mantén el peso cerca del cuerpo y flexiona suavemente rodillas.','Lleva caderas atrás conservando tronco estable.','Extiende caderas para volver, sin arquear la espalda.'],
 'hipthrust':['Estabiliza banco, pies y carga sobre caderas.','Eleva la pelvis con extensión de cadera controlada.','Evita compensar con exceso de arco lumbar.'],
 'plank':['Ajusta apoyos y activa abdomen y glúteos.','Mantén tronco y pelvis alineados mientras respiras.','Termina si no puedes sostener la postura estable.']
};
window.PULSO_TECHNIQUE={details,patterns,sources:[
 {label:'ACSM: Resistance Training Prescription (2026)',url:'https://doi.org/10.1249/MSS.0000000000003897'},
 {label:'Purdue HHS-738-W: Healthy Exercises for Every Body',url:'https://www.extension.purdue.edu/extmedia/HHS/HHS-738-W.pdf'}
]};
})();
