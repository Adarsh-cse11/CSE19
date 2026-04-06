function calculateResult() {

    let n = document.getElementById("numSubjects").value;
    let total = 0;

    if (n == "" || n <= 0) {
        alert("Please enter valid number of subjects");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let marks = Number(prompt("Enter marks for subject " + i + ":"));

        if (marks < 0 || marks > 100) {
            alert("Marks should be between 0 and 100");
            return;
        }

        total += marks;
    }

    let percentage = total / n;
    let grade;

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 75) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Grade: " + grade;
}
