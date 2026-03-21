# Text to Speech with Custom Phrases

A lightweight web application that converts text to speech using the Web Speech API. The application includes a "Custom Words" feature that triggers specific randomized responses and background color changes for certain names.

---

## Features

* **Text-to-Speech:** Converts any typed input into spoken audio.
* **Custom Responses:** Specialized phrases for specific names:
    * **Nikunj:** Sarcastic warnings and system alerts.
    * **Lavi:** Positive vibes (triggers a background color change).
    * **Parmeet:** Respectful and calm compliments.
    * **Sonakshi:** Positive vibe responses.
* **Dynamic UI:** The background gradient changes when specific keywords are detected.
* **Speech Controls:** Optimized speech rate (0.8) and pitch for clear delivery.

---

## Files Included

1.  **index.html**: The structure of the application, including the text area and speak button.
2.  **style.css**: The styling for the interface, featuring a centered container and gradient backgrounds.
3.  **script.js**: The logic for handling text input, selecting custom phrases, and executing the Speech Synthesis.

---

## How to Use

1.  Open the `index.html` file in any modern web browser.
2.  Type a message into the text area.
3.  Click the **Speak** button.
4.  To see the custom features, type one of the following names:
    * Nikunj
    * Lavi
    * Parmeet
    * Sonakshi

---

## Technical Details

* **Language:** HTML5, CSS3, JavaScript (ES6).
* **API:** Web Speech API (`window.speechSynthesis`).
* **Logic:** The script uses an object to map keywords to arrays of strings, selecting a random response using `Math.random()`.

---

## Browser Support

This project requires a browser that supports the Web Speech API, such as:
* Google Chrome
* Microsoft Edge
* Safari
* Firefox (Limited support for some voices)
