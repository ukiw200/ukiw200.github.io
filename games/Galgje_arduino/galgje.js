



function sendData(event) {
    event.preventDefault(); // Voorkom dat het formulier wordt verzonden

    var lcdText = document.getElementById("lcdInput").value; // Haal de ingevoerde tekst op
    var url = "http://192.168.10.27/lcd?text=" + lcdText; // IP-adres van de Arduino

    // Verstuur een HTTP-verzoek naar de Arduino
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    // Voeg de ingevoerde letter toe aan de tabel
    var letterTable = document.getElementById("letterTable");
    var newRow = letterTable.insertRow(-1);
    var newCell = newRow.insertCell(0);
    newCell.textContent = lcdText;
}