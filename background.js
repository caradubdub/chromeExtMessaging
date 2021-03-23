console.log("<----- Extension script started running ----->");

window.perfWatch = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  window.perfWatch[sender.tab.id] = message.essential || null;
  console.log("in listener");
});

window.addEventListener("DOMContentLoaded", () => {
  let bg = chrome.extension.getBackgroundPage();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let currentTabId = tabs[0].id;
    let currentPerf = bg.perfWatch[currentTabId];

    // safety check: when page is still loading
    if (!currentPerf) {
      return;
    }
  });
});
