document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = '94'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'Quarta stanza.html'; 
    } else {
        laughSound.play();
    }
}); 