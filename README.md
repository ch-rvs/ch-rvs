<html>
<head>
    <title>Us</title>

    <style>
        body {
            background: black;
            color: white;
            text-align: center;
            font-family: Arial;
            padding: 40px;
        }

        h1 {
            font-size: 30px;
        }

        .counter {
            font-size: 40px;
            margin-top: 20px;
        }

        .message {
            margin-top: 20px;
            color: #ccc;
        }

        img {
            width: 280px;
            border-radius: 15px;
            margin-top: 30px;
        }

        #special {
            margin-top: 25px;
            color: #f2a7a7;
            display: none;
        }

        button {
            margin-top: 30px;
            padding: 10px 20px;
            border: none;
            background: white;
            color: black;
            border-radius: 8px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <h1>Our Time Together</h1>

    <div class="counter" id="days"></div>

    <p class="message">Since 13 June 2026</p>

    <img src="https://raw.githubusercontent.com/ch-rvs/ch-rvs/main/IMG_2620.jpeg">

    <p id="special">Today is our day.</p>

    <button onclick="enableNotifications()">Enable Reminder</button>

<script>

    // 📅 Start date
    const startDate = new Date("June 13, 2026");

    function updateCounter() {
        const today = new Date();
        const diff = today - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        document.getElementById("days").innerText = days + " days";

        // 🎯 Monthly check (13th)
        if (today.getDate() === 13) {
            document.getElementById("special").style.display = "block";

            // 🔔 Show notification if allowed
            if (Notification.permission === "granted") {
                new Notification("Today is your special day");
            }
        }
    }

    updateCounter();
    setInterval(updateCounter, 1000);

    // 🔔 Ask permission
    function enableNotifications() {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                alert("Notifications enabled");
            }
        });
    }

</script>

</body>
</html>
