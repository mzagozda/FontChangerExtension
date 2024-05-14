chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get("version", function (result) {
      if (result.version) {
        if (result.version < 4) {
          chrome.tabs.create({ url: "/upgraded.html" });
        }
      } else {
        chrome.tabs.create({ url: "/installed.html" });
      }
      chrome.storage.local.set({ version: 4 });
    });
  
    chrome.storage.local.get("installed", function (result) {
      if (!result.installed) {
        chrome.tabs.query({}, function (tabs) {
          for (let tab of tabs) {
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
            }).catch((error) => console.error(`Failed to execute script: ${error}`));
          }
        });
        chrome.storage.local.set({ installed: true });
      }
    });
  });

  