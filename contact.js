/**
 * Contact form with AJAX submission and Toastify notifications
 * This approach needs a backend service to handle the email sending
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the contact form element
    const contactForm = document.querySelector('.contact-form');

    // Add event listener for form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Function to handle form submission
    async function handleFormSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);

        // Validate form data
        if (!validateForm(formProps)) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.classList.add('loading');

        try {
            // Send the form data using fetch API
            const response = await submitForm(formProps);

            // Handle successful submission
            contactForm.reset();
            showToast('Your message has been sent successfully! I\'ll get back to you soon.', 'success');

            // Optional: Add some nice animation or feedback
            const thankYouMessage = document.createElement('div');
            thankYouMessage.className = 'thank-you-message';
            thankYouMessage.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p>Thank you for reaching out!</p>
            `;

            // Insert thank you message temporarily
            contactForm.style.position = 'relative';
            contactForm.appendChild(thankYouMessage);

            // Remove the thank you message after a delay
            setTimeout(() => {
                if (thankYouMessage.parentNode === contactForm) {
                    contactForm.removeChild(thankYouMessage);
                }
            }, 5000);

        } catch (error) {
            // Handle submission error
            console.error('Form submission error:', error);
            showToast('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset the button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            submitBtn.classList.remove('loading');
        }
    }

    // Function to validate form data
    function validateForm(data) {
        // Check for empty required fields
        if (!data.name || !data.email || !data.message) {
            showToast('Please fill in all required fields', 'error');
            return false;
        }

        // Validate email format
        if (!isValidEmail(data.email)) {
            showToast('Please enter a valid email address', 'error');
            return false;
        }

        // Message length validation
        if (data.message.length < 10) {
            showToast('Your message is too short. Please provide more details.', 'error');
            return false;
        }

        return true;
    }

    // Function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to submit the form (this would typically go to your backend)
    async function submitForm(formData) {
        // In a real implementation, you would send this to your backend endpoint
        // For this example, we'll use a mock promise to simulate the API call

        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // Simulate successful submission most of the time
                if (Math.random() < 0.9) {
                    resolve({
                        success: true,
                        message: 'Email sent successfully'
                    });
                } else {
                    // Occasionally simulate an error for testing
                    reject(new Error('Failed to send email'));
                }
            }, 2000);
        });

        // In a real implementation, you would use code like this:
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return response.json();
        */
    }

    // Function to show toast notifications
    function showToast(message, type = 'info') {
        // Define colors based on the site's theme variables
        const backgroundColor = type === 'success' ? 'var(--primary-color)' :
            type === 'error' ? '#f44336' :
                '#2196f3';

        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor,
            stopOnFocus: true,
            close: true,
            style: {
                borderRadius: '10px',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }
        }).showToast();
    }
});

// Add styles for form feedback
document.addEventListener('DOMContentLoaded', () => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .submit-btn.loading {
            position: relative;
            color: transparent !important;
            pointer-events: none;
        }
        
        .submit-btn.loading::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 50%;
            margin-top: -10px;
            margin-left: -10px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .thank-you-message {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--card-bg-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            animation: fadeIn 0.5s ease-out;
            z-index: 10;
        }
        
        .thank-you-message svg {
            color: var(--primary-color);
            margin-bottom: 20px;
            animation: scaleUp 0.5s ease-out;
        }
        
        .thank-you-message p {
            font-size: 1.2rem;
            color: var(--text-color);
            font-weight: 500;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scaleUp {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }
    `;
    document.head.appendChild(styleElement);
});