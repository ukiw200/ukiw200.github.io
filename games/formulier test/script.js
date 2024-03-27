
// data ophalen
function getData() {
    var searchName = document.getElementById("searchName").value;
    var data = localStorage.getItem(searchName);
    if (data == null) {
        alert("Name not found!");
    } else {
        drawChart(JSON.parse(data));
    }
}
// grafiek maken 
function drawChart(data) {
    var ctx = document.getElementById("chart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Object.keys(data),
            datasets: [
                {
                    label: "Data",
                    data: Object.values(data),
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                },
            ],
        },
        options: {},
    });
}
