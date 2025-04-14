
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

  //POPUP'S

  function openPopup() {
    document.getElementById("instructionPopup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("instructionPopup").style.display = "none";
  }

  window.onclick = function(event) {
    const popup = document.getElementById("instructionPopup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };

  document.querySelector('a[href="login"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginModal').style.display = 'flex';
  });
  
  document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('loginModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.getElementById('createAccount').addEventListener('click', function () {
    alert("Redirecting to registration page...");
  });   

  //END OF POPUP'S