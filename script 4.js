document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'esperimento'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'quinta stanza.html'; 
    } else {
        laughSound.play();
    }
}); 