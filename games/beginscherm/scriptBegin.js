document.addEventListener("DOMContentLoaded", function () {
    // Haal de naam van de ingelogde persoon op uit de Local Storage
    var loggedInUser = localStorage.getItem("username");
  
    // Controleer of er een ingelogde gebruiker is
    if (loggedInUser) {
      document.getElementById("username").textContent = loggedInUser;
    }
  });
  