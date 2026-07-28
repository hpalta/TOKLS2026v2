const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'questions');

function updateFile(filename, updates) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let data;
    try {
        data = eval(content.replace('module.exports =', ''));
    } catch (e) {
        console.error('Error parsing', filename);
        return;
    }
    
    let changed = false;
    for (const q of data) {
        if (updates[q.id]) {
            q.pairs = updates[q.id];
            changed = true;
        }
    }
    
    if (changed) {
        fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
        console.log('Updated', filename);
    }
}

const updates = {
    'ciencia_locomocion.js': {
        'loc_16': [
            { "id": "p16_1", "left": "Latido del corazón", "right": "Movimiento Involuntario (Corazón)" },
            { "id": "p16_2", "left": "Correr en el parque", "right": "Movimiento Voluntario (Piernas)" },
            { "id": "p16_3", "left": "Digerir el almuerzo", "right": "Movimiento Involuntario (Estómago)" },
            { "id": "p16_4", "left": "Mover los ojos", "right": "Movimiento Voluntario (Ojos)" }
        ]
    },
    'ciencia_luz.js': {
        'luz_16': [
            { "id": "p16_1", "left": "Fuego / Fogata", "right": "Luminoso por combustión" },
            { "id": "p16_2", "left": "Sol", "right": "Luminoso Natural" },
            { "id": "p16_3", "left": "Bombillo", "right": "Luminoso Artificial Eléctrico" },
            { "id": "p16_4", "left": "Láser", "right": "Luminoso Artificial Concentrado" }
        ],
        'sonido_9': [
            { "id": "p1", "left": "El Sol", "right": "Luminoso natural (Estrella)" },
            { "id": "p2", "left": "Las estrellas", "right": "Luminoso natural (Cielo nocturno)" },
            { "id": "p3", "left": "Una lámpara", "right": "Luminoso artificial (Eléctrico)" },
            { "id": "p4", "left": "Una vela encendida", "right": "Luminoso artificial (Fuego)" }
        ],
        'sonido_10': [
            { "id": "p1", "left": "El tambor", "right": "Sonido Fuerte (Percusión)" },
            { "id": "p2", "left": "La trompeta", "right": "Sonido Fuerte (Viento)" },
            { "id": "p3", "left": "La flauta dulce", "right": "Sonido Suave (Viento madera)" },
            { "id": "p4", "left": "El triángulo", "right": "Sonido Suave (Metal)" }
        ]
    },
    'sociales_recursos.js': {
        'soc_r_4': [
            { "id": "sr4_1", "left": "Petróleo y Carbón", "right": "No renovables (Combustibles)" },
            { "id": "sr4_2", "left": "Madera y Agua", "right": "Renovables (Naturaleza)" },
            { "id": "sr4_3", "left": "Oro, hierro y cobre", "right": "No renovables (Minerales)" },
            { "id": "extra_3_3", "left": "Sol y Viento", "right": "Inagotables (Energía)" }
        ]
    }
};

for (const [filename, fileUpdates] of Object.entries(updates)) {
    updateFile(filename, fileUpdates);
}
