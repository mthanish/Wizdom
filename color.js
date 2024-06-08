document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var isDrawing = false;
    var currentColor = 'black';
    var currentTool = 'draw';
    var currentStencil = null;

    canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        if (currentTool === 'draw') {
            draw(event.offsetX, event.offsetY);
        } else if (currentTool === 'stencil' && currentStencil) {
            drawStencil(event.offsetX, event.offsetY, currentStencil);
        }
    });

    canvas.addEventListener('mousemove', function(event) {
        if (isDrawing && currentTool === 'draw') {
            draw(event.offsetX, event.offsetY);
        } else if (isDrawing && currentTool === 'erase') {
            erase(event.offsetX, event.offsetY);
        }
    });

    canvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });

    function draw(x, y) {
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fillStyle = currentColor;
        context.fill();
    }

    function drawStencil(x, y, shape) {
        context.fillStyle = currentColor;
        context.beginPath();
        if (shape === 'circle') {
            context.arc(x, y, 30, 0, 2 * Math.PI);
        } else if (shape === 'square') {
            context.rect(x - 30, y - 30, 60, 60);
        } else if (shape === 'star') {
            drawStar(x, y, 5, 30, 15);
        }
        context.fill();
    }

    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        context.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            context.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            context.lineTo(x, y);
            rot += step;
        }
        context.lineTo(cx, cy - outerRadius);
        context.closePath();
    }

    function erase(x, y) {
        context.clearRect(x - 10, y - 10, 20, 20);
    }

    function loadTemplate(template) {
        var img = new Image();
        img.onload = function() {
            context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing template
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = template;
    }

    var colorButtons = document.querySelectorAll('.color');
    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            currentColor = button.style.backgroundColor;
            currentTool = 'draw';
        });
    });

    var stencilButtons = document.querySelectorAll('.stencil');
    stencilButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            currentStencil = button.getAttribute('data-shape');
            currentTool = 'stencil';
        });
    });

    var eraserButton = document.getElementById('eraser');
    eraserButton.addEventListener('click', function() {
        currentTool = 'erase';
    });
    
});
