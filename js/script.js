const btn = document.getElementById('send');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_lxn6ocl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});