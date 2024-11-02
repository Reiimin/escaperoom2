document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'indifferenza'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'settima stanza.html'; 
    } else {
        laughSound.play();
    }
}); 