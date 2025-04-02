document.addEventListener('DOMContentLoaded', () => {
    // Get the contact form element
    const contactForm = document.querySelector('.contact-form');

    // Check if we're returning from a form submission
    checkFormSubmissionStatus();

    // Add event listener for form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Don't prevent the default form submission - let FormSubmit handle it
            // But show a notification before the page reloads
            showToast('Sending your message...', 'info');

            // Store in localStorage that we've just submitted the form
            localStorage.setItem('formSubmitted', 'true');

            // Let the form submit normally
            return true;
        });
    }

    // Function to check if we've returned from a form submission
    function checkFormSubmissionStatus() {
        // Check if form was recently submitted
        const formSubmitted = localStorage.getItem('formSubmitted');

        // Check URL parameters (for FormSubmit redirects)
        const urlParams = new URLSearchParams(window.location.search);

        // If we just came back from a FormSubmit submission
        if (formSubmitted === 'true') {
            // Clear the flag right away
            localStorage.removeItem('formSubmitted');

            // Show success toast
            showToast('Your message has been sent successfully! I\'ll get back to you soon.', 'success');

            // Clean up URL if needed
            if (urlParams.has('submitted') || urlParams.has('message')) {
                history.replaceState({}, document.title, window.location.pathname + window.location.hash);
            }
        }

        // Check for error parameters
        if (urlParams.has('error')) {
            showToast('There was an error sending your message. Please try again.', 'error');
            history.replaceState({}, document.title, window.location.pathname + window.location.hash);
        }
    }

    // Function to show toast notifications
    function showToast(message, type = 'info') {
        const backgroundColor = type === 'success' ? '#8E2DE2' :
            type === 'error' ? '#f44336' :
                '#2196f3';

        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor,
            stopOnFocus: true,
            close: true
        }).showToast();
    }
});