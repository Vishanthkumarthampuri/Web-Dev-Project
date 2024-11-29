// Contact Form Validation
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
        // Here you could add an AJAX call to send the form data to the server.
    }
};
