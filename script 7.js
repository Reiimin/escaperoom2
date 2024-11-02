document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'emarginati'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'Ottava stanza.html'; 
    } else {
        laughSound.play();
    }
}); 