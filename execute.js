const rotateEvent = () => {
  document.body.style.transform = 'rotate(180deg)';
};
const reset = () => {
  document.body.style.transform = '';
}

const onMessage = (message) => {
  switch (message.action) {
    case 'ROTATE':
      rotateEvent();
      break;
    case 'RESET':
      reset();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("received: " + request);
    sendResponse("message has been processed by background page");
});

// in content script injected into website page
document.addEventListener("copy", () =>
    chrome.runtime.sendMessage(
        { event: "click" },
        msg => console.log(msg)));