
 const dropdownIcon = document.querySelector('.dropdown-icon');
 const dropdownContent = document.querySelector('.dropdown-content');


 dropdownIcon.addEventListener('click', function() {
     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
 });

 
 window.addEventListener('click', function(event) {
     if (!event.target.matches('.dropdown-icon')) {
         dropdownContent.style.display = 'none';
     }
 });