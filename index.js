const component = document.getElementById('childDiv');

component.addEventListener('click', function onClick() {
  component.style.backgroundColor = 'green';
  component.style.color = 'white';
});