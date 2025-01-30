var btn = document.getElementById('sendBtn');

document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Wysyłanie...';

   const serviceID = 'service_5b3tsmm';
   const templateID = 'template_jya7aoe';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Wyślij';
      alert('Wiadomość została wysłana.');
    }, (err) => {
      btn.value = 'Wyślij';
      alert(JSON.stringify(err));
    });
});