//your JS code here. If required.
  const nameInput = document.getElementById('fname');

 
  nameInput.addEventListener('blur', function(event) {
    
    nameInput.value = nameInput.value.toUpperCase();
  });