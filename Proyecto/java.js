// Abrir la modal
document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('data-target');
    document.getElementById(target).style.display = 'block';
  });
});

// Cerrar la modal
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

// Cerrar modal al hacer clic fuera de ella
window.addEventListener('click', event => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});




// JavaScript para alternar las respuestas
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Alternar la clase 'active' para mostrar/ocultar la respuesta
      item.classList.toggle('active');
    });
  });
});




