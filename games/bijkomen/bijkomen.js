function bereken(event) {
    event.preventDefault();
    // Gebruiker input ophalen
    var leeftijd = parseInt(document.getElementById("leeftijd").value);
    var gewicht = parseFloat(document.getElementById("gewicht").value);
    var lengte = parseInt(document.getElementById("grootte").value);
    var geslacht = document.querySelector('input[name="geslacht"]:checked').value;
    var doelgewicht = parseFloat(document.getElementById("doelgewicht").value);
    var spieraanwinstperiode = parseInt(document.getElementById("spieraanwinstperiode").value);
    
    // Berekeningen uitvoeren
    var bmr;
    if (geslacht == "man") {
      bmr = (10 * gewicht) + (6.25 * lengte) - (5 * leeftijd) + 5;
    } else {
      bmr = (10 * gewicht) + (6.25 * lengte) - (5 * leeftijd) - 161;
    }
    var dagelijkse_caloriebehoefte = bmr;
    var dagelijkse_waterbehoefte = gewicht * 0.03;
    var eiwitbehoefte = gewicht * 2.2;
    var spieraanwinst_per_week = (doelgewicht - gewicht) / spieraanwinstperiode;
    var dagelijkse_caloriebehoefte_voor_spieraanwinst = dagelijkse_caloriebehoefte + 500 * spieraanwinst_per_week;
    
    // Resultaten weergeven
    document.getElementById("resultaat").innerHTML =  
    "Dagelijkse waterbehoefte: " + dagelijkse_waterbehoefte.toFixed(2) + " liter<br>" + 
    "Eiwitbehoefte per dag: " + eiwitbehoefte.toFixed(2) + " gram<br>" + 
    "Gewenst gewicht: " + doelgewicht.toFixed(2) + " kg<br>" +
    "Spieraanwinst per week: " + spieraanwinst_per_week.toFixed(2) + " kg<br>" +
    "Dagelijkse caloriebehoefte voor spieraanwinst: " + dagelijkse_caloriebehoefte_voor_spieraanwinst.toFixed(2) + " kcal";
  }

  const leeftijdSlider = document.getElementById("leeftijd");
  const leeftijdValue = document.getElementById("leeftijd-value");
  
  leeftijdSlider.addEventListener(
    "input", function() {
      leeftijdValue.textContent = leeftijdSlider.value;
    });
  
  const gewichtSlider = document.getElementById("gewicht");
  const gewichtValue = document.getElementById("gewicht-value");
  
  gewichtSlider.addEventListener(
    "input", function() {
      gewichtValue.textContent = gewichtSlider.value;
    });
  
  const grootteSlider = document.getElementById("grootte");
  const grootteValue = document.getElementById("grootte-value");
  
  grootteSlider.addEventListener(
    "input", function() {
      grootteValue.textContent = grootteSlider.value;
    });
  
  
  
  const gewenstSlider = document.getElementById("doelgewicht");
  const gewenstValue = document.getElementById("doelgewicht-value");
  
  gewenstSlider.addEventListener(
    "input", function() {
      gewenstValue.textContent = gewenstSlider.value;
    });

  const periodeSlider= document.getElementById("spieraanwinstperiode");
  const periodeValue = document.getElementById("spieraanwinstperiode-value");
  
  periodeSlider.addEventListener(
    "input", function() {
        periodeValue.textContent = periodeSlider.value;
    });


  const berekenButton = document.getElementById("bereken-button");
  berekenButton.addEventListener("click", bereken);


  const goBackButton = document.getElementById("go-back-button");
goBackButton.addEventListener("click", function() {
  window.location.href = "/games/beginscherm/beginscherm.html";
});

  

  