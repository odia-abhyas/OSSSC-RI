async function generateExamCards() {
    // Select the three containers
    const sectionalContainer = document.getElementById('sectional-list');
    const fullContainer = document.getElementById('full-list');
    const pyqContainer = document.getElementById('pyq-list');

    // Symbols mapping
    const categories = [
        { char: '!', container: sectionalContainer, label: 'Sectional Test' },
        { char: '@', container: fullContainer, label: 'Full Test' },
        { char: '#', container: pyqContainer, label: 'PYQ' }
    ];

    // We will check up to 50 files for each category
    for (let i = 1; i <= 50; i++) {
        for (const cat of categories) {
            // Construct filename like: test!1.html, test@1.html, etc.
            const fileName = `test${cat.char}${i}.html`;

            try {
                const response = await fetch(fileName, { method: 'HEAD' });

                if (response.ok) {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h4>${cat.label} - ${i}</h4>
                        <p>Practice Set</p>
                        <a href="${fileName}">Start Exam</a>
                    `;
                    cat.container.appendChild(card);
                }
            } catch (error) {
                // If file doesn't exist, just move to the next check
            }
        }
    }
}

generateExamCards();
