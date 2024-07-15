const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.elements['username'].value.trim();
    const email = form.elements['email'].value.trim();
    const password = form.elements['password'].value;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    form.submit();
});
