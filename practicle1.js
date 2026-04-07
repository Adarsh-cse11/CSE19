getelementbyid("number").value
function generateTable() {
    var number = document.getElementById("number").value;
    var table = "<table border='1'><tr><th>Multiplication</th></tr>";
    for (var i = 1; i <= 10; i++) {
        table += "<tr><td>" + number + " x " + i + " = " + (number * i) + "</td></tr>";
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
}