// Array met verschillende talen en hun "I love you" vertalingen
var languages = [
    { language: "Engels", translation: "I love you" },
    { language: "Frans", translation: "Je t'aime" },
    { language: "Spaans", translation: "Te quiero" },
    { language: "Duits", translation: "Ich liebe dich" },
    { language: "Italiaans", translation: "Ti amo" },
    { language: "Portugees", translation: "Eu te amo" },
    { language: "Russisch", translation: "Я тебя люблю" },
    { language: "Japans", translation: "愛してる" },
    { language: "Chinees (Mandarijn)", translation: "我爱你" },
    { language: "Koreaans", translation: "사랑해요" },
    { language: "Arabisch", translation: "أحبك" },
    { language: "Turks", translation: "Seni seviyorum" },
    { language: "Grieks", translation: "Σε αγαπώ" },
    { language: "Pools", translation: "Kocham cię" },
    { language: "Nederlands", translation: "Ik hou van je" },
    { language: "Zweeds", translation: "Jag älskar dig" },
    { language: "Noors", translation: "Jeg elsker deg" },
    { language: "Fins", translation: "Rakastan sinua" },
    { language: "Deens", translation: "Jeg elsker dig" },
    { language: "IJslands", translation: "Ég elska þig" },
    // Voeg hier meer talen toe...
];

// Functie om een willekeurige popup weer te geven
function showPopup() {
    var randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = randomLanguage.translation + " (" + randomLanguage.language + ")";
    popup.style.top = Math.random() * (window.innerHeight - popup.offsetHeight) + "px";
    popup.style.left = Math.random() * (window.innerWidth - popup.offsetWidth) + "px";
    document.body.appendChild(popup);


}

// Functie om periodiek pop-ups weer te geven
function startPopups() {
    setInterval(function() {
        showPopup();
    }, 700);
}

// Start de pop-ups wanneer de pagina volledig is geladen
window.onload = function() {
    startPopups();
};
