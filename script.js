document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("initial-loader");
    var mainBody = document.getElementById("main-body");
    var glitchText = document.getElementById("glitch-text");

    // Glitchy Typing Effect
    var text = "Welcome...";
    glitchText.innerHTML = "";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            glitchText.innerHTML += text[index];
            index++;
            setTimeout(typeEffect, 125);
        } else {
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                    mainBody.style.opacity = "0.5";
                    mainBody.style.animation = "glitchFadeIn 1.5s ease-in-out forwards";
                }, 800);
            }, 1000);
        }
    }

    typeEffect();
});
