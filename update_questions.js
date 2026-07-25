const fs = require('fs');
const path = require('path');

const specificUpdates = {
  // ciencia_luz.js
  'luz_1': { type: 'multiple', val: 'Su sonido y temperatura' },
  'luz_2': { type: 'match', val: { id: 'p2_4', left: 'Cuerpos translúcidos', right: 'Dejan pasar poca luz.' } },
  'luz_3': { type: 'multiple', val: 'Un bombillo' },
  'luz_5': { type: 'multiple', val: 'Tela muy delgada' },
  'luz_6': { type: 'multiple', val: 'Sí, porque la cortina transparente bloquea el calor' },
  'luz_7': { type: 'match', val: { id: 'p7_4', left: 'Espejo', right: 'Cuerpo reflectante' } },
  'luz_8': { type: 'multiple', val: 'Cuerpos invisibles' },
  'luz_10': { type: 'multiple', val: 'Cuerpos opacos' },
  'luz_11': { type: 'multiple', val: 'Es una estrella que genera luz' },
  'luz_12': { type: 'match', val: { id: 'p12_4', left: 'Cuerpo Luminoso', right: 'Emite su propia luz' } },
  'luz_13': { type: 'multiple', val: 'Una fuente de energía térmica' },
  'luz_14': { type: 'multiple', val: 'Transparente perfecto' },
  'luz_16': { type: 'match', val: { id: 'p16_4', left: 'Láser', right: 'Luminoso Artificial' } },
  'luz_17': { type: 'multiple', val: 'La convierte en sonido' },
  'luz_18': { type: 'multiple', val: 'Cuerpos oscuros' },
  'luz_19': { type: 'match', val: { id: 'p19_4', left: 'Espejo', right: 'Reflectante' } },
  'luz_20': { type: 'multiple', val: 'Electricidad' },

  // ciencia_sistemas.js
  'sis_1': { type: 'multiple', val: 'Los músculos de los ojos' },
  'sis_2': { type: 'match', val: { id: 'p2_4', left: 'Nivel 2', right: 'Tejido' } },
  'sis_3': { type: 'multiple', val: 'Un Músculo' },
  'sis_5': { type: 'multiple', val: 'Sistema Circulatorio' },
  'sis_6': { type: 'multiple', val: 'El corazón' },
  'sis_7': { type: 'match', val: { id: 'p7_4', left: 'Corazón', right: 'Sistema Circulatorio' } },
  'sis_8': { type: 'multiple', val: 'Bombear la sangre por todo el cuerpo' },
  'sis_10': { type: 'multiple', val: 'Es un tejido' },
  'sis_11': { type: 'multiple', val: 'Están en el cerebro' },
  'sis_12': { type: 'match', val: { id: 'p12_4', left: 'Pensar en un problema', right: 'Sistema Nervioso' } },
  'sis_13': { type: 'multiple', val: 'Al cerebro' },
  'sis_14': { type: 'multiple', val: 'Nitrógeno' },
  'sis_16': { type: 'match', val: { id: 'p16_4', left: 'Tejido muscular', right: 'Tejido' } },
  'sis_17': { type: 'multiple', val: 'Las arterias' },
  'sis_18': { type: 'multiple', val: 'Solo el sistema respiratorio es independiente' },
  'sis_19': { type: 'match', val: { id: 'p19_4', left: 'Corazón', right: 'Bomba que impulsa la sangre' } },
  'sis_20': { type: 'multiple', val: 'Los huesos' },

  // ciencia_locomocion.js
  'loc_1': { type: 'multiple', val: 'Producir sangre' },
  'loc_2': { type: 'match', val: { id: 'p2_4', left: 'Músculo del ojo', right: 'Músculo Ocular' } },
  'loc_3': { type: 'multiple', val: 'Músculo Involuntario Rígido' },
  'loc_5': { type: 'multiple', val: 'Músculo Nervioso' },
  'loc_6': { type: 'multiple', val: 'No, solo funcionan si estamos despiertos' },
  'loc_7': { type: 'match', val: { id: 'p7_4', left: 'Músculo Ocular', right: 'Movimiento rápido' } },
  'loc_8': { type: 'multiple', val: 'Músculo Óseo' },
  'loc_10': { type: 'multiple', val: 'La digestión' },
  'loc_11': { type: 'multiple', val: 'Digestivos' },
  'loc_12': { type: 'match', val: { id: 'p12_4', left: 'Músculo respiratorio', right: 'Ayuda a inhalar aire' } },
  'loc_13': { type: 'multiple', val: 'El sistema circulatorio' },
  'loc_14': { type: 'multiple', val: 'Voluntarios (lisos)' },
  'loc_16': { type: 'match', val: { id: 'p16_4', left: 'Mover los ojos', right: 'Sí lo controlo' } },
  'loc_17': { type: 'multiple', val: 'A la piel' },
  'loc_18': { type: 'multiple', val: 'Sí, flotaríamos' },
  'loc_19': { type: 'match', val: { id: 'p19_4', left: 'Tendón', right: 'Une el músculo al hueso' } },
  'loc_20': { type: 'multiple', val: 'No dormir nunca' },
  
  // english_1.js
  'eng_1': { type: 'multiple', val: 'I am ten years old.' },
  'eng_5': { type: 'multiple', val: 'Apple' },
  'eng_7': { type: 'multiple', val: 'He is running.' },
  'eng_11': { type: 'multiple', val: 'How is time?' },
  'eng_13': { type: 'multiple', val: 'many' },
  'eng_16': { type: 'multiple', val: 'I watch TV.' },
  'eng_18': { type: 'multiple', val: 'a' },
  
  'eng_3': { type: 'match', val: { id: 'f7', left: 'Apple', right: 'Red or green fruit' } },
  'eng_10': { type: 'match', val: { id: 'e4', left: 'Cheese', right: 'Queso' } },
  'eng_15': { type: 'match', val: { id: 'f7_2', left: 'Juice', right: 'Jugo' } },
  'eng_19': { type: 'match', val: { id: 'r4', left: 'Eat dinner', right: 'In the evening' } },
  
  // english_2.js
  'eng_22': { type: 'multiple', val: 'I play soccer.' },
  'eng_26': { type: 'multiple', val: 'Apple' },
  'eng_28': { type: 'multiple', val: "It's two o'clock." },
  'eng_29': { type: 'multiple', val: 'I has some cheese.' },
  'eng_31': { type: 'multiple', val: "It's an apple." },
  'eng_32': { type: 'multiple', val: 'Take a bath' },
  'eng_37': { type: 'multiple', val: 'A banana' },
  'eng_39': { type: 'multiple', val: "One o'clock" },
  
  'eng_23': { type: 'match', val: { id: 'g3_new', left: 'We have ______ rice.', right: 'some (uncountable)' } },
  'eng_30': { type: 'match', val: { id: 'c4', left: 'Strawberry', right: 'Red' } },
  'eng_36': { type: 'match', val: { id: 'r7', left: 'Eat breakfast', right: 'Desayunar' } },
  'eng_40': { type: 'match', val: { id: 'g5', left: 'He has...', right: '...some juice.' } }
};

const qDir = path.join(__dirname, 'questions');
const files = fs.readdirSync(qDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(qDir, file);
  let data = require(filePath);
  
  data.forEach((q, index) => {
    let update = specificUpdates[q.id];
    if (q.type === 'multiple') {
      while (q.options.length < 4) {
        if (update && update.type === 'multiple' && !q.options.includes(update.val)) {
            q.options.push(update.val);
        } else {
            q.options.push(`Distractor ${q.options.length + 1}`);
        }
      }
      while (q.options.length > 4) {
          q.options.pop();
      }
    } else if (q.type === 'match') {
      while (q.pairs.length < 4) {
        if (update && update.type === 'match') {
            q.pairs.push(update.val);
            update = null; // consume it
        } else {
            q.pairs.push({ id: `extra_${index}_${q.pairs.length}`, left: `Elemento Extra ${q.pairs.length + 1}`, right: `Atributo Extra ${q.pairs.length + 1}` });
        }
      }
      while (q.pairs.length > 4) {
          q.pairs.pop();
      }
    }
  });

  const content = 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Update script finished');
