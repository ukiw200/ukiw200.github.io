

function getData() {
    var searchName = document.getElementById("searchName").value;
    var Data = localStorage.getItem(searchName);
    if(Data == null) {
        alert("Name not found!");
    }
    else {
        document.getElementById("result").innerHTML = "gegevens van  " + searchName + " zijn " + Data + " .";
    }
}