<html>
<head>
  <title>Shimray</title>

  <style>
    body {
      margin: 0;
      font-family: Arial;
      background: linear-gradient(135deg, #0f2027, #2c5364);
      color: white;
      text-align: center;
    }

    header {
      padding: 20px;
      font-size: 24px;
      background: rgba(0,0,0,0.5);
    }

    img {
      width: 150px;
      border-radius: 50%;
      margin-top: 20px;
      border: 3px solid cyan;
    }

    .chatbox {
      margin: 30px auto;
      width: 90%;
      max-width: 400px;
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 10px;
    }

    .messages {
      height: 150px;
      overflow-y: auto;
      text-align: left;
      padding: 10px;
      background: rgba(0,0,0,0.3);
      border-radius: 10px;
    }

    input {
      width: 70%;
      padding: 10px;
      border: none;
      border-radius: 10px;
      margin-top: 10px;
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 10px;
      background: cyan;
      cursor: pointer;
    }
  </style>
</head>

<body>

<header> Shimray's Website</header>

<h2>Welcome </h2>

<!-- 🖼️ PROFILE IMAGE -->
<img src="https://ibb.co/HpVJ9dFs" alt="profile">

<p>This is my interactive website </p>

<!-- 💬 CHATBOX -->
<div class="chatbox">
  <div class="messages" id="messages"></div>

  <input type="text" id="msg" placeholder="Type message...">
  <button onclick="sendMsg()">Send</button>
</div>

<script>
function sendMsg() {
  let input = document.getElementById("msg");
  let message = input.value;

  if(message.trim() === "") return;

  let chat = document.getElementById("messages");

  chat.innerHTML += "<p> You: " + message + "</p>";

  // Simple bot reply
  setTimeout(() => {
    chat.innerHTML += "<p> Bot: Nice message </p>";
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
</script>

</body>
</html>
