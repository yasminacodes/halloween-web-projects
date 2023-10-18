const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const currentDate = new Date();
    const halloweenDate = new Date(currentDate.getFullYear(), 9, 31); // Octubre es el mes 9 porque en JS los meses comienzan en 0.

    // Si Halloween ya pasó, configuramos el contador para el siguiente año.
    if (currentDate > halloweenDate) {
        halloweenDate.setFullYear(halloweenDate.getFullYear() + 1);
    }

    const totalSeconds = (halloweenDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
