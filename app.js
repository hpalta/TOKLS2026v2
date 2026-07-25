// --- TRANSLATIONS ---
const STR = {
    es: {
        back: "← Cambiar de materia",
        see_solution: "Ver solución",
        next: "Siguiente pregunta →",
        correct: "¡CORRECTO!",
        incorrect: "CASI...",
        type_true_false: "Verdadero o Falso",
        type_multiple: "Selección Múltiple",
        type_match: "Unir Conceptos",
        type_label: "Etiquetar Imagen",
        type_open: "Pregunta Abierta",
        type_order_words: "Ordenar Oración",
        badge_case: "Caso de Investigación",
        diploma_title: "¡Misión Cumplida!",
        diploma_text: "Has completado todas las preguntas de esta materia.",
        name_label: "Nombre del explorador/a:",
        name_placeholder: "Escribe tu nombre aquí",
        subjects: {
            science: "Ciencias Naturales",
            english: "Inglés",
            sociales: "Sociales",
            matematica: "Matemáticas"
        },
        desc: {
            science: "Huesos, músculos y nuestro cuerpo",
            english: "My Day & Fantastic Food",
            sociales: "Recursos y Cuidado del Entorno",
            matematica: "Medidas, geometría y datos"
        }
    },
    en: {
        back: "← Change subject",
        see_solution: "See solution",
        next: "Next question →",
        correct: "CORRECT!",
        incorrect: "ALMOST...",
        type_true_false: "True or False",
        type_multiple: "Multiple Choice",
        type_match: "Match the Concepts",
        type_label: "Label the Picture",
        type_open: "Open Question",
        type_order_words: "Order the Sentence",
        badge_case: "Investigation Case",
        diploma_title: "Mission Accomplished!",
        diploma_text: "You have completed all the questions for this subject.",
        name_label: "Explorer's name:",
        name_placeholder: "Type your name here",
        subjects: {
            science: "Science",
            english: "English"
        },
        desc: {
            science: "Bones, muscles and our body",
            english: "My Day & Fantastic Food"
        }
    }
};

// --- STATE ---
let currentSubject = null;
let currentLang = 'es';
let activeQuestions = [];
let currentIndex = 0;
let firstTryCorrectCount = 0;
let questionResults = [];
let currentQuestionState = null; // Store state for current question interactions
let studentName = '';
let selectedSubToStart = null;

function t(key, isSubject = false, isDesc = false) {
    const langObj = STR[currentLang];
    if (isSubject) return langObj.subjects[key];
    if (isDesc) return langObj.desc[key];
    return langObj[key] || key;
}

// --- UTILS ---
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// --- NAVIGATION ---
const views = {
    selector: document.getElementById('view-selector'),
    subcategories: document.getElementById('view-subcategories'),
    studentName: document.getElementById('view-student-name'),
    notebook: document.getElementById('view-notebook'),
    summary: document.getElementById('view-summary'),
    diploma: document.getElementById('view-diploma')
};

function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active', 'hidden'));
    Object.values(views).forEach(v => {
        if(v !== views[viewName]) v.classList.add('hidden');
    });
    views[viewName].classList.add('active');
}

// --- INITIALIZATION ---
function init() {
    renderSubjects();
    document.getElementById('btn-back').addEventListener('click', () => showView('subcategories'));
    document.getElementById('btn-back-to-subjects').addEventListener('click', () => showView('selector'));
    document.getElementById('btn-back-diploma').addEventListener('click', () => showView('selector'));
    document.getElementById('btn-solution').addEventListener('click', showSolution);
    document.getElementById('btn-clear-match').addEventListener('click', clearMatchLines);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-to-diploma').addEventListener('click', showDiploma);
    
    document.getElementById('btn-start-adventure').addEventListener('click', () => {
        const input = document.getElementById('student-name-input');
        if (input.value.trim() === '') {
            input.classList.add('error');
            setTimeout(() => input.classList.remove('error'), 400);
            return;
        }
        studentName = input.value.trim();
        startSubject(selectedSubToStart);
    });

    // Confetti logic respects prefers-reduced-motion
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.confettiEnabled = false;
    } else {
        window.confettiEnabled = true;
    }
}

