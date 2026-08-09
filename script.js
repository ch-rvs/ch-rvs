/* INTRO */
function enterSite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("lockScreen").style.display = "flex";
}

/* PASSWORD */
function checkPass() {
    let p = document.getElementById("pass").value;
    if (p === "130626") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("main").style.display = "block";
        startEverything();
        document.getElementById("music").play();
    } else {
        alert("Wrong password");
    }
}

/* COUNTER */
function updateCounter() {
    let start = new Date("June 13, 2026 00:00:00");
    let now = new Date();

    let diff = now - start;

    let s = Math.floor(diff / 1000) % 60;
    let m = Math.floor(diff / 60000) % 60;
    let h = Math.floor(diff / 3600000) % 24;
    let d = Math.floor(diff / 86400000) % 30;
    let mo = Math.floor(diff / (86400000 * 30)) % 12;
    let y = Math.floor(diff / (86400000 * 365));

    document.getElementById("counter").innerText =
        `${y}y ${mo}m ${d}d ${h}h ${m}m ${s}s`;

    if (new Date().getDate() == 13) {
        document.body.style.background =
            "linear-gradient(45deg,#ff4d6d,#ff99ac)";
    }
}

/* TYPING */
function typeText(el, text, speed = 35) {
    let i = 0;
    function t() {
        if (i < text.length) {
            el.innerHTML += text[i++];
            setTimeout(t, speed);
        }
    }
    t();
}

/* START */
function startEverything() {
    setInterval(updateCounter, 1000);
    updateCounter();

    typeText(
        document.getElementById("note1"),
        "This was the day we officially started going out... the best day of my life. I want to cherish it forever. I love you so much ❤️"
    );

    setTimeout(() => {
        typeText(
            document.getElementById("note2"),
            "Elomi, whatever you're going through... don’t face it alone. Give everything to God. I believe everything will be okay. I'm always here ❤️"
        );
    }, 4000);

    startHearts();
}

/* HEART ANIMATION */
function startHearts() {
    const canvas = document.getElementById("hearts");
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
