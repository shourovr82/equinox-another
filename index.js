const component = document.getElementById('childDiv');

component.addEventListener('click', function onClick() {
  component.style.backgroundColor = 'red';
  component.style.color = 'white';
});