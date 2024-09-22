const mobile = document.querySelector('.mobile');
const ham = document.querySelector('.ham-menu');


ham.addEventListener('click', () => {
  mobile.classList.toggle('show');
})