function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    // Determine available subjects from data
    const subjectsCount = {};
    QUESTIONS_ALL.forEach(q => {
        subjectsCount[q.subject] = (subjectsCount[q.subject] || 0) + 1;
    });

    for (const [sub, count] of Object.entries(subjectsCount)) {
        if (sub === 'english') continue; // Ocultar inglés como se solicitó
        if (sub === 'matematica') continue; // Ocultar matemáticas temporalmente

        const card = document.createElement('div');
        card.className = `subject-card ${sub}`;
        // Using Spanish for selector as requested
        card.innerHTML = `
            <h2>${STR.es.subjects[sub]}</h2>
            <p>${STR.es.desc[sub]}</p>
            <span class="q-count">${count} preguntas</span>
        `;
        card.addEventListener('click', () => showSubcategories(sub));
        container.appendChild(card);
    }
}

function showSubcategories(subject) {
    currentSubject = subject;
    const container = document.getElementById('subcategories-container');
    container.innerHTML = '';
    
    document.getElementById('subcategories-title').textContent = t(subject, true);
    
    // Get unique stations
    const subjectQuestions = QUESTIONS_ALL.filter(q => q.subject === subject);
    const stationsCount = {};
    subjectQuestions.forEach(q => {
        stationsCount[q.station] = (stationsCount[q.station] || 0) + 1;
    });
    
    for (const [station, count] of Object.entries(stationsCount)) {
        const subCard = document.createElement('div');
        subCard.className = `subject-card ${currentSubject}`;
        subCard.innerHTML = `
            <h2>${station}</h2>
            <span class="q-count">${count} preguntas</span>
        `;
        subCard.onclick = () => {
            selectedSubToStart = station;
            showView('studentName');
        };
        container.appendChild(subCard);
    }
    
    // "Mezclar Todo" card
    if (Object.keys(stationsCount).length > 1) {
        const mixCard = document.createElement('div');
        mixCard.className = `subject-card ${subject}`;
        mixCard.innerHTML = `
            <h2>¡Mezclar Todo!</h2>
            <span class="q-count">${subjectQuestions.length} preguntas</span>
        `;
        mixCard.addEventListener('click', () => {
            selectedSubToStart = null;
            showView('studentName');
        });
        container.appendChild(mixCard);
    }
    
    showView('subcategories');
}

function startSubject(station) {
    loadSubject(currentSubject, station);
}

function loadSubject(subject, station) {
    currentSubject = subject;
    // English subject means English UI, otherwise Spanish
    currentLang = (subject === 'english') ? 'en' : 'es';
    
    document.getElementById('btn-back').textContent = t('back');
    document.getElementById('btn-solution').textContent = t('see_solution');
    document.getElementById('btn-next').textContent = t('next');
    document.getElementById('diploma-subject').textContent = t(subject, true);
    
    // Filter and shuffle, take only 20 questions
    let subjectQuestions = QUESTIONS_ALL.filter(q => q.subject === subject);
    if (station) {
        subjectQuestions = subjectQuestions.filter(q => q.station === station);
    }
    activeQuestions = shuffleArray(subjectQuestions).slice(0, 20);
    currentIndex = 0;
    firstTryCorrectCount = 0;
    questionResults = [];
    
    updateProgress();
    showView('notebook');
    renderCurrentQuestion();
}

function updateProgress() {
    const total = activeQuestions.length;
    document.getElementById('progress-text').textContent = `${currentIndex}/${total}`;
    const percent = total > 0 ? (currentIndex / total) * 100 : 0;
    document.getElementById('progress-bar-fill').style.width = `${percent}%`;
}

