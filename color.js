const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

function createColoringCanvas(rows, columns) {
    const coloringContainer = document.getElementById('coloring-container');
    const canvas = document.createElement('table');
    canvas.classList.add('coloring-canvas');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('click', () => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                cell.style.backgroundColor = randomColor;
            });
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }

    coloringContainer.appendChild(canvas);
}

// Create a coloring canvas with 10 rows and
