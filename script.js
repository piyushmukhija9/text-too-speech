function speakText() {
  let text = document.getElementById("text").value;
  if (text.trim() === "") {
    alert("Please enter some text first!");
    return;
  }

  let speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}
