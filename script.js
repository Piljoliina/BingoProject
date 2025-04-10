
 const dropdownIcon = document.querySelector('.dropdown-icon');
 const dropdownContent = document.querySelector('.dropdown-content');


 document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(drop => {
      const toggle = drop.querySelector('.dropdown-toggle') || drop.querySelector('.dropdown-icon');
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllDropdowns();
        drop.classList.toggle('show');
      });
    });

    document.addEventListener('click', function () {
      closeAllDropdowns();
    });

    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown.show').forEach(drop => {
        drop.classList.remove('show');
      });
    }
  });