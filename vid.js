document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    prevBtn.addEventListener('click', () => {
        // Replace 'previous-page.html' with the URL of the previous page
        window.location.href = 'previous-page.html';
    });

    nextBtn.addEventListener('click', () => {
        // Replace 'next-page.html' with the URL of the next page
        window.location.href = 'next-page.html';
    });
});
