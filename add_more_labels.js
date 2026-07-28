const fs = require('fs');
const path = require('path');
const file = path.join('questions', 'ciencia_luz.js');
let data = require('./' + file);

const q_sonido = {
    id: 'sonido_11',
    type: 'label',
    subject: 'science',
    station: 'La Luz y el sonido',
    prompt: 'Completa las afirmaciones sobre el sonido (Toca una palabra y luego el espacio en blanco).',
    svg: `<svg viewBox="0 0 1000 450" width="100%" height="100%" style="background:#fff; border-radius:15px; font-family: 'Comic Sans MS', sans-serif;">
            <text x="40" y="50" font-size="28" font-weight="bold" fill="#333">Completa las afirmaciones sobre el sonido:</text>
            <text x="40" y="110" font-size="24" fill="#555">a. El sonido es una forma de</text>
            <rect x="370" y="80" width="150" height="40" fill="#f0f0f0" rx="10"/>
            <text x="530" y="110" font-size="24" fill="#555">que los oídos perciben.</text>
            
            <text x="40" y="180" font-size="24" fill="#555">b. A diferencia de la luz, el sonido no viaja en el</text>
            <rect x="580" y="150" width="150" height="40" fill="#f0f0f0" rx="10"/>
            <text x="740" y="180" font-size="24" fill="#555">.</text>
            
            <text x="40" y="250" font-size="24" fill="#555">c. El sonido se transmite en forma de</text>
            <rect x="460" y="220" width="180" height="40" fill="#f0f0f0" rx="10"/>
            <text x="650" y="250" font-size="24" fill="#555">.</text>
            
            <text x="40" y="320" font-size="24" fill="#555">d. La</text>
            <rect x="100" y="290" width="180" height="40" fill="#f0f0f0" rx="10"/>
            <text x="290" y="320" font-size="24" fill="#555">diferencia un sonido fuerte de uno débil.</text>
            
            <text x="40" y="390" font-size="24" fill="#555">e. El</text>
            <rect x="100" y="360" width="180" height="40" fill="#f0f0f0" rx="10"/>
            <text x="290" y="390" font-size="24" fill="#555">diferencia un sonido agudo de uno grave.</text>
          </svg>`,
    labels: [
      { word: 'energía', x: 44.5, y: 22.2 },
      { word: 'vacío', x: 65.5, y: 37.7 },
      { word: 'vibraciones', x: 55, y: 53.3 },
      { word: 'intensidad', x: 19, y: 68.8 },
      { word: 'tono', x: 19, y: 84.4 }
    ],
    explain: "a. El sonido es una forma de energía.\nb. El sonido no viaja en el vacío.\nc. El sonido se transmite por vibraciones.\nd. La intensidad distingue fuerte/débil.\ne. El tono distingue agudo/grave."
};

const q_luz2 = {
    id: 'luz_22',
    type: 'label',
    subject: 'science',
    station: 'La Luz y el sonido',
    prompt: 'Clasifica los siguientes objetos según cómo interactúan con la luz.',
    svg: `<svg viewBox="0 0 1000 450" width="100%" height="100%" style="background:#fff; border-radius:15px; font-family: 'Comic Sans MS', sans-serif;">
            <text x="40" y="50" font-size="28" font-weight="bold" fill="#333">Clasifica los siguientes objetos:</text>
            <text x="40" y="110" font-size="24" fill="#555">a. El agua limpia y el vidrio son materiales</text>
            <rect x="500" y="80" width="200" height="40" fill="#f0f0f0" rx="10"/>
            
            <text x="40" y="180" font-size="24" fill="#555">b. El papel celofán es un material</text>
            <rect x="410" y="150" width="200" height="40" fill="#f0f0f0" rx="10"/>
            
            <text x="40" y="250" font-size="24" fill="#555">c. La madera y el cartón son materiales</text>
            <rect x="470" y="220" width="200" height="40" fill="#f0f0f0" rx="10"/>
            
            <text x="40" y="320" font-size="24" fill="#555">d. Un espejo limpio es un material</text>
            <rect x="430" y="290" width="200" height="40" fill="#f0f0f0" rx="10"/>
            
            <text x="40" y="390" font-size="24" fill="#555">e. El sol y las estrellas son cuerpos</text>
            <rect x="440" y="360" width="200" height="40" fill="#f0f0f0" rx="10"/>
          </svg>`,
    labels: [
      { word: 'transparentes', x: 60, y: 22.2 },
      { word: 'translúcido', x: 51, y: 37.7 },
      { word: 'opacos', x: 57, y: 53.3 },
      { word: 'reflectante', x: 53, y: 68.8 },
      { word: 'luminosos', x: 54, y: 84.4 }
    ],
    explain: "a. Dejan pasar toda la luz (transparentes).\nb. Dejan pasar parte de la luz (translúcido).\nc. No dejan pasar la luz (opacos).\nd. Reflejan la luz (reflectante).\ne. Emiten luz propia (luminosos)."
};

data.push(q_sonido);
data.push(q_luz2);
const content = 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(file, content, 'utf8');
console.log('Appended 2 more label questions');
