document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'tristezza'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'Sesta stanza.html'; 
    } else {
        laughSound.play();
    }
}); 