var container = document.querySelector('.search-container');
var button = container.querySelector('.search-button');
var form = container.querySelector('.search-form');

button.addEventListener('click', function(e) {
  e.preventDefault();

  form.classList.toggle('hidden');
});
