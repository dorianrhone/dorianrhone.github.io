const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');
const result = document.getElementById('contact-result');

let feedbackTimer;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearTimeout(feedbackTimer);
    result.textContent = "";

    const formData = new FormData(form);

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
        result.textContent = "Success! Your message has been sent.";
        result.style.color = "#C99A52";
        form.reset();
    } else {
        result.textContent = "Error: " + (data.message || "Unable to send message.");
        result.style.color = "#ff7777";
    }

    } catch (error) {
        result.textContent = "Something went wrong. Please try again.";
        result.style.color = "#ff7777";
        console.log(error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        feedbackTimer = setTimeout(() => {
            result.textContent = "";
        }, 1000);
    }
});