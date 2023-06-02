function submitForm() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  
  // Controleren of de gebruiker in het lokale profiel bestaat
  const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
  const profile = profiles.find(profile => profile.username === username);
  if (username=="Lucas"&& password=="Lucas"){
    window.location.href = "/games/beginscherm/beginscherm2.html";
  }else{
    if (profile && profile.password === password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "/games/beginscherm/beginscherm.html";
  } else {
    if(username=="Marie"&& password=="Krrhoer"){
      window.location.href="/face/fansite.html";
    } else{alert("Ongeldige gebruikersnaam of wachtwoord");}
    
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

const URL = "https://teachablemachine.withgoogle.com/models/d1exbtk_D/";
let model, webcam, labelContainer, maxPredictions;

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(200, 200, flip);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    labelContainer.appendChild(document.createElement("div"));
  }
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  const lucasThreshold = 0.9; // Threshold voor Lucas' gezichtsherkenning

  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }

  const lucasProbability = prediction[2].probability;
  if (lucasProbability > lucasThreshold) {
    showWelcomeAlert();
  } else {
    showNonLucasAlert();
  }
}

function showWelcomeAlert() {
  alert("Welkom, Lucas!");
  window.location.href='/games/beginscherm/beginscherm2.html'
  var username = Lucas

}
function invite(){
  window.location.href='/games/eindball/eindball.html'
}


function showNonLucasAlert() {
  alert("Niet Lucas!");
}










