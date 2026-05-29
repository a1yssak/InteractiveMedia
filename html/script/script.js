const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

/* back button */
function goBack() {
    window.history.back();
}

/* open popup */
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "block";
    }
}

/* close popup */
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "none";
    }
}