async function generateExamCards() {
    const sectionalContainer = document.getElementById('sectional-list');
    const fullContainer = document.getElementById('full-list');
    const pyqContainer = document.getElementById('pyq-list');

    const categories = [
        { char: '!', container: sectionalContainer, label: 'Sectional Test' },
        { char: '@', container: fullContainer, label: 'Full Test' },
        { char: '#', container: pyqContainer, label: 'PYQ' }
    ];

    for (let i = 1; i <= 50; i++) {
        for (const cat of categories) {
            // Construct the raw filename
            const rawFileName = `test${cat.char}${i}.html`;
            
            // ENCODE the filename so '#' and '@' don't break the URL
            const encodedFileName = `test${encodeURIComponent(cat.char)}${i}.html`;

            try {
                // Use the encoded name for the fetch request
                const response = await fetch(encodedFileName, { method: 'HEAD' });

                if (response.ok) {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h4>${cat.label} - ${i}</h4>
                        <p>Practice Set</p>
                        <a href="${encodedFileName}">Start Exam</a>
                    `;
                    cat.container.appendChild(card);
                }
            } catch (error) {
                // Silently skip if file not found
            }
        }
    }
}

generateExamCards();
