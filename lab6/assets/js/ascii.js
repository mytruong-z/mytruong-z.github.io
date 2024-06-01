window.onload = function() {
    "use strict";

    const textArea = document.getElementById("text-area");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const animationCustom = document.getElementById("animation");
    const fontSizeCustom = document.getElementById("fontsize");
    const turboCheckbox = document.getElementById("turbo");

    let animationInterval = null;
    let frameIndex = 0;
    let frames = [];
    const defaultInterval = 250;
    const turboInterval = 50;

    function startAnimation() {
        frames = textArea.value.split("=====\n");
        frameIndex = 0;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        animationCustom.disabled = true;

        const interval = turboCheckbox.checked ? turboInterval : defaultInterval;
        animationInterval = setInterval(() => {
            textArea.value = frames[frameIndex++];
            if (frameIndex === frames.length) frameIndex = 0;
        }, interval);
    }

    function stopAnimation() {
        clearInterval(animationInterval);
        animationInterval = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        animationCustom.disabled = false;
        textArea.value = frames.join("=====\n");
    }

    startBtn.addEventListener("click", startAnimation);
    stopBtn.addEventListener("click", stopAnimation);

    animationCustom.addEventListener("change", function() {
        const selectedAnimation = animationCustom.value;
        textArea.value = ANIMATIONS[selectedAnimation] || "";
    });

    fontSizeCustom.addEventListener("change", function() {
        textArea.style.fontSize = fontSizeCustom.value;
    });

    turboCheckbox.addEventListener("change", function() {
        if (animationInterval) {
            clearInterval(animationInterval);
            const interval = turboCheckbox.checked ? turboInterval : defaultInterval;
            animationInterval = setInterval(() => {
                textArea.value = frames[frameIndex++];
                if (frameIndex === frames.length) frameIndex = 0;
            }, interval);
        }
    });
};
