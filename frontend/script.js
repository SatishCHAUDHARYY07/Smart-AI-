function analyze() {
  const file = document.getElementById("imageInput").files[0];

  if (!file) {
    alert("Upload image first");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById("preview");
    preview.src = e.target.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);

  document.getElementById("resultText").innerText =
    "🌿 Disease detected\n💊 Use pesticide\n🌱 Take proper care";
}

// VOICE
function speakResult() {
  const text = document.getElementById("resultText").innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  window.speechSynthesis.speak(speech);
}

// CHATBOT
document.getElementById("chatbotBtn").onclick = () => {
  const box = document.getElementById("chatbox");
  box.style.display = box.style.display === "none" ? "block" : "none";
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if (!input.value) return;

  chatBody.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  chatBody.innerHTML += `<p><b>Bot:</b> Try using organic fertilizers 🌱</p>`;

  input.value = "";
}