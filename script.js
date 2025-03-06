let intervalId; // Stocke l'ID du setInterval

document.getElementById("start").addEventListener("click", function () {
    let values = document.getElementById("values").value.split(",");
    let intervalTime = parseInt(document.getElementById("interval").value) * 1000;

    if (values.length < 2 || isNaN(intervalTime) || intervalTime <= 0) {
        alert("Veuillez entrer au moins deux valeurs et un temps valide.");
        return;
    }

    clearInterval(intervalId); // Empêcher les doublons de tirage  
    intervalId = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * values.length);
        document.getElementById("result").textContent = values[randomIndex].trim();
    }, intervalTime);
});

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(intervalId);
    document.getElementById("result").textContent = "???";
});
