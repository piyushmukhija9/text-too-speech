function speakText() {
  let text = document.getElementById("text").value.trim().toLowerCase();

  // Custom word-to-speech replacements
  const customWords = {
    "nikunj": "Oops! Did you mean mistake? Just kidding. Hello, Nikunj!",
    "lavi ": "Warning: Lavi is too cool for boring people!",
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
speech.rate = 0.8; // 1 is default, 0.5 is slower, 2 is fast

}
