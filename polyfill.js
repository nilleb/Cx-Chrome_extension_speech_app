function addListener(listener) {
    chrome.runtime.onMessage.addListener(listener);
}

function sendMessageToActiveTab(action, data) {
    console.log({chrome});
    try {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: action, data: data });
        });
    } catch (error) {
        console.error("Error sending message to active tab: ", error);
    }
}

function sendMessageToCurrentWindow(action, data) {
    try {
        chrome.runtime.sendMessage({ action: action, data: data });
    } catch (error) {
        console.error("Error sending message to current window: ", error);
    }
}