// --- RENDERING QUESTIONS ---
function renderCurrentQuestion() {
    const container = document.getElementById('question-container');
    const footer = document.getElementById('question-footer');
    const btnSolution = document.getElementById('btn-solution');
    const btnNext = document.getElementById('btn-next');
    const solutionArea = document.getElementById('solution-area');
    
    container.innerHTML = '';
    solutionArea.className = 'solution-area hidden';
    btnSolution.classList.add('hidden');
    btnNext.classList.add('hidden');
    
    if (currentIndex >= activeQuestions.length) {
        showSummary();
        return;
    }
    
    const q = activeQuestions[currentIndex];
    currentQuestionState = { interacted: false, isCorrect: false, errorCount: 0, type: q.type };
    
    // Badges
    const badges = document.createElement('div');
    badges.className = 'question-badges';
    
    const typeKey = `type_${q.type.replace('_', '')}`; // handle true_false -> type_truefalse if needed, but wait, type keys:
    const tMap = {
        'true_false': 'type_true_false',
        'multiple': 'type_multiple',
        'match': 'type_match',
        'label': 'type_label',
        'open': 'type_open',
        'order_words': 'type_order_words'
    };
    badges.innerHTML += `<span class="badge badge-type">${t(tMap[q.type])}</span>`;
    badges.innerHTML += `<span class="badge badge-station">${q.station}</span>`;
    
    if (q.context) {
        badges.innerHTML += `<span class="badge badge-case">${t('badge_case')}</span>`;
    }
    container.appendChild(badges);
    
    if (q.context) {
        const ctx = document.createElement('div');
        ctx.className = 'question-context';
        ctx.textContent = q.context;
        container.appendChild(ctx);
    }
    
    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.textContent = q.prompt;
    container.appendChild(prompt);
    if (q.illustration) {
        const ill = document.createElement('div');
        ill.className = 'question-illustration';
        ill.innerHTML = q.illustration;
        container.appendChild(ill);
    }
    
    // Delegate rendering
    const qBody = document.createElement('div');
    if (q.type === 'true_false' || q.type === 'multiple') {
        renderMultiple(q, qBody);
    } else if (q.type === 'match') {
        renderMatch(q, qBody);
    } else if (q.type === 'label') {
        renderLabel(q, qBody);
    } else if (q.type === 'open') {
        renderOpen(q, qBody);
    } else if (q.type === 'order_words') {
        renderOrderWords(q, qBody);
    }
    container.appendChild(qBody);
}

function enableSolution() {
    if (!currentQuestionState.interacted) {
        currentQuestionState.interacted = true;
        document.getElementById('btn-solution').classList.remove('hidden');
        if (activeQuestions[currentIndex].type === 'match') {
            document.getElementById('btn-clear-match').classList.remove('hidden');
        }
    }
}

function renderMultiple(q, container) {
    const list = document.createElement('div');
    list.className = 'options-list';
    
    const opts = shuffleArray(q.options);
    currentQuestionState.buttons = [];
    
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => {
            // Unselect others
            currentQuestionState.buttons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentQuestionState.isCorrect = (opt === q.correctAnswer);
            enableSolution();
        };
        list.appendChild(btn);
        currentQuestionState.buttons.push(btn);
    });
    container.appendChild(list);
}

