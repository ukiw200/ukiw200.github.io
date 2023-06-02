document.addEventListener("DOMContentLoaded", function() {
    var overlays = document.querySelectorAll(".overlay");
  
    overlays.forEach(function(overlay) {
      var passwordInput = overlay.querySelector(".password-input");
      var submitButton = overlay.querySelector(".submit-button");
      var photo = overlay.parentNode.querySelector("img");
  
      submitButton.addEventListener("click", function() {
        var password = "Krrhoer"; // Voeg hier je eigen wachtwoord toe
  
        if (passwordInput.value === password) {
          photo.classList.remove("blurred");
          
        }
  
        passwordInput.value = "";
        overlay.style.opacity = 0;
      });
    });
  });
  