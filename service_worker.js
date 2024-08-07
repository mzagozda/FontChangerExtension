chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("version", function (result) {
    if (result.version) {
      if (result.version < 4) {
        chrome.tabs.create({ url: chrome.runtime.getURL("/upgraded.html") });
      }
    } else {
      chrome.tabs.create({ url: chrome.runtime.getURL("/installed.html") });
    }
    chrome.storage.local.set({ version: 4 });
  });

  chrome.storage.local.get("installed", function (result) {
    if (!result.installed) {
      chrome.tabs.query({}, function (tabs) {
        for (let tab of tabs) {
          if (!tab.url.startsWith("chrome://") && !tab.url.startsWith("chrome-extension://")) {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              files: ["js/cs.js"]
            }).then(() => {
              chrome.tabs.sendMessage(tab.id, {msg: "style", value: "someValue"}, function(response) {
                if (chrome.runtime.lastError) {
                  console.error(chrome.runtime.lastError.message);
                } else {
                  console.log("Response:", response);
                }
              });
            }).catch((error) => {});
          }
        }
      });
      chrome.storage.local.set({ installed: true });
    }
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg === "getActiveTab") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs && tabs.length > 0) {
        sendResponse({tab: tabs[0]});
      } else {
        sendResponse({error: "No active tab found."});
      }
    });
    return true;
  }
});
