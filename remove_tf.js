const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'questions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

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
    
    const initialLen = arr.length;
    // Filter out true_false questions
    const filteredArr = arr.filter(q => q.type !== 'true_false');
    
    if (filteredArr.length !== initialLen) {
        const diff = initialLen - filteredArr.length;
        console.log(`Removed ${diff} true/false questions from ${file}`);
        
        const newContent = 'module.exports = ' + JSON.stringify(filteredArr, null, 2) + ';\n';
        fs.writeFileSync(filePath, newContent, 'utf8');
    }
}
