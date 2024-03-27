

const image = document.querySelector('.slide');
const tip = document.getElementById('hidden_text');


const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');



slide1.addEventListener('click',function(){

    // Toggle de klasse 'unhidden' op de afbeelding
    this.classList.toggle('unhidden');

   // Controleer of de afbeelding nu zichtbaar is
    const isHidden = this.classList.contains('unhidden');

    if (isHidden) {
        // Voeg tekst toe op de plaats van de afbeelding
        const textNode = document.createTextNode("Dit kan dus een hint zijn 😆  ");
        tip.appendChild(textNode);
    } else {
        // Verwijder de tekst uit de tip-container
        tip.textContent = "";
    }
});

slide2.addEventListener('click',function(){
    alert('oei oei hier zit je verkeerd schattie')
});


slide3.addEventListener('click',function(){
    window.open('https://tinder.com/nl', '_blank');
});

slide4.addEventListener('click',function(){
    window.open('https://www.youtube.com/watch?v=VQeW62X8rEA','_blank')
});