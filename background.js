chrome.action.onClicked.addListener(function(tab){
    capture(tab)
});
function capture(tabId) {
        chrome.tabs.captureVisibleTab(tabId.windowId, { format: "png" }, function(dataUrl) {
            // console.log(tabId.url)
            // console.log(dataUrl)
            let finalId = makeid(12)
            const data = {
                message : dataUrl,
                siteURl : tabId.url,
                finalId 
              };
              chrome.tabs.create({ url: 'https://snip-ped.com/ImageEdit/'+finalId,index: tabId.index + 1,});
              fetch('https://us-central1-snipped-c9bf4.cloudfunctions.net/app/post64', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
              
        });
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}