function renderMatch(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'match-container';
    
    const svgOverlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgOverlay.setAttribute("class", "match-svg-overlay");
    wrap.appendChild(svgOverlay);

    const leftCol = document.createElement('div');
    leftCol.className = 'match-column';
    const rightCol = document.createElement('div');
    rightCol.className = 'match-column';
    
    let leftItems = shuffleArray(q.pairs.map(p => ({ text: p.left, matchId: p.id, side: 'left' })));
    let rightItems = shuffleArray(q.pairs.map(p => ({ text: p.right, matchId: p.id, side: 'right' })));
    
    currentQuestionState.selectedItem = null;
    let matchedCount = 0;
    currentQuestionState.totalMatches = q.pairs.length;
    currentQuestionState.elements = [];
    
    const handleSelect = (el, item) => {
        if (el.classList.contains('matched')) return;
        
        if (!currentQuestionState.selectedItem) {
            currentQuestionState.selectedItem = { el, item };
            el.classList.add('selected');
        } else {
            const prev = currentQuestionState.selectedItem;
            // Prevent same side click
            if (prev.item.side === item.side) {
                prev.el.classList.remove('selected');
                currentQuestionState.selectedItem = { el, item };
                el.classList.add('selected');
                return;
            }
            
            // Check if it's a correct pair
            const isPairCorrect = (prev.item.matchId === item.matchId);
            if (!isPairCorrect) {
                currentQuestionState.errorCount++;
            }
            
            // Allow the connection regardless
            el.classList.add('matched');
            prev.el.classList.add('matched');
            el.classList.remove('selected');
            prev.el.classList.remove('selected');
            matchedCount++;
            
            // Draw SVG line
            const rect1 = el.getBoundingClientRect();
            const rect2 = prev.el.getBoundingClientRect();
            const parentRect = svgOverlay.getBoundingClientRect();
            
            let x1, y1, x2, y2;
            if (item.side === 'right') {
                x1 = rect2.right - parentRect.left;
                y1 = rect2.top + rect2.height / 2 - parentRect.top;
                x2 = rect1.left - parentRect.left;
                y2 = rect1.top + rect1.height / 2 - parentRect.top;
            } else {
                x1 = rect1.right - parentRect.left;
                y1 = rect1.top + rect1.height / 2 - parentRect.top;
                x2 = rect2.left - parentRect.left;
                y2 = rect2.top + rect2.height / 2 - parentRect.top;
            }
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke", "#999"); // Neutral color while guessing
            line.setAttribute("stroke-width", "4");
            line.setAttribute("stroke-linecap", "round");
            line.dataset.isCorrect = isPairCorrect;
            // Also store references to the elements to color them later
            line.dataset.el1 = prev.item.text;
            line.dataset.el2 = item.text;
            
            svgOverlay.appendChild(line);
            
            // Store matched elements for solution reveal
            el.dataset.isCorrect = isPairCorrect;
            prev.el.dataset.isCorrect = isPairCorrect;
            
            if (matchedCount === q.pairs.length) {
                currentQuestionState.isCorrect = (currentQuestionState.errorCount === 0);
                enableSolution();
            }
            currentQuestionState.selectedItem = null;
        }
    };
    
    leftItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'match-item';
        el.textContent = item.text;
        el.onclick = () => handleSelect(el, item);
        leftCol.appendChild(el);
    });
    rightItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'match-item';
        el.textContent = item.text;
        el.onclick = () => handleSelect(el, item);
        rightCol.appendChild(el);
    });
    
    wrap.appendChild(leftCol);
    wrap.appendChild(rightCol);
    container.appendChild(wrap);
    
    // For match, we might want to let them see solution even if they give up
    currentQuestionState.giveUpBtn = document.createElement('button');
    currentQuestionState.giveUpBtn.className = 'btn-secondary';
    currentQuestionState.giveUpBtn.style.marginTop = '15px';
    currentQuestionState.giveUpBtn.textContent = "¿Te rendiste? Ver respuesta";
    currentQuestionState.giveUpBtn.onclick = () => {
        currentQuestionState.isCorrect = false;
        enableSolution();
    };
    container.appendChild(currentQuestionState.giveUpBtn);
}

function renderLabel(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'label-picture-container';
    
    const wordBank = document.createElement('div');
    wordBank.className = 'label-word-bank';
    
    const svgWrap = document.createElement('div');
    svgWrap.className = 'label-picture-svg-wrapper';
    
    // Create aspect ratio wrapper if provided, but let's rely on standard viewBox
    svgWrap.innerHTML = q.svg;
    
    currentQuestionState.selectedWord = null;
    currentQuestionState.dropzones = [];
    currentQuestionState.placedCount = 0;
    currentQuestionState.totalWords = q.labels.length;
    
    const words = shuffleArray(q.labels.map(l => l.word));
    
    const handleWordSelect = (el, word) => {
        if(el.classList.contains('used')) return;
        if(currentQuestionState.selectedWord) {
            currentQuestionState.selectedWord.el.classList.remove('selected');
        }
        currentQuestionState.selectedWord = { el, word };
        el.classList.add('selected');
    };
    
    words.forEach(w => {
        const chip = document.createElement('div');
        chip.className = 'word-chip';
        chip.textContent = w;
        chip.onclick = () => handleWordSelect(chip, w);
        wordBank.appendChild(chip);
    });
    
    q.labels.forEach(lbl => {
        const dz = document.createElement('div');
        dz.className = 'dropzone';
        dz.style.left = `${lbl.x}%`;
        dz.style.top = `${lbl.y}%`;
        dz.dataset.word = lbl.word;
        
        dz.onclick = () => {
            if(dz.classList.contains('filled')) return; // already correct
            if(!currentQuestionState.selectedWord) return;
            
            const selected = currentQuestionState.selectedWord;
            if (selected.word === lbl.word) {
                dz.textContent = selected.word;
                dz.classList.add('filled', 'correct');
                selected.el.classList.remove('selected');
                selected.el.classList.add('used');
                currentQuestionState.selectedWord = null;
                currentQuestionState.placedCount++;
                
                if(currentQuestionState.placedCount === currentQuestionState.totalWords) {
                    currentQuestionState.isCorrect = true;
                    enableSolution();
                }
            } else {
                currentQuestionState.errorCount++;
                dz.classList.add('incorrect');
                setTimeout(() => dz.classList.remove('incorrect'), 400);
            }
        };
        currentQuestionState.dropzones.push(dz);
        svgWrap.appendChild(dz);
    });
    
    wrap.appendChild(wordBank);
    wrap.appendChild(svgWrap);
    container.appendChild(wrap);
    
    currentQuestionState.giveUpBtn = document.createElement('button');
    currentQuestionState.giveUpBtn.className = 'btn-secondary';
    currentQuestionState.giveUpBtn.style.marginTop = '15px';
    currentQuestionState.giveUpBtn.textContent = "¿Te rendiste? Ver respuesta";
    currentQuestionState.giveUpBtn.onclick = () => {
        currentQuestionState.isCorrect = false;
        enableSolution();
    };
    container.appendChild(currentQuestionState.giveUpBtn);
}

