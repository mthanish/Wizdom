document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var isDrawing = false;
    var currentColor = 'black';

    canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        draw(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', function(event) {
        if (isDrawing) {
            draw(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
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

    var colorButtons = document.querySelectorAll('.color');
    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            currentColor = button.style.backgroundColor;
        });
    });
});
