const fs = require('fs');
const path = require('path');
const file = path.join('questions', 'ciencia_luz.js');
let data = require('./' + file);

const newQuestion = {
    id: 'luz_21',
    type: 'label',
    subject: 'ciencia',
    station: 'La Luz',
    prompt: '2. Completa las siguientes afirmaciones con las palabras clave (Toca una palabra y luego el espacio en blanco).',
    svg: `<svg viewBox="0 0 1000 450" width="100%" height="100%" style="background:#fff; border-radius:15px; font-family: 'Comic Sans MS', sans-serif;">
            <text x="40" y="70" font-size="28" font-weight="bold" fill="#333">Completa las siguientes afirmaciones:</text>
            <text x="40" y="140" font-size="24" fill="#555">a. Los cuerpos</text>
            <rect x="230" y="110" width="200" height="40" fill="#f0f0f0" rx="10"/>
            <text x="440" y="140" font-size="24" fill="#555">no dejan pasar la luz que les llega.</text>
            <text x="40" y="210" font-size="24" fill="#555">b. Los cuerpos</text>
            <rect x="230" y="180" width="200" height="40" fill="#f0f0f0" rx="10"/>
            <text x="440" y="210" font-size="24" fill="#555">son aquellos que desprenden luz o son fuente de luz.</text>
            <text x="40" y="280" font-size="24" fill="#555">c. Las velas y las linternas son cuerpos luminosos</text>
            <rect x="630" y="250" width="200" height="40" fill="#f0f0f0" rx="10"/>
            <text x="840" y="280" font-size="24" fill="#555">.</text>
            <text x="40" y="350" font-size="24" fill="#555">d. Los cuerpos</text>
            <rect x="230" y="320" width="200" height="40" fill="#f0f0f0" rx="10"/>
            <text x="440" y="350" font-size="24" fill="#555">no desprenden luz, pero reflejan la luz que les llega.</text>
            <text x="40" y="420" font-size="24" fill="#555">e. Los cuerpos</text>
            <rect x="230" y="390" width="200" height="40" fill="#f0f0f0" rx="10"/>
            <text x="440" y="420" font-size="24" fill="#555">dejan pasar toda la luz que les llega.</text>
          </svg>`,
    labels: [
      { word: 'opacos', x: 33, y: 28.8 },
      { word: 'luminosos', x: 33, y: 44.4 },
      { word: 'artificiales', x: 73, y: 60 },
      { word: 'no luminosos', x: 33, y: 75.5 },
      { word: 'transparentes', x: 33, y: 91.1 }
    ]
};

data.push(newQuestion);
const content = 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(file, content, 'utf8');
console.log('Appended label question to luz');
