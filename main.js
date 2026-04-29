function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("h1").textContent = hours[0];
    document.getElementById("h2").textContent = hours[1];

    document.getElementById("m1").textContent = minutes[0];
    document.getElementById("m2").textContent = minutes[1];

    document.getElementById("s1").textContent = seconds[0];
    document.getElementById("s2").textContent = seconds[1];
}

function updateDay() {
    const gunler = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];

    const today = new Date().getDay();
    document.getElementById("day").textContent = gunler[today];
}

setInterval(() => {
    updateClock();
    updateDay();
}, 1000);

updateClock();
updateDay();