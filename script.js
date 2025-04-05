document.addEventListener("DOMContentLoaded", function() {
    // Simulate boot screen
    setTimeout(function() {
        document.getElementById("boot-screen").classList.add("hidden");
        document.getElementById("home-screen").classList.remove("hidden");
    }, 3000); // Boot screen lasts 3 seconds

    // App navigation
    document.getElementById("settings-app").addEventListener("click", function() {
        navigateTo("settings-screen");
    });

    document.getElementById("appstore-app").addEventListener("click", function() {
        navigateTo("appstore-screen");
    });

    document.getElementById("support-app").addEventListener("click", function() {
        navigateTo("support-screen");
    });

    document.querySelectorAll(".back-button").forEach(button => {
        button.addEventListener("click", function() {
            navigateTo("home-screen");
        });
    });

    document.querySelectorAll(".game-button").forEach(button => {
        button.addEventListener("click", function() {
            const game = button.getAttribute("data-game");
            loadGame(game);
            navigateTo("game-screen");
        });
    });

    function navigateTo(screenId) {
        document.querySelectorAll("body > div").forEach(screen => {
            screen.classList.add("hidden");
        });
        document.getElementById(screenId).classList.remove("hidden");
    }

    function loadGame(game) {
        const gameContainer = document.getElementById("game-container");
        gameContainer.innerHTML = ''; // Clear previous game
        const script = document.createElement("script");
        script.src = `${game}.js`;
        gameContainer.appendChild(script);
    }
});
