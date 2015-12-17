
//declare variables for Sandbox and Live copy buttons to add event listener later
//for click
var copySandboxBtn = document.querySelector('.js-copy-sandbox-btn'),
  copyLiveBtn = document.querySelector('.js-copy-live-btn');

//declare variables to store draft and live URL count
var liveUrlCount;
var draftUrlCount;
//execute contentscript2.js on button click
copySandboxBtn.addEventListener('click', function(event) {
  chrome.tabs.executeScript({file:"contentscript2.js"});
});

//execute contentscript.js on button click
copyLiveBtn.addEventListener('click', function(event) {
  chrome.tabs.executeScript({file:"contentscript.js"});
  });

//add listener to handle messaging from content scripts
chrome.runtime.onMessage.addListener(function(request, sender){
    //grabs the items from the array and assigns them to the variables
    liveUrlCount = request.message[0];
    draftUrlCount = request.message[1];
    msg = request.message[2];
    //console.log values for QA
    console.log(request.message[0]);
    console.log(request.message[1]);
    console.log(request.message[2]);
    //traverse DOM of popup.html and add the values to the divs
    document.querySelector('.liveUrlCount').innerHTML = liveUrlCount;
    document.querySelector('.draftUrlCount').innerHTML = draftUrlCount;

    if (msg === "script two") {
      document.querySelector('.js-copy-sandbox-btn').innerHTML = "Copied!";
    } else if (msg === "script one") {
      document.querySelector('.js-copy-live-btn').innerHTML = "Copied!";
    }
    else {
      console.log('copying not successful');
    }
});
