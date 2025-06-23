function speakText() {
  let text = document.getElementById("text").value.trim().toLowerCase();

  // Custom word-to-speech replacements
  const customWords = {
    "nikunj": "Oops! Did you mean mistake? Just kidding. Hello, lavi!",
    "lavi": "Warning: Lavi is too cool for boring people!",
    "piyush": "Piyush Mukhija is a great developer!",
    "vansh": "oops! its not vansh irts vanshika !",
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

  // ✅ Set rate after creating speech object
  speech.rate = 0.8; // Slow it down
  speech.pitch = 1;  // Optional: keep pitch normal
  speech.volume = 1; // Optional: max volume

  // ✅ Speak
  window.speechSynthesis.cancel(); // Clears previous speech
  window.speechSynthesis.speak(speech);
}
