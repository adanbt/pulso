from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json, re
root=Path(__file__).parent
raw=(root/'data.js').read_text()
ids=re.findall(r"\['([a-z_]+)','[^']+','[^']+','[^']+','([a-z]+)'",raw)
assert len(ids)>=24,len(ids)

def line(x1,y1,x2,y2,color='#375e5a',thick=9): return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{thick}" stroke-linecap="round"/>'
def circle(x,y,r=12,fill='#e3aa84',stroke='#375e5a'):return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="3"/>'
def equip(what):
 if what=='bar':return line(82,70,218,70,'#7296a3',5)+circle(80,70,5,'#7296a3')+circle(220,70,5,'#7296a3')
 if what=='bench':return '<rect x="90" y="161" width="133" height="7" rx="3" fill="#8eaa9c"/>'+line(109,168,109,187,'#789188',5)+line(203,168,203,187,'#789188',5)
 if what=='cable':return line(253,43,253,181,'#98ada6',5)+'<rect x="245" y="33" width="16" height="20" rx="5" fill="#91ada8"/>'
 return ''
def fig(head,neck,hip,arms,legs,extras=''):
 t=circle(*head,12)+line(neck[0],neck[1],hip[0],hip[1],'#355d5a',12)
 for a in arms:
  t+=line(*a[0],color='#426f69',thick=8)+line(*a[1],color='#426f69',thick=8)+circle(a[1][2],a[1][3],4,'#e3aa84','#426f69')
 for a in legs:
  t+=line(*a[0],color='#355d5a',thick=9)+line(*a[1],color='#355d5a',thick=9)
 return extras+t

def std(phase,action):
 head=(147,74);n=(147,93);h=(147,143);legs=[((147,143,132,168),(132,168,130,188)),((147,143,168,168),(168,168,172,188))]
 if action=='curl':
  arms=[((145,104,116,129),(116,129,118,155 if phase==1 else 101)),((149,104,181,128),(181,128,179,156 if phase==1 else 103))]
 elif action=='lateral':
  arms=[((145,104,120 if phase==1 else 94,131 if phase==1 else 100),(120 if phase==1 else 94,131 if phase==1 else 100,116 if phase==1 else 67,159 if phase==1 else 99)),((149,104,174 if phase==1 else 200,131 if phase==1 else 100),(174 if phase==1 else 200,131 if phase==1 else 100,178 if phase==1 else 229,159 if phase==1 else 99))]
 elif action=='shoulder':
  arms=[((145,103,118,114 if phase==1 else 78),(118,114 if phase==1 else 78,118 if phase==1 else 116,73 if phase==1 else 49)),((149,103,178,114 if phase==1 else 78),(178,114 if phase==1 else 78,176 if phase==1 else 77,73 if phase==1 else 49))]
 elif action=='triceps':
  arms=[((146,104,173,122),(173,122,183 if phase==1 else 176,102 if phase==1 else 155)),((146,104,132,124),(132,124,139 if phase==1 else 134,103 if phase==1 else 157))]
 elif action=='facepull':
  arms=[((146,107,173 if phase==1 else 168,111 if phase==1 else 81),(173 if phase==1 else 168,111 if phase==1 else 81,233 if phase==1 else 177,111 if phase==1 else 70)),((146,107,163 if phase==1 else 160,124 if phase==1 else 89),(163 if phase==1 else 160,124 if phase==1 else 89,233 if phase==1 else 175,124 if phase==1 else 85))]
 elif action=='calf':
  arms=[((145,104,118,129),(118,129,119,149)),((149,104,177,129),(177,129,176,149))]
  dy=-7 if phase==2 else 0
  legs=[((147,143,132,168+dy),(132,168+dy,130,188+dy)),((147,143,168,168+dy),(168,168+dy,172,188+dy))]
 else: arms=[((145,104,118,129),(118,129,119,149)),((149,104,177,129),(177,129,176,149))]
 o=fig(head,n,h,arms,legs)
 if action in ('curl','lateral','shoulder'):o+=circle(arms[0][1][2],arms[0][1][3],5,'#7296a3')+circle(arms[1][1][2],arms[1][1][3],5,'#7296a3')
 if action=='triceps':o+=equip('cable')
 if action=='facepull':o+=equip('cable')
 if action=='calf':o+=line(108,190,198,190,'#8fa9a0',5)
 return o

