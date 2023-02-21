
chrome.tabs.onUpdated.addListener((tabId,changeInfo, tab)=>{
  console.log("this is change info" , changeInfo)
   if(tab.url && tab.url.includes("app.slack.com/client")){
        const getChannelName = (tabUrl)=>{
          let preUrl = tabUrl.split('client/')[1]
          let channelName = preUrl.split('/')[1]
          return channelName
        }
        const channelName = getChannelName(tab.url)
      // console.log("the channel name is: ", channelName)
      // console.log("I SEE THE TABB DUDES AND DUDETTEssssS", tab.url)
      // chrome.tabs.sendMessage(tabId, {
      //   type: "NEW",
      //   channelIdL: channelName
      // })
    
    }
    // chrome.storage.local.get(["token"]).then((result) => {
    //   console.log("Value currently is this from background " + result.key);
    // });
  })
  