/**
 * Updated contact.js with modern toast notifications
 */
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

    // Function to show modern toast notifications
    function showToast(message, type = 'info') {
        const backgroundColor = type === 'success' ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' :
            type === 'error' ? 'linear-gradient(135deg, #f44336, #ff9800)' :
                'linear-gradient(135deg, #2196f3, #03a9f4)';

        // Create toast Icon based on type
        const iconSVG = type === 'success' ?
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' :
            type === 'error' ?
                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>' :
                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

        Toastify({
            text: message,
            duration: 4000,
            gravity: "top",
            position: "center",
            className: `toast-${type}`,
            style: {
                background: backgroundColor,
                borderRadius: '16px',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            },
            offset: {
                y: '20px'
            },
            stopOnFocus: true,
            close: true,
            escapeMarkup: false,
            // Add icon to beginning of toast
            beforeCreate: function(toast) {
                toast.innerHTML = iconSVG + toast.innerHTML;
            },
            // Add animation classes
            callback: function() {
                this.element.classList.add("toast-entering");
            },
            onClick: function() {
                this.hideToast();
            }
        }).showToast();
    }
});