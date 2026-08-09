// Make sure functions are available globally
window.enterSite = function () {
    const intro = document.getElementById("intro");
    const lock = document.getElementById("lockScreen");

    if (intro && lock) {
        intro.style.display = "none";
        lock.style.display = "flex";
    }
};

// PASSWORD CHECK
window.checkPass = function () {
    const input = document.getElementById("pass");
    const lock = document.getElementById("lockScreen");
    const main = document.getElementById("main");
    const music = document.getElementById("music");

    if (!input) return;

    if (input.value === "130626") {
        lock.style.display = "none";
        main.style.display = "block";

        startEverything();

        // Try playing music (may require user interaction)
        if (music) {
            music.play().catch(() => {});
        }
    } else {
        alert("Wrong password");
    }
};

// COUNTER
function updateCounter() {
    const el = document.getElementById("counter");
    if (!el) return;

    let start = new Date("June 13, 2026 00:00:00");
    let now = new Date();

    let diff = now - start;

    let s = Math.floor(diff / 1000) % 60;
    let m = Math.floor(diff / 60000) % 60;
    let h = Math.floor(diff / 3600000) % 24;
    let d = Math.floor(diff / 86400000) % 30;
    let mo = Math.floor(diff / (86400000 * 30)) % 12;
    let y = Math.floor(diff / (86400000 * 365));

    el.innerText = `${y}y ${mo}m ${d}d ${h}h ${m}m ${s}s`;

    // 13th special color
    if (new Date().getDate() === 13) {
        document.body.style.background =
            "linear-gradient(45deg,#ff4d6d,#ff99ac)";
    }
}

// TYPING EFFECT
function typeText(el, text, speed = 35) {
    if (!el) return;

    el.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.innerHTML += text[i++];
            setTimeout(type, speed);
        }
    }

    type();
}

// START EVERYTHING
function startEverything() {
    updateCounter();
    setInterval(updateCounter, 1000);

    typeText(
        document.getElementById("note1"),
        "This was the day we officially started going out... the best day of my life. I want to cherish it forever. I love you so much ❤️"
    );

    setTimeout(() => {
        typeText(
            document.getElementById("note2"),
            "Elomi, whatever you're going through, don’t face it alone. Give your worries to God. I believe everything will be okay. I'm always here for you ❤️"
        );
    }, 4000);

    startHearts();
}

// HEART ANIMATION
function startHearts() {
    const canvas = document.getElementById("hearts");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    for (let i = 0; i < 30; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 1 + 0.5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(h => {
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
            ctx.fill();

            h.y -= h.speed;
            if (h.y < 0) h.y = canvas.height;
        });

        requestAnimationFrame(draw);
    }

    draw();
}
