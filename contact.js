document.addEventListener('DOMContentLoaded', () => {
    // Check if we were redirected after form submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('submitted')) {
        // Show success message
        showToast('Your message has been sent successfully! I\'ll get back to you soon.', 'success');

        // Clean up the URL
        history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }

    // Function to show toast notifications
    function showToast(message, type = 'info') {
        const backgroundColor = type === 'success' ? '#8E2DE2' : '#f44336';

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