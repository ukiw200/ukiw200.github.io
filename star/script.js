

const image = document.querySelector('.slide');
const tip = document.getElementById('hidden_text');


const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');

const title = document.getElementById('title');



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
    window.open('/star/letter.html', '_blank');
});


slide3.addEventListener('click',function(){
    window.open('https://tinder.com/nl', '_blank');
});

slide4.addEventListener('click',function(){
    alert('als je uw ogen toe doet ga je niet veel zien eh schattie')

    window.open('/star/kiekeboe.html','_blank')
});


title.addEventListener('click',function(){
    alert('weer fout maar ik zie je graag babs ❤️')
});