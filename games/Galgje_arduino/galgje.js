function sendData(event) {
    event.preventDefault(); // Voorkom dat het formulier wordt verzonden

    var lcdText = document.getElementById("lcdInput").value; // Haal de ingevoerde tekst op
    var url = "http://192.168.10.19/lcd?text=" + lcdText; //ip adress arduino

    // Verstuur een HTTP-verzoek naar de Arduino
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
}