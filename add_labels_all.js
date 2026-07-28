const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'questions');

// Helper to generate the SVG and labels
function createLabelQuestion(id, subject, station, promptText, title, sentences, words, explainText) {
    const rectX = 550;
    const rectW = 200;
    const rectH = 40;
    // Calculate percentage x for labels (center of rect relative to 1000)
    const labelX = ((rectX + rectW / 2) / 1000) * 100;
    
    let svg = `<svg viewBox="0 0 1000 450" width="100%" height="100%" style="background:#fff; border-radius:15px; font-family: 'Comic Sans MS', sans-serif;">\n`;
    svg += `  <text x="40" y="50" font-size="28" font-weight="bold" fill="#333">${title}</text>\n`;
    
    const yOffsets = [110, 180, 250, 320, 390];
    const rectYOffsets = [80, 150, 220, 290, 360];
    const letters = ['a.', 'b.', 'c.', 'd.', 'e.'];
    
    let labels = [];
    
    for (let i = 0; i < 5; i++) {
        svg += `  <text x="40" y="${yOffsets[i]}" font-size="24" fill="#555">${letters[i]} ${sentences[i]}</text>\n`;
        svg += `  <rect x="${rectX}" y="${rectYOffsets[i]}" width="${rectW}" height="${rectH}" fill="#f0f0f0" rx="10"/>\n`;
        
        let labelY = ((rectYOffsets[i] + rectH / 2) / 450) * 100;
        labels.push({
            word: words[i],
            x: labelX,
            y: parseFloat(labelY.toFixed(1))
        });
    }
    
    svg += `</svg>`;
    
    return {
        id: id,
        type: 'label',
        subject: subject,
        station: station,
        prompt: promptText,
        svg: svg,
        labels: labels,
        explain: explainText
    };
}

const definitions = [
    {
        file: 'ciencia_locomocion.js',
        id: 'loc_label_1', subject: 'science', station: 'Locomoción',
        prompt: 'Completa las afirmaciones (Toca una palabra y luego el espacio en blanco).',
        title: 'Completa las afirmaciones sobre los músculos:',
        sentences: [
            'El corazón está formado por el músculo',
            'A los huesos se une el músculo',
            'Los órganos internos tienen músculo',
            'La contracción muscular permite el',
            'Los músculos del estómago se mueven de forma'
        ],
        words: ['Cardíaco', 'Esquelético', 'Liso', 'Movimiento', 'Involuntaria'],
        explain: "Diferentes tipos de músculos tienen diferentes funciones y ubicaciones en el cuerpo."
    },
    {
        file: 'ciencia_sistemas.js',
        id: 'sis_label_1', subject: 'science', station: 'Sistemas Digestivo y Respiratorio',
        prompt: 'Completa el recorrido de los alimentos (Toca una palabra y el espacio).',
        title: 'Completa sobre el sistema digestivo:',
        sentences: [
            'La digestión de los alimentos comienza en la',
            'El bolo alimenticio baja a través del',
            'Allí se mezcla con los jugos en el',
            'Los nutrientes se absorben en el intestino',
            'Los desechos sólidos van al intestino'
        ],
        words: ['Boca', 'Esófago', 'Estómago', 'Delgado', 'Grueso'],
        explain: "El sistema digestivo procesa los alimentos paso a paso."
    },
    {
        file: 'english_1.js',
        id: 'eng1_label_1', subject: 'english', station: 'Time',
        prompt: 'Complete the sentences (Tap a word, then the blank space).',
        title: 'Complete the sentences about parts of the day:',
        sentences: [
            'I wake up and eat breakfast in the',
            'We have lunch exactly at',
            'I do my homework in the',
            'We eat dinner together in the',
            'I go to sleep late at'
        ],
        words: ['Morning', 'Noon', 'Afternoon', 'Evening', 'Night'],
        explain: "These are the different parts of the day."
    },
    {
        file: 'english_2.js',
        id: 'eng2_label_1', subject: 'english', station: 'Routine',
        prompt: 'Complete the daily routine (Tap a word, then the blank).',
        title: 'Complete the daily routine verbs:',
        sentences: [
            'Early in the morning, I wake',
            'Then, I use a toothbrush to brush my',
            'Next, I sit at the table to eat',
            'After that, I take my bag and go to',
            'Finally, at night I go to'
        ],
        words: ['Up', 'Teeth', 'Breakfast', 'School', 'Sleep'],
        explain: "Common verbs and nouns for daily routines."
    },
    {
        file: 'matematicas_1.js',
        id: 'mat_label_1', subject: 'matematica', station: 'Medidas Antiguas',
        prompt: 'Completa con las partes del cuerpo (Toca una palabra y el espacio).',
        title: 'Partes del cuerpo usadas para medir:',
        sentences: [
            'Para medir distancias usaban pasos con el',
            'Para longitudes cortas usaban la',
            'Desde el codo hasta los dedos es un',
            'Abrir ambos brazos extendidos formaba una',
            'Del pulgar al meñique estirados es una'
        ],
        words: ['Pie', 'Mano', 'Codo', 'Braza', 'Cuarta'],
        explain: "En la antigüedad se usaban las partes del cuerpo como unidades de medida."
    },
    {
        file: 'sociales_paisaje.js',
        id: 'soc_p_label_1', subject: 'sociales', station: 'Paisaje',
        prompt: 'Completa las afirmaciones sobre el paisaje.',
        title: 'Completa sobre los tipos de paisaje:',
        sentences: [
            'Los ríos y montañas son elementos',
            'Las casas y carreteras son elementos',
            'Un lugar con muchas montañas es un paisaje',
            'Un lugar plano y extenso se llama',
            'La intervención humana crea el paisaje'
        ],
        words: ['Naturales', 'Culturales', 'Montañoso', 'Llanura', 'Cultural'],
        explain: "Los paisajes tienen componentes creados por la naturaleza o por el hombre."
    },
    {
        file: 'sociales_recursos.js',
        id: 'soc_r_label_1', subject: 'sociales', station: 'Recursos Naturales y Contaminación',
        prompt: 'Completa sobre los recursos y el medio ambiente.',
        title: 'Completa sobre los recursos naturales:',
        sentences: [
            'Los recursos que se recuperan rápido son',
            'Los recursos que pueden agotarse son no',
            'El agua dulce es un recurso muy',
            'El humo y la basura causan',
            'Es nuestra responsabilidad cuidar el medio'
        ],
        words: ['Renovables', 'Renovables', 'Importante', 'Contaminación', 'Ambiente'],
        explain: "Debemos ser conscientes del uso de los recursos para no contaminar."
    }
];

for (const def of definitions) {
    const filePath = path.join(questionsDir, def.file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Extract array
        let dataArray = eval(content.replace('module.exports =', ''));
        
        const newQuestion = createLabelQuestion(
            def.id, def.subject, def.station, def.prompt, def.title,
            def.sentences, def.words, def.explain
        );
        
        dataArray.push(newQuestion);
        const newContent = 'module.exports = ' + JSON.stringify(dataArray, null, 2) + ';\n';
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Appended label question to ' + def.file);
    }
}
