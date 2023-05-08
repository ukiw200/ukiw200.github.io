function submitForm() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  switch (username) {
    case "Lucas":
      if (password === "Lucas") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "/games/beginscherm/beginscherm.html";
      } else {
        alert("Invalid username or password");
      }
      break;

    case "Joss":
      if (password === "Joss2005") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "/games/beginscherm/beginscherm.html";
      } else {
        alert("Invalid username or password");
      }
      break;

    default:
      const userCount = localStorage.getItem("userCount");


      const storedPassword = localStorage.getItem(`newuser${userCount}_password`); // Wachtwoord ophalen uit localStorage
      const storedUsername = localStorage.getItem(`newuser${userCount}`); // Gebruikersnaam ophalen uit localStorage
      if (storedPassword && storedUsername && storedUsername === username && storedPassword === password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "/games/beginscherm/beginscherm2.html";
      } else {
        alert("Invalid username or password");
      }
      break;
  }
}

function showCreateProfile() {
  const createProfileForm = document.getElementById('createProfileForm');
  createProfileForm.classList.remove('hidden');
}

function createProfile() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (newUsername && newPassword) {
    const userCount = localStorage.getItem("userCount");
    const userIndex = userCount ? parseInt(userCount) + 1 : 1;
    localStorage.setItem(`newuser${userIndex}`, newUsername); // Opslaan van gebruikersnaam
    localStorage.setItem(`newuser${userIndex}_password`, newPassword); // Opslaan van wachtwoord
    localStorage.setItem("userCount", userIndex);
    alert("Profile created successfully!");
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
  } else {
    alert("Please enter a username and password for the new profile.");
  }
}
