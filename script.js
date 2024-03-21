document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('check').checked = false;
    })
});