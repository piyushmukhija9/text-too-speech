
function speakText() {
  let text = document.getElementById("text").value.trim().toLowerCase();

  const customWords = {
    "nikunj": [
      "Nikunj detected... warning: extra drama incoming!",
      "Nikunj: officially outdated like floppy disks.",
      "System alert! Nikunj has been mentioned again... rebooting mood!"
    ],
    "lavi": [
      
      "Lavi... you're not just a name, you're a whole vibe! , you are cool for boring people"
    ],
    "parmeet": [
    "Parmeet has entered the chat. Decency just hit 100%.",
    "Parmeet... calm, composed, and carrying a whole lot of grace.",
    "When Parmeet speaks, even chaos listens silently.",
    "Parmeet detected. Please switch to polite mode instantly.",
    "Parmeet... the only person who can make silence feel peaceful.",
    "Parmeet is here. That’s your daily reminder that class still exists.",
    "Decency alert: Parmeet has been mentioned. Please behave, everyone!"
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
