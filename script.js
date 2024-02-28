//your JS code here. If required.
  const nameInput = document.getElementById('fname');

 
  nameInput.addEventListener('click', function(event) {
    
    nameInput.value = nameInput.value.toUpperCase();
  });