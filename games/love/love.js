window.addEventListener('load', function() {
    getData();
});

function berekenLiefde() {
    var girlName = document.getElementById("girlName").value;
    var boyName = document.getElementById("boyName").value;

    var percentage;
    if (girlName === "Joss" && boyName === "Lucas") {
        percentage = 100;
    } else if (girlName === "Joss" && boyName === "Maarten" || boyName === "Darwin") {
        percentage = 0;
    } else if(girlName == "" ){
        alert("please enter a name")}
        else if( boyName == ""){
            alert("please enter a name")
        }
        else
        {
        percentage = Math.floor(Math.random() * 100) + 1;
    }

    document.getElementById("resultaat").innerHTML = "Jullie liefdespercentage is: " + percentage + "%";

    // Sla het resultaat op in de lokale opslag
    var resultaat = {
        girlName: girlName,
        boyName: boyName,
        percentage: percentage
    };
    localStorage.setItem("LoveResult", JSON.stringify(resultaat));

    updatePreviousCouplesTable(resultaat);
}





function updatePreviousCouplesTable(resultaat) {
    var table = document.getElementById("previousCouples");

    var row = table.insertRow(1); // Invoegen na de koprij
    var girlNameCell = row.insertCell(0);
    var boyNameCell = row.insertCell(1);
    var percentageCell = row.insertCell(2);

    girlNameCell.innerHTML = resultaat.girlName;
    boyNameCell.innerHTML = resultaat.boyName;
    percentageCell.innerHTML = resultaat.percentage + "%";
}


function getData() {
    var girlName = document.getElementById("girlName").value;
    var boyName = document.getElementById("boyName").value;

    var dataBoy = localStorage.getItem("LoveBoy");
    var dataGirl = localStorage.getItem("LoveGirl");
    var resultaat = localStorage.getItem("userData");
    var loveResult = localStorage.getItem("LoveResult");

    if (dataBoy !== null && dataGirl !== null && resultaat !== null) {
        var userDataBoy = JSON.parse(dataBoy);
        var userDataGirl = JSON.parse(dataGirl);
        var userData = JSON.parse(resultaat);

        document.getElementById("girlName").value = userDataGirl.girlName;
        document.getElementById("boyName").value = userDataBoy.boyName;
        document.getElementById("userData").value = userData.userData;
    }

    if (loveResult !== null) {
        var resultaatObj = JSON.parse(loveResult);
        if (
            resultaatObj.girlName === girlName &&
            resultaatObj.boyName === boyName
        ) {
            document.getElementById("result").innerHTML =
                "De jongen: " +
                boyName +
                " en het meisje: " +
                girlName +
                " hebben een percentage van " +
                resultaatObj.percentage +
                "%";
            return; // Stop de functie na het weergeven van het resultaat
        }
    }
    document.getElementById("result").innerHTML = ""; // Leeg resultaat als geen overeenkomst wordt gevonden
}

function clearData() {
    window.location.href = "/games/love/love.html"
}