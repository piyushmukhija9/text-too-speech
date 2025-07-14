
function speakText() {
  let text = document.getElementById("text").value.trim().toLowerCase();

  const customWords = {
    "nikunj": [
      "Nikunj detected... warning: extra drama incoming!",
      "Nikunj: officially outdated like floppy disks.",
      "System alert! Nikunj has been mentioned again... rebooting mood!"
    ],
    "lavi": [
      "Lavi entered the chat... brace for sarcasm and snacks!",
      "Lavi, your name means light — but your vibe is full sunshine!",
      "Lavi... you're not just a name, you're a whole vibe!"
    ]
  };

  if (customWords[text]) {
    const phrases = customWords[text];
    text = phrases[Math.floor(Math.random() * phrases.length)];

    if (text.includes("Lavi")) {
      document.body.style.background = "linear-gradient(to right, pink, lightblue)";
    }
  }

  if (text === "") {
    alert("Please enter some text first!");
    return;
  }

  let speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.8;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}
