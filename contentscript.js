
//declares the variable for the URL of the migration pages and establishes the array 
var onPageData1 = document.querySelectorAll('#migration-table .url-box:nth-child(2) a');
var sandboxArray = [];
var liveUrlCount = 0; 
var draftUrlCount = 0;
var scriptMsg ="script one";

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  var msg;

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);2
};

/* For loop cycles through onPageData2[i] as well as cycling through 
sibling element sibling[2] (which === 'draft-box'). 
If siblings[2].innerHTML === 'true', then the innerHTML of the onPageData2 iteration is
pushed to liveArray[];
*/
for (var i = 0; i < onPageData1.length; i++) {
  console.log(onPageData1[i].innerHTML);
  // This function is essentially the .siblings() method from jQuery using vanilla js
  var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for ( ; sibling; sibling = sibling.nextSibling ) {
        if ( sibling.nodeType === 1 && sibling !== elem ) {
            siblings.push( sibling );
        }
    }
    return siblings;
  };

  // declares the elem variable as onPageData2[i] and moves the target element up a level 
  // in the DOM to the parent element
  var elem = onPageData1[i].parentNode;
  var siblings = getSiblings(elem);
  //if statement to qualify whether the URL is in draft mode or live. It check the 
  //inner html of the array item siblings[2] which equates to the .draft-box of the current iteration
  if (siblings[2].innerHTML === 'false'){
    //this method pushes the contents of the current onPageData2 iteration to the array
    sandboxArray.push(onPageData1[i].innerHTML);
    console.log(sandboxArray.toString());
    liveUrlCount++;
    console.log(liveUrlCount);
  }
  else {
    console.log('draft');
    draftUrlCount++;
  }
};

//This function copies the text to the clipboard and joins the results of the array, 
// removing commas and adding a return line break       
copyTextToClipboard(sandboxArray.join('\n'));

//put liveUrlCount and draftUrlCount into an array so that we can get the values
// in the popup.js file using message[0] and message[1]
var urlArray = [liveUrlCount, draftUrlCount, scriptMsg];

//pass urlArray through chrome messaging to send to popup.js
chrome.runtime.sendMessage({message: urlArray}, function(response){
  console.log(response);
});