def draw(family,phase):
 if family in ('curl','lateral','shoulder','triceps','facepull','calf'):return std(phase,family)
 if family=='pulldown':
  arms=[((147,106,114 if phase==1 else 116,82 if phase==1 else 108),(114 if phase==1 else 116,82 if phase==1 else 108,102 if phase==1 else 101,50 if phase==1 else 97)),((151,106,185 if phase==1 else 180,82 if phase==1 else 108),(185 if phase==1 else 180,82 if phase==1 else 108,199 if phase==1 else 199,50 if phase==1 else 97))]
  legs=[((149,144,118,158),(118,158,118,188)),((149,144,180,158),(180,158,184,188))]
  return equip('bar')+line(95,193,204,193,'#8fa9a0',6)+fig((149,86),(149,105),(149,145),arms,legs)
 if family=='row':
  arms=[((126,113,159,128),(159,128,233 if phase==1 else 177,128)),((124,113,148,137),(148,137,221 if phase==1 else 167,137))]
  legs=[((125,148,159,166),(159,166,193,185)),((125,148,177,163),(177,163,216,184))]
  return equip('cable')+line(95,153,153,153,'#97afa5',8)+fig((125,94),(125,111),(125,148),arms,legs)
 if family in ('bench','fly'):
  if family=='bench':hands=([((129,132,145,102),(145,102,151,125)),((129,133,165,102),(165,102,171,124))] if phase==1 else [((129,132,145,93),(145,93,150,61)),((129,132,165,93),(165,93,171,61))])
  else:hands=([((129,130,111,101),(111,101,99,125)),((144,130,162,100),(162,100,191,124))] if phase==1 else [((129,130,131,97),(131,97,145,69)),((144,130,149,97),(149,97,154,69))])
  legs=[((178,139,198,159),(198,159,211,187)),((178,139,199,160),(199,160,222,188))]
  return equip('bench')+fig((106,122),(128,133),(178,139),hands,legs)+circle(hands[0][1][2],hands[0][1][3],5,'#759eb4')+circle(hands[1][1][2],hands[1][1][3],5,'#759eb4')
 if family in ('squat','legpress','lunge','hinge'):
  if family=='hinge':
   head=(148,71) if phase==1 else (192,103);neck=(148,91) if phase==1 else (182,115);hip=(148,144)
   arms=[((neck[0],neck[1]+10,130 if phase==1 else 198,122 if phase==1 else 148),(130 if phase==1 else 198,122 if phase==1 else 148,132 if phase==1 else 211,157 if phase==1 else 174)),((neck[0]+3,neck[1]+10,168 if phase==1 else 211,122 if phase==1 else 148),(168 if phase==1 else 211,122 if phase==1 else 148,170 if phase==1 else 215,156 if phase==1 else 172))]
   legs=[((148,144,131,169),(131,169,128,188)),((148,144,166,169),(166,169,169,188))]
   return fig(head,neck,hip,arms,legs)
  if family=='lunge':
   hip=(149,143 if phase==1 else 156)
   legs=([((149,143,133,166),(133,166,130,190)),((149,143,170,166),(170,166,174,190))] if phase==1 else [((149,156,109,154),(109,154,91,190)),((149,156,183,174),(183,174,190,190))])
   arms=[((148,105,120,129),(120,129,118,153)),((150,105,177,129),(177,129,177,153))]
   return fig((149,72 if phase==1 else 84),(149,91 if phase==1 else 103),hip,arms,legs)
  if family=='legpress':
   # Respaldo inclinado: cadera y rodilla; ejercicio dibujado de perfil
   hip=(113,152);arms=[((109,117,98,134),(98,134,109,152)),((123,118,118,137),(118,137,130,149))]
   knee=(162,136) if phase==1 else (190,104)
   feet=(204,112) if phase==1 else (235,82)
   legs=[((hip[0],hip[1],knee[0],knee[1]),(knee[0],knee[1],feet[0],feet[1])),((hip[0]+8,hip[1]+6,knee[0]+7,knee[1]+4),(knee[0]+7,knee[1]+4,feet[0]+4,feet[1]+2))]
   return line(80,165,131,105,'#9bb8ac',11)+line(240,61,257,112,'#9bb8ac',9)+fig((96,108),(115,128),hip,arms,legs)
  hip=(150,142 if phase==1 else 163)
  legs=[((hip[0],hip[1],131 if phase==1 else 107,165 if phase==1 else 157),(131 if phase==1 else 107,165 if phase==1 else 157,123 if phase==1 else 107,192)),((hip[0],hip[1],169 if phase==1 else 190,165 if phase==1 else 157),(169 if phase==1 else 190,165 if phase==1 else 157,177 if phase==1 else 190,192))]
  arms=[((149,105 if phase==1 else 126,123,123 if phase==1 else 139),(123,123 if phase==1 else 139,127,149)),((151,105 if phase==1 else 126,179,123 if phase==1 else 139),(179,123 if phase==1 else 139,174,149))]
  return fig((150,73 if phase==1 else 94),(150,92 if phase==1 else 112),hip,arms,legs)
 if family=='hipthrust':
  hip=(181,168 if phase==1 else 126)
  neck=(122,133);head=(105,123)
  arms=[((130,130,150,145),(150,145,172,145)),((128,127,160,133),(160,133,173,139))]
  knees=(215,151);feet=(236,186)
  legs=[((hip[0],hip[1],knees[0],knees[1]),(knees[0],knees[1],feet[0],feet[1])),((hip[0]+2,hip[1]+5,knees[0]+8,knees[1]+3),(knees[0]+8,knees[1]+3,feet[0]+6,feet[1]))]
  return line(80,149,133,149,'#9bb0ab',10)+line(93,150,93,185,'#9bb0ab',5)+fig(head,neck,hip,arms,legs)
 if family=='legcurl':
  head=(85,130);neck=(103,129);hip=(180,135)
  arms=[((110,126,128,146),(128,146,145,148)),((118,123,136,145),(136,145,155,148))]
  knees=(222,135)
  legs=[((180,135,222,135),(222,135,260 if phase==1 else 226,135 if phase==1 else 88)),((180,141,225,141),(225,141,262 if phase==1 else 232,141 if phase==1 else 88))]
  return line(88,157,244,157,'#97afa5',8)+fig(head,neck,hip,arms,legs)
 if family=='abduction':
  head=(151,72);neck=(151,92);hip=(151,139)
  arms=[((149,104,127,124),(127,124,127,145)),((153,104,179,124),(179,124,179,145))]
  legs=[((151,139,132 if phase==1 else 102,161),(132 if phase==1 else 102,161,127 if phase==1 else 91,191)),((151,139,171 if phase==1 else 202,161),(171 if phase==1 else 202,161,178 if phase==1 else 213,191))]
  return line(120,148,183,148,'#9bb0ab',7)+fig(head,neck,hip,arms,legs)
 if family in ('core','plank'):
  if family=='plank':
   return line(55,189,254,189,'#a4b7a9',5)+fig((90,137),(115,146),(187,148),[((115,146,102,172),(102,172,104,188)),((115,146,128,172),(128,172,129,188))],[((187,148,210,166),(210,166,235,187)),((187,148,214,166),(214,166,245,187))])
  head=(87,140) if phase==1 else (100,140);neck=(107,145);hip=(173,157)
  arms=[((108,142,132 if phase==1 else 146,102 if phase==1 else 86),(132 if phase==1 else 146,102 if phase==1 else 86,146 if phase==1 else 168,77 if phase==1 else 64)),((108,145,136,125),(136,125,167,107))]
  legs=[((173,157,204,140 if phase==1 else 125),(204,140 if phase==1 else 125,228 if phase==1 else 241,153 if phase==1 else 106)),((173,157,204,149),(204,149,229,170))]
  return line(63,189,249,189,'#adb9b0',5)+fig(head,neck,hip,arms,legs)
 return std(phase,'curl')

