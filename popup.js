document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start").addEventListener("click", () => {
    console.log("Requesting microphone permission");
    sendMessageToActiveTab("requestMicrophonePermission");
    window.close();
  });
});
