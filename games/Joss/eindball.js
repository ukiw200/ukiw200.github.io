function showConfirmationPrompt() {
    var invitationText = document.getElementById("invitation-text");
    invitationText.innerHTML = `
        <p>Zeker van?</p>
        <button onclick="showinvitation()">NEE</button>
        <button onclick="showErrorMessage()">JA</button>
    `;
}

function showConfirmation() {
    var confirmationDiv = document.getElementById("confirmation-message");
    confirmationDiv.style.display = "block";
    var invitationText = document.getElementById("invitation-text");
    invitationText.innerHTML = "";
    var errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.style.display = "none";
}

function showErrorMessage() {
    var errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.style.display = "block";
    var confirmationDiv = document.getElementById("confirmation-message");
    confirmationDiv.style.display = "none";
}

function showinvitation(){
    var errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.style.display = "none";
    var invitationText = document.getElementById("invitation-text");
    invitationText.innerHTML = `
        <p>Zou je met mij willen gaan naar het eindejaarsbal?</p>
        <button onclick="showConfirmation()">JA</button>
        <button onclick="showErrorMessage()">NEE</button>
    `;
}

function moveNoButton() {
    var button = document.getElementById("no-button");
    var positionX = Math.random() * (window.innerWidth - button.offsetWidth);
    var positionY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = positionX + "px";
    button.style.top = positionY + "px";
}
