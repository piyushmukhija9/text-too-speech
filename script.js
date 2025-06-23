function speakText() {
  let text = document.getElementById("text").value.trim().toLowerCase();

  // Custom word-to-speech replacements
  const customWords = {
    "nikunj": "why why i just want to ask why nikunj!",
    "bye": "Goodbye, take care!",
    "piyush": "Piyush Mukhija is a great developer!",
    "ai": "Artificial Intelligence is the future!",
    "thanks": "You're welcome!"
  };

  // Check if custom speech exists
  if (customWords[text]) {
    text = customWords[text];
  }

  if (text === "") {
    alert("Please enter some text first!");
    return;
  }

  let speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}
