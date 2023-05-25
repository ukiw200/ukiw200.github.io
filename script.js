function submitForm() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  
  // Controleren of de gebruiker in het lokale profiel bestaat
  const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
  const profile = profiles.find(profile => profile.username === username);
  if (username=="Lucas"&& password=="Lucas"){
    window.location.href = "/games/beginscherm/beginscherm2.html";
  } else{
    if (profile && profile.password === password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "/games/beginscherm/beginscherm.html";
  } else {
    alert("Ongeldige gebruikersnaam of wachtwoord");
  }
}}

function showCreateProfile() {
  const createProfileForm = document.getElementById('createProfileForm');
  createProfileForm.classList.remove('hidden');
}

function HideCreateProfile(){
  const createProfileForm = document.getElementById('createProfileForm');
  createProfileForm.classList.add('hidden');
}

function createProfile() {
  HideCreateProfile();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (newUsername && newPassword) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const existingProfile = profiles.find(profile => profile.username === newUsername);

    if (existingProfile) {
      alert("Gebruikersnaam bestaat al. Kies een andere gebruikersnaam.");
      return;
    }

    profiles.push({ username: newUsername, password: newPassword });
    localStorage.setItem("profiles", JSON.stringify(profiles));
    alert("Profiel succesvol aangemaakt!");
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
  } else {
    alert("Voer een gebruikersnaam en wachtwoord in voor het nieuwe profiel.");
  }
   
}