function renderOpen(q, container) {
    const ta = document.createElement('textarea');
    ta.className = 'open-textarea';
    ta.placeholder = "...";
    
    ta.addEventListener('input', () => {
        if (ta.value.trim().length >= 10) {
            enableSolution();
        }
    });
    
    container.appendChild(ta);
}

function renderOrderWords(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'order-words-container';

    // Top: empty slots
    const slotsWrap = document.createElement('div');
    slotsWrap.className = 'order-slots-wrap';
    
    // Bottom: word bank
    const bankWrap = document.createElement('div');
    bankWrap.className = 'order-bank-wrap';
    
    const words = q.words; // Array of correct words in order
    const shuffledWords = shuffleArray(words);
    
    currentQuestionState.slots = [];
    currentQuestionState.bankChips = [];
    currentQuestionState.currentOrder = []; // what user has filled
    
    // Build slots
    words.forEach((_, idx) => {
        const slot = document.createElement('div');
        slot.className = 'order-slot';
        slot.dataset.index = idx;
        
        // Allow removing word from slot by clicking it
        slot.onclick = () => {
            if (slot.textContent) {
                const wordObj = currentQuestionState.currentOrder[idx];
                if (wordObj) {
                    // Return to bank
                    wordObj.chip.classList.remove('used');
                    slot.textContent = '';
                    slot.classList.remove('filled');
                    currentQuestionState.currentOrder[idx] = null;
                }
            }
        };
        currentQuestionState.slots.push(slot);
        slotsWrap.appendChild(slot);
        currentQuestionState.currentOrder.push(null);
    });

    const checkComplete = () => {
        const allFilled = currentQuestionState.currentOrder.every(x => x !== null);
        if (allFilled) {
            // Check correctness
            let correct = true;
            for(let i=0; i<words.length; i++){
                if(currentQuestionState.currentOrder[i].word !== words[i]) correct = false;
            }
            if (!correct) currentQuestionState.errorCount++;
            currentQuestionState.isCorrect = correct;
            enableSolution();
        }
    };

    // Build Bank
    shuffledWords.forEach((word) => {
        const chip = document.createElement('div');
        chip.className = 'word-chip bank-chip';
        chip.textContent = word;
        
        chip.onclick = () => {
            if (chip.classList.contains('used')) return; // already in a slot
            
            // Find first empty slot
            const emptyIdx = currentQuestionState.currentOrder.findIndex(x => x === null);
            if (emptyIdx !== -1) {
                currentQuestionState.currentOrder[emptyIdx] = { word, chip };
                currentQuestionState.slots[emptyIdx].textContent = word;
                currentQuestionState.slots[emptyIdx].classList.add('filled');
                chip.classList.add('used');
                
                checkComplete();
            }
        };
        currentQuestionState.bankChips.push(chip);
        bankWrap.appendChild(chip);
    });
    
    wrap.appendChild(slotsWrap);
    wrap.appendChild(bankWrap);
    container.appendChild(wrap);
    
    // Give up button
    currentQuestionState.giveUpBtn = document.createElement('button');
    currentQuestionState.giveUpBtn.className = 'btn-secondary';
    currentQuestionState.giveUpBtn.style.marginTop = '15px';
    currentQuestionState.giveUpBtn.textContent = "¿Te rendiste? Ver respuesta";
    currentQuestionState.giveUpBtn.onclick = () => {
        currentQuestionState.isCorrect = false;
        enableSolution();
    };
    container.appendChild(currentQuestionState.giveUpBtn);
}

