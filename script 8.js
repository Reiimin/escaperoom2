document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'prezzo'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'Uscita.html'; 
    } else {
        laughSound.play();
    }
}); 