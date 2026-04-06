let fontSize = 20;

function changeHeading() {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = text;
}

function changeBackground() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");
    para.style.display = para.style.display === "none" ? "block" : "none";
}

function resetPage() {
    location.reload();
}