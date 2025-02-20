function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Transcription result: ", transcript);
        sendMessageToCurrentWindow("transcriptionResult", transcript);
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: ", event);
        sendMessageToCurrentWindow("recognitionError", event);
    };

    recognition.onend = () => {
        console.log("Recognition ended");
        sendMessageToCurrentWindow("recognitionEnded");
    };

    recognition.start();
    console.log("Recognition started");
    sendMessageToCurrentWindow("recognitionStarted");
}