for exid,family in ids:
 for phase in (1,2):
  body=draw(family,phase)
  svg=f'''<svg xmlns="http://www.w3.org/2000/svg" width="320" height="214" viewBox="0 0 320 214" role="img"><title>{'Posición inicial' if phase==1 else 'Posición final'} - {exid}</title><rect width="320" height="214" rx="17" fill="#edf0df"/><path d="M0 177 H320" stroke="#d6dccc" stroke-width="1"/><rect x="14" y="12" rx="11" width="80" height="24" fill="#d6e8c7"/><text x="54" y="29" font-family="Arial,sans-serif" font-weight="700" font-size="13" text-anchor="middle" fill="#315a48">{'INICIO' if phase==1 else 'FINAL'}</text><text x="304" y="28" font-size="11" font-family="Arial,sans-serif" text-anchor="end" fill="#728c81">ESQUEMA</text>{body}<path d="M254 188 q18 -8 22 -25" fill="none" stroke="#7ab579" stroke-width="3" stroke-linecap="round"/><path d="M276 163 l-10 4 9 7" fill="none" stroke="#7ab579" stroke-width="3" stroke-linecap="round"/></svg>'''
  (root/f'assets/exercises/{exid}-{phase}.svg').write_text(svg,encoding='utf-8')
for size in [192,512]:
 im=Image.new('RGB',(size,size),(11,22,27));dr=ImageDraw.Draw(im)
 k=size/192
 dr.rounded_rectangle((20*k,20*k,172*k,172*k),radius=42*k,outline=(197,239,120),width=int(8*k))
 try: ft=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',int(104*k))
 except: ft=ImageFont.load_default()
 dr.text((61*k,28*k),'P',font=ft,fill=(245,250,241))
 dr.ellipse((139*k,132*k,156*k,149*k),fill=(197,239,120))
 im.save(root/f'assets/icons/icon-{size}.png')
assets=['./','./index.html','./styles.css','./data.js','./app.js','./manifest.webmanifest', './assets/icons/icon-192.png','./assets/icons/icon-512.png']
assets+=['./assets/exercises/'+p.name for p in sorted((root/'assets/exercises').glob('*.svg'))]
sw='''const VERSION='pulso-v01-1';\nconst ASSETS='''+json.dumps(assets,ensure_ascii=False)+''';\nself.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});\nself.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(v=>v||fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(VERSION).then(c=>c.put(e.request,copy))}return r})))})\n'''
(root/'sw.js').write_text(sw,encoding='utf-8')
print(len(ids),'ejercicios;',len(assets),'archivos offline')
