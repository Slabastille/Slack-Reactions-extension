
document.getElementById("button").addEventListener('click',()=>{
    let token = document.getElementById("token").value;
    chrome.storage.local.set({ token: token }).then(() => {
        console.log("Value is set to " + token);
      });
    //alert(token)
}

)

