//instructions:
//just copy this whole thing and plug into the admin panel's console in your inspector tools
//there are 2 functions here. one is for grabbing the landing pages, and the other is for grabbing the site pages
//just find which one you want and un-comment. then throw into the console
var onPageData = document.querySelectorAll('#migration-table .url-box:nth-child(2) a');
var urlArray = [];

//copy func
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  var msg;
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
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


//un-comment below for landing pages
/*for (var i = 0; i < onPageData.length; i++) {
  var getSiblings = function () {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for ( ; sibling; sibling = sibling.nextSibling ) {
        if ( sibling.nodeType === 1 && sibling !== elem ) {
            siblings.push( sibling );
        }
    }
    return siblings;
  };
  var elem = onPageData[i].parentNode;
  var siblings = getSiblings(elem);
  if(siblings[3].innerHTML == "landing_page") {
    urlArray.push( siblings[1].childNodes[0].innerHTML );
  }
};
copyTextToClipboard(urlArray.join('\n'));*/
//end un-comment


//un-comment below for site pages
/*for (var i = 0; i < onPageData.length; i++) {
  var getSiblings = function () {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for ( ; sibling; sibling = sibling.nextSibling ) {
        if ( sibling.nodeType === 1 && sibling !== elem ) {
            siblings.push( sibling );
        }
    }
    return siblings;
  };
  var elem = onPageData[i].parentNode;
  var siblings = getSiblings(elem);
  if(siblings[3].innerHTML == "site_page") {
    urlArray.push( siblings[1].childNodes[0].innerHTML );
  }
};
copyTextToClipboard(urlArray.join('\n'));*/
//end un-comment