chrome.tabs.onUpdated.addListener((tabId, tab)=>{
    if(tab.url&& tab.url.include("app.slack.com/client")){
      const queryParameters = tab.url.split('client/')[1];
      const urlParameters = new URLSearchParams(queryParameters)
      console.log("here is URLPARAMS: ", urlParameters)
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v")
      })
    }
  })
  chrome.tabs.onUpdated.addListener(1, "https://app.slack.com/client/T024FPYBQ/C045FP9J77C")