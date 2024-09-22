const mobile = document.querySelector('.mobile');
const ham = document.querySelector('.ham-menu');
const upArrow = document.getElementById('up');

console.log(upArrow);
ham.addEventListener('click', () => {
  mobile.classList.toggle('show');
})

upArrow.addEventListener('mouseenter', () => {
  upArrow.style.marginBottom = '2em';
})