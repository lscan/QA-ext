var copySandboxBtn = document.querySelector('.js-copy-sandbox-btn'),
  copyLiveBtn = document.querySelector('.js-copy-live-btn');



copySandboxBtn.addEventListener('click', function(event) {
  chrome.tabs.executeScript({file:"contentscript2.js"});
  
});

copyLiveBtn.addEventListener('click', function(event) {
  chrome.tabs.executeScript({file:"contentscript.js"});
  });

