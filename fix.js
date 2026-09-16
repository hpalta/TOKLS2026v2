const fs = require('fs');
let file = 'questions/ciencia_t3tok1.js';
let content = fs.readFileSync(file, 'utf8');

// Parse the content
let data = require('./' + file);

data.forEach(q => {
    if (q.type === 'true_false') {
        q.options = ["Verdadero", "Falso"];
    }
});

fs.writeFileSync(file, 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Fixed true_false options');
