# Cx-Chrome_extension_speech_app

Speech Recognition Chrome Extension: This Chrome extension allows users to convert speech into text using the browser's microphone. It leverages the Web Speech API to perform speech recognition and provides a simple user interface for starting the recognition process and copying the recognized text to

## NB

I was constantly receiving an error about the permissions, even if no consent screen was shown. The solution was to inject a hidden iframe in the content.js file, as described in [this article](https://medium.com/@lynchee.owo/how-to-enable-microphone-access-in-chrome-extensions-by-code-924295170080).
