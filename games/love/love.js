function berekenLiefde() {
    var girlName = document.getElementById("girlName").value;
    var boyName = document.getElementById("boyName").value;

    if (girlName === "Joss" && boyName === "Lucas") {
        var percentage = 100;
    } else {
        var percentage = Math.floor(Math.random() * 100) + 1;
    }

    document.getElementById("resultaat").innerHTML = "Jullie liefdespercentage is: " + percentage + "%";
}
