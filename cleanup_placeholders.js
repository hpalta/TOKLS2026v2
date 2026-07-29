const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'questions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

let totalRemoved = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let arr;
    try {
        arr = eval(content.replace('module.exports =', ''));
    } catch (e) {
        console.error('Error parsing', file);
        continue;
    }
    
    let modified = false;
    
    for (const q of arr) {
        if (q.type === 'match' && q.pairs) {
            const initialPairsLength = q.pairs.length;
            q.pairs = q.pairs.filter(p => !p.left.includes('Elemento Extra') && !p.right.includes('Atributo Extra'));
            
            if (q.pairs.length !== initialPairsLength) {
                totalRemoved += (initialPairsLength - q.pairs.length);
                modified = true;
            }
        }
    }
    
    if (modified) {
        const newContent = 'module.exports = ' + JSON.stringify(arr, null, 2) + ';\n';
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Cleaned placeholders in ${file}`);
    }
}

console.log(`Total placeholder pairs removed: ${totalRemoved}`);
