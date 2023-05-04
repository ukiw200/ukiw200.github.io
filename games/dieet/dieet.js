function bereken(event) {
    event.preventDefault();
    // Gebruiker input ophalen
    var leeftijd = parseInt(document.getElementById("leeftijd").value);
    var gewicht = parseFloat(document.getElementById("gewicht").value);
    var lengte = parseInt(document.getElementById("grootte").value);
    var geslacht = document.querySelector('input[name="geslacht"]:checked').value;
    var doelgewicht = parseFloat(document.getElementById("doelgewicht").value);
    var afvalperiode = parseInt(document.getElementById("afvalperiode").value);
  
    // Berekeningen uitvoeren
    var bmr;
    if (geslacht === "man") {
      bmr = (10 * gewicht) + (6.25 * lengte) - (5 * leeftijd) + 5;
    } else {
      bmr = (10 * gewicht) + (6.25 * lengte) - (5 * leeftijd) - 161;
    }
    var dagelijkse_caloriebehoefte = bmr;
    var dagelijkse_waterbehoefte = gewicht * 0.03;
    var totaal_gewichtsverlies = (gewicht - doelgewicht);
    var gewichtsverlies_per_week = totaal_gewichtsverlies / afvalperiode;
    var dagelijkse_caloriebehoefte_naar_gewenst_gewicht = dagelijkse_caloriebehoefte - 500 * gewichtsverlies_per_week;
  
    // Resultaten weergeven
    document.getElementById("resultaat").innerHTML =  
    "Dagelijkse waterbehoefte: " + dagelijkse_waterbehoefte.toFixed(2) + " liter<br>" + 
    "Gewenst gewicht: " + doelgewicht.toFixed(2) + " kg<br>" +
    "Gewichtsverlies per week: " + gewichtsverlies_per_week.toFixed(2) + " kg<br>" +
    "Dagelijkse caloriebehoefte voor gewenst gewicht: " + dagelijkse_caloriebehoefte_naar_gewenst_gewicht.toFixed(2) + " kcal";
  }
  
  
  
  
  
  
  
  const leeftijdSlider = document.getElementById('leeftijd');
const leeftijdValue = document.getElementById('leeftijd-value');

leeftijdSlider.addEventListener('input', function() {
  leeftijdValue.value = leeftijdSlider.value;
});

leeftijdValue.addEventListener('input', function() {
  if (leeftijdValue.value < 17) {
    leeftijdValue.value = 17;
  } else if (leeftijdValue.value > 100) {
    leeftijdValue.value = 100;
  }
  leeftijdSlider.value = leeftijdValue.value;
});

  
const gewichtSlider = document.getElementById("gewicht");
const gewichtValue = document.getElementById("gewicht-value");

gewichtSlider.addEventListener(
  "input", function() {
    gewichtValue.value = gewichtSlider.value;
  });

gewichtValue.addEventListener(
  "input", function() {
    if (gewichtValue.value < 30) {
      gewichtValue.value = 30;
    } else if (gewichtValue.value > 150) {
      gewichtValue.value = 150;
    }
    gewichtSlider.value = gewichtValue.value;
  });


const grootteSlider = document.getElementById("grootte");
const grootteValue = document.getElementById("grootte-value");

grootteSlider.addEventListener(
  "input", function() {
    grootteValue.value = grootteSlider.value;
  });

grootteValue.addEventListener(
  "input", function() {
    if (grootteValue.value < 120) {
      grootteValue.value = 120;
    } else if (grootteValue.value > 220) {
      grootteValue.value = 220;
    }
    grootteSlider.value = grootteValue.value;
  });



const gewenstSlider = document.getElementById("doelgewicht");
const gewenstValue = document.getElementById("doelgewicht-value");

gewenstSlider.addEventListener(
  "input", function() {
    gewenstValue.value = gewenstSlider.value;
  });

gewenstValue.addEventListener(
  "input", function() {
    if (gewenstValue.value < 30) {
      gewenstValue.value = 30;
} else if (gewenstValue.value > 150) {
  gewenstValue.value = 150;
}
gewenstSlider.value = gewenstValue.value;
});


const periodeSlider = document.getElementById("afvalperiode");
const periodeValue = document.getElementById("afvalperiode-Value");

periodeSlider.addEventListener(
  "input", function() {
    periodeValue.value = periodeSlider.value;
  });

periodeValue.addEventListener(
  "change", function() {
    if (periodeValue.value < 1) {
      periodeValue.value = 1;
    } else if (periodeValue.value > 52) {
      periodeValue.value = 52;
    }
    periodeSlider.value = periodeValue.value;
  });







  const berekenButton = document.getElementById("bereken-button");

  const goBackButton = document.getElementById("go-back-button");
  goBackButton.addEventListener("click", function() {
    window.location.href = "/index.html";
  });
  