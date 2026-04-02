const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

function goBack() {
    window.history.back();
}