function clearMatchLines() {
    const svg = document.querySelector('.match-svg-overlay');
    if (svg) svg.innerHTML = '';
    
    document.querySelectorAll('.match-item').forEach(item => {
        item.classList.remove('selected', 'matched');
        delete item.dataset.matchedWith;
        delete item.dataset.isCorrect;
    });
    
    currentQuestionState.selectedLeft = null;
    currentQuestionState.selectedRight = null;
    currentQuestionState.errorCount = 0;
    currentQuestionState.isCorrect = true;
    currentQuestionState.interacted = false;
    
    document.getElementById('btn-solution').classList.add('hidden');
    document.getElementById('btn-clear-match').classList.add('hidden');
}

// --- SOLUTION & NEXT ---
function showSolution() {
    document.getElementById('btn-solution').classList.add('hidden');
    document.getElementById('btn-clear-match').classList.add('hidden');
    const btnNext = document.getElementById('btn-next');
    btnNext.classList.remove('hidden');
    
    const q = activeQuestions[currentIndex];
    const area = document.getElementById('solution-area');
    area.innerHTML = '';
    area.className = 'solution-area'; // reset
    
    // Track score on evaluation
    if (currentQuestionState.isCorrect && currentQuestionState.errorCount === 0) {
        firstTryCorrectCount++;
    }
    
    if (q.type === 'true_false' || q.type === 'multiple') {
        currentQuestionState.buttons.forEach(b => {
            b.disabled = true; // Lock interaction after evaluation
            if (b.textContent === q.correctAnswer) b.classList.add('correct-reveal');
            else if (b.classList.contains('selected')) b.classList.add('incorrect-reveal');
        });
    } else if (q.type === 'match' || q.type === 'label' || q.type === 'order_words') {
        if(currentQuestionState.giveUpBtn) currentQuestionState.giveUpBtn.classList.add('hidden');
        
        if (q.type === 'match') {
            const svg = document.querySelector('.match-svg-overlay');
            if (svg) {
                const lines = svg.querySelectorAll('line');
                lines.forEach(l => {
                    const isCorrect = l.dataset.isCorrect === 'true';
                    l.setAttribute('stroke', isCorrect ? 'var(--correct-color)' : 'var(--incorrect-color)');
                });
            }
            const items = document.querySelectorAll('.match-item');
            items.forEach(el => {
                if (el.dataset.isCorrect === 'true') {
                    el.classList.add('correct-reveal');
                } else if (el.classList.contains('matched')) {
                    el.classList.add('incorrect-reveal');
                }
            });
        }
    }
    
    if (q.type === 'open') {
        area.classList.add('neutral');
        area.innerHTML = `
            <div class="solution-status status-neutral">Posible Respuesta / Possible Answer</div>
            <p>${q.explain}</p>
        `;
    } else {
        const isCorrect = currentQuestionState.isCorrect;
        const statusClass = isCorrect ? 'status-correct' : 'status-incorrect';
        const statusText = isCorrect ? t('correct') : t('incorrect');
        const bgClass = isCorrect ? 'correct' : 'incorrect';
        
        area.classList.add(bgClass);
        let html = `<div class="solution-status ${statusClass}">${statusText}</div>`;
        
        if (q.correctAnswer && (q.type === 'true_false' || q.type === 'multiple')) {
            html += `<p><strong>${q.correctAnswer}</strong></p>`;
        } else if (q.type === 'match') {
            html += `<div style="margin: 15px 0; text-align: left; display: inline-block;">`;
            q.pairs.forEach(p => {
                html += `<p style="margin-bottom: 5px;"><strong>${p.left}</strong> → ${p.right}</p>`;
            });
            html += `</div>`;
        }
        
        if (q.explain) {
            html += `<p style="margin-top: 10px;">${q.explain}</p>`;
        }
        area.innerHTML = html;
    }
    
    // Auto scroll down to next button
    setTimeout(() => {
        btnNext.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
}

function nextQuestion() {
    // Record result before moving
    if (currentQuestionState) {
        const isCorrectOnFirstTry = currentQuestionState.isCorrect && currentQuestionState.errorCount === 0;
        let correctAnswerText = '';
        const q = activeQuestions[currentIndex];
        
        if (q.type === 'multiple' || q.type === 'true_false') {
            correctAnswerText = q.correctAnswer;
        } else if (q.type === 'match') {
            correctAnswerText = q.pairs.map(p => `${p.left} = ${p.right}`).join(', ');
        } else if (q.type === 'label') {
            correctAnswerText = q.labels.map(l => l.word).join(', ');
        } else if (q.type === 'order_words') {
            correctAnswerText = q.words.join(' ');
        }
        
        questionResults.push({
            prompt: q.prompt,
            isCorrect: isCorrectOnFirstTry,
            correctAnswer: correctAnswerText
        });
    }

    currentIndex++;
    if (currentIndex >= activeQuestions.length) {
        showSummary();
    } else {
        updateProgress();
        renderCurrentQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showSummary() {
    showView('summary');
    const container = document.getElementById('summary-container');
    container.innerHTML = '';
    
    questionResults.forEach((res, index) => {
        const item = document.createElement('div');
        item.className = 'summary-item';
        
        const icon = document.createElement('div');
        icon.className = 'summary-icon';
        icon.textContent = res.isCorrect ? '✅' : '❌';
        
        const details = document.createElement('div');
        details.className = 'summary-details';
        
        const qText = document.createElement('div');
        qText.className = 'summary-question';
        qText.textContent = `${index + 1}. ${res.prompt}`;
        
        const ansText = document.createElement('div');
        ansText.className = res.isCorrect ? 'summary-answer' : 'summary-answer wrong-answer';
        ansText.innerHTML = `<strong>Respuesta correcta:</strong> ${res.correctAnswer}`;
        
        details.appendChild(qText);
        details.appendChild(ansText);
        
        item.appendChild(icon);
        item.appendChild(details);
        container.appendChild(item);
    });
}
// --- DIPLOMA ---
function showDiploma() {
    showView('diploma');
    const qCount = activeQuestions.length;
    const score = Math.round((firstTryCorrectCount / qCount) * 100);
    
    document.getElementById('diploma-subject').textContent = selectedSubToStart || t(currentSubject, true); 
    
    const titleEl = document.getElementById('diploma-title');
    titleEl.textContent = `¡Misión Cumplida, ${studentName}!`;
    
    document.getElementById('diploma-score-percent').textContent = `${score}%`;
    const scoreMessage = document.getElementById('diploma-score-message');
    
    if (score === 100) {
        scoreMessage.textContent = "¡Excelente! Eres un genio perfecto. 🏆";
        scoreMessage.style.color = "#FFD700"; // Gold
    } else if (score >= 80) {
        scoreMessage.textContent = "¡Muy bien hecho! Casi perfecto. 🌟";
        scoreMessage.style.color = "#32CD32"; // Green
    } else if (score >= 60) {
        scoreMessage.textContent = "¡Buen trabajo! Pero podemos mejorar un poco. 👍";
        scoreMessage.style.color = "#FFA500"; // Orange
    } else {
        scoreMessage.textContent = "¡Sigue practicando! La próxima vez te irá mejor. 💪";
        scoreMessage.style.color = "#FF4500"; // Red
    }
    
    if (window.confettiEnabled) {
        shootConfetti();
    }
}

// Minimal Confetti
function shootConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
    
    for(let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2 + (Math.random() * 200),
            r: Math.random() * 6 + 4,
            dx: Math.random() * 20 - 10,
            dy: Math.random() * -20 - 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleInc: (Math.random() * 0.07) + 0.05,
            tiltAngle: 0
        });
    }
    
    let animationId;
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        for(let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.tiltAngle += p.tiltAngleInc;
            p.y += (Math.cos(p.tiltAngle) + 1 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle) * 2 + p.dx;
            p.dy += 0.2; // gravity
            p.y += p.dy;
            
            if (p.y <= canvas.height) active = true;
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
        }
        if (active) {
            animationId = requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    render();
    
    // Stop after 4 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 4000);
}

// Bootstrap
window.onload = init;
