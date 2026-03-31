async function generateExamCards() {
    const container = document.getElementById('exam-list');
    let count = 1;
    let keepChecking = true;

    while (keepChecking) {
        const fileName = `test${count}.html`;
        
        try {
            // Check if the file exists
            const response = await fetch(fileName, { method: 'HEAD' });

            if (response.ok) {
                // Create the Card UI
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h4>OSSC CGL ODIA SECTIONAL MOCKTEST - ${count}</h4>
                    <p>TOTAL QUESTIONS - 20</p>
                    <p>TOTAL TIME - 20 Min</p>
                    <a href="${fileName}">Start Exam</a>
                `;
                container.appendChild(card);
                count++; 
            } else {
                // If file not found (404), stop the loop
                keepChecking = false;
            }
        } catch (error) {
            // Stop if there's a network error
            keepChecking = false;
        }
        
        // Safety break to prevent infinite loops during testing
        if (count > 50) break;
    }
}

generateExamCards();
