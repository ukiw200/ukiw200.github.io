function bereken(event) {
  event.preventDefault();
  // Gebruiker input ophalen
  var leeftijd = parseInt(document.getElementById("leeftijd").value);
  var gewicht = parseFloat(document.getElementById("gewicht").value);
  var lengte = parseInt(document.getElementById("grootte").value);
  var geslacht = document.querySelector('input[name="geslacht"]:checked').value;
  var doelgewicht = parseFloat(document.getElementById("doelgewicht").value);
  var afvalperiode = parseInt(document.getElementById("afvalperiode").value);
  var trainingsdagen = getSelectedTrainingDays();


  const selectedDays = getSelectedTrainingDays();
  if (selectedDays.length === 0) {
    alert("Selecteer minimaal één trainingsdag");
    return;
  }

  // Berekeningen uitvoeren
  var bmr;
  if (geslacht === "man") {
    bmr = (10 * gewicht) + (6.25 * lengte) - (5 * leeftijd) + 5;
  } else {
    bmr = (10 * gewicht) + (6.25 * lengte) - (5 * leeftijd) - 161;
  }
  var dagelijkse_caloriebehoefte = bmr;
  var dagelijkse_waterbehoefte = gewicht * 0.03;
  var totaal_gewichtsverlies = gewicht - doelgewicht;
  var gewichtsverlies_per_week = totaal_gewichtsverlies / afvalperiode;

  var dagelijkse_caloriebehoefte_trainingsdag = dagelijkse_caloriebehoefte + 200;
  var dagelijkse_caloriebehoefte_rustdag = dagelijkse_caloriebehoefte;

  var dagelijkse_caloriebehoefte_naar_gewenst_gewicht = dagelijkse_caloriebehoefte_rustdag - 500 * gewichtsverlies_per_week;

  // Resultaten weergeven
  document.getElementById("resultaat").innerHTML =
    "Dagelijkse waterbehoefte: " + dagelijkse_waterbehoefte.toFixed(2) + " liter<br>" +
    "Gewenst gewicht: " + doelgewicht.toFixed(2) + " kg<br>" +
    "Gewichtsverlies per week: " + gewichtsverlies_per_week.toFixed(2) + " kg<br>" +
    "Dagelijkse caloriebehoefte voor gewenst gewicht op rustdagen: " + dagelijkse_caloriebehoefte_naar_gewenst_gewicht.toFixed(2) + " kcal";

  createCalorieChart(dagelijkse_caloriebehoefte_naar_gewenst_gewicht);
}

function createCalorieChart(dagelijkse_caloriebehoefte_naar_gewenst_gewicht) {
  var ctx = document.getElementById('ctx').getContext('2d');

  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var selectedTrainingDays = getSelectedTrainingDays();
  var chartData = generateCalorieData(daysOfWeek, selectedTrainingDays, dagelijkse_caloriebehoefte_naar_gewenst_gewicht);

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: [{
        label: 'Calorieën',
        data: chartData.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function generateCalorieData(daysOfWeek, selectedTrainingDays, dagelijkse_caloriebehoefte_naar_gewenst_gewicht) {
  var data = [];
  var trainingCalories = dagelijkse_caloriebehoefte_naar_gewenst_gewicht + 200;

  for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i];
    if (selectedTrainingDays.includes(day)) {
      data.push(trainingCalories);
    } else {
      data.push(dagelijkse_caloriebehoefte_naar_gewenst_gewicht);
    }
  }

  return {
    labels: daysOfWeek,
    data: data
  };
}

function getSelectedTrainingDays() {
  var selectedDays = [];
  var checkboxes = document.getElementsByName('trainingsdag');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedDays.push(checkboxes[i].value);
    }
  }
  return selectedDays;
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
berekenButton.addEventListener("click", bereken);

const goBackButton = document.getElementById("go-back-button");
goBackButton.addEventListener("click", function() {
  window.location.href = "/games/beginscherm/beginscherm.html";
});

function saveData() {
  var leeftijd = parseInt(document.getElementById("leeftijd").value);
  var gewicht = parseFloat(document.getElementById("gewicht").value);
  var lengte = parseInt(document.getElementById("grootte").value);
  var geslacht = document.querySelector('input[name="geslacht"]:checked').value;
  var doelgewicht = parseFloat(document.getElementById("doelgewicht").value);
  var afvalperiode = parseInt(document.getElementById("afvalperiode").value);
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

 

  var userData = {
    leeftijd: leeftijd,
    gewicht: gewicht,
    lengte: lengte,
    geslacht: geslacht,
    doelgewicht: doelgewicht,
    afvalperiode: afvalperiode,
    dagelijkse_caloriebehoefte: dagelijkse_caloriebehoefte,
    dagelijkse_waterbehoefte: dagelijkse_waterbehoefte,
    totaal_gewichtsverlies: totaal_gewichtsverlies,
    gewichtsverlies_per_week: gewichtsverlies_per_week,
    dagelijkse_caloriebehoefte_naar_gewenst_gewicht: dagelijkse_caloriebehoefte_naar_gewenst_gewicht
    



  };

var naam = document.getElementById("naam").value;
  localStorage.setItem(naam, JSON.stringify(userData));
  alert("Data saved successfully!");

}

function loadData() {
  window.location.href = "/games/formulier test/index.html";
}

const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveData);

const loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", loadData);
