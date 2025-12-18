document.addEventListener('DOMContentLoaded', () => {
    const signupCard = document.querySelector('.signup-card');
    const successCard = document.querySelector('.success-card');
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('mail');
    const errorMessage = document.querySelector('.error-message');
    const userEmailSpan = document.getElementById('user-email');
    const dismissButton = document.getElementById('btn-dismiss');

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // Valid email
            // Remove error styles just in case
            emailInput.classList.remove('error');
            errorMessage.style.display = 'none';

            // Update success message
            userEmailSpan.textContent = email;

            // Switch cards
            signupCard.classList.add('hidden');
            successCard.classList.remove('hidden');
        } else {
            // Invalid email
            emailInput.classList.add('error');
            errorMessage.style.display = 'block';
        }
    });

    // Handle input change to remove error state
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) {
            emailInput.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });

    // Handle dismiss button
    dismissButton.addEventListener('click', () => {
        // Switch cards back
        successCard.classList.add('hidden');
        signupCard.classList.remove('hidden');

        // Reset form
        form.reset();
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
    });
});
