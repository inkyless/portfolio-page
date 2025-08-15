import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, ADMIN_TEMPLATE, SERVICE_ID } from "../config";

emailjs.init(PUBLIC_KEY); 

export function handleContactForm(){
    const form = document.getElementById("contact-form")
    const statusMessage = document.getElementById("status-message")

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    statusMessage.textContent = "Sending...";

    emailjs.sendForm(SERVICE_ID, ADMIN_TEMPLATE, form)
      .then(() => {
        return emailjs.sendForm(SERVICE_ID, REPLY_TEMPLATE, form);
      })
      .then(() => {
        statusMessage.textContent = "Message sent successfully! Please check your email for confirmation.";
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        statusMessage.textContent = "Oops! Something went wrong. Please try again.";
      });
});
}

