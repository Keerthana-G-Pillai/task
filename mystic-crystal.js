const crystalBall = document.getElementById("crystalBall");
const fortuneButton = document.getElementById("fortuneButton");
const predictionText = document.getElementById("predictionText");

const predictions = [
    "A surprising opportunity is waiting for you at the event.",
    "The stars predict that you will meet someone important today.",
    "Your next decision may lead to an unforgettable adventure.",
    "Fortune favors the bold. Take a chance.",
    "Someone at this event has been waiting to meet you.",
    "A mysterious twist awaits you before the night is over.",
    "The crystal sees laughter, chaos, and great memories.",
    "Your luck is glowing brighter than the crystal itself.",
    "A secret opportunity will reveal itself when you least expect it.",
    "Tonight, fate is definitely on your side."
];

fortuneButton.addEventListener("click", () => {

    crystalBall.classList.remove("spinning");

    // Restart animation
    void crystalBall.offsetWidth;

    crystalBall.classList.add("spinning");

    predictionText.textContent = "The crystal is consulting the stars...";

    fortuneButton.disabled = true;

    setTimeout(() => {

        const randomIndex =
            Math.floor(Math.random() * predictions.length);

        predictionText.textContent =
            predictions[randomIndex];

        fortuneButton.disabled = false;

    }, 1300);

});


crystalBall.addEventListener("click", () => {

    fortuneButton.click();

});
