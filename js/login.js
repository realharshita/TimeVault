const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.elements['username'].value.trim();
    const password = form.elements['password'].value;

    if (username === '' || password === '') {
        alert('Please enter your username and password.');
        return;
    }
    form.submit();
});
