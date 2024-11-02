document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'presunzione'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'Seconda stanza.html'; 
    } else {
        laughSound.play();
    }
}); 