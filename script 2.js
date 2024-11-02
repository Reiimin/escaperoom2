document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'dolore'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'terza stanza.html'; 
    } else {
        laughSound.play();
    }
}); 