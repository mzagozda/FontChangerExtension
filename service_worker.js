var EXTENSION_VERSION = 4;

function isInjectableTab(tab) {
  return !!(tab && tab.id && tab.url && /^https?:\/\//.test(tab.url));
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("version", function (result) {
    var previousVersion = result && result.version;
    if (previousVersion) {
      if (previousVersion < EXTENSION_VERSION) {
        chrome.tabs.create({ url: chrome.runtime.getURL("/upgraded.html") });
      }
    } else {
      chrome.tabs.create({ url: chrome.runtime.getURL("/installed.html") });
    }
    chrome.storage.local.set({ version: EXTENSION_VERSION });
  });

  chrome.storage.local.get("installed", function (result) {
    if (result && result.installed) {
      return;
    }
    chrome.tabs.query({}, function (tabs) {
      if (!tabs || !tabs.length) {
        return;
      }
      tabs.forEach(function (tab) {
        if (!isInjectableTab(tab)) {
          return;
        }
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["js/cs.js"],
        });
      });
    });
    chrome.storage.local.set({ installed: true });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.msg === "getActiveTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs.length > 0) {
        sendResponse({ tab: tabs[0] });
      } else {
        sendResponse({ error: "No active tab found." });
      }
    });
    return true;
  }
});
