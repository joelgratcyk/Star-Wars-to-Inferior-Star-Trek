chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title.replace(/Star Wars/gi, 'Inferior Star Trek');
        chrome.tabs.executeScript(tab.id, {
          code: 'document.title = "' + title + '";'
        });
      });

      var elements = ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span', 'div', 'li'];
      elements.forEach(function(element) {
        var regex = new RegExp('Star Wars', 'gi');
        var elementsOfType = document.getElementsByTagName(element);
        for (var i = 0; i < elementsOfType.length; i++) {
          var elementText = elementsOfType[i].textContent;
          if (regex.test(elementText)) {
            var newElementText = elementText.replace(regex, 'Inferior Star Trek');
            elementsOfType[i].textContent = newElementText;
          }
        }
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    var title = tab.title.replace(/Star Wars/gi, 'Inferior Star Trek');
    chrome.tabs.executeScript(tab.id, {
      code: 'document.title = "' + title + '";'
    });
  });

  var elements = ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span', 'div', 'li'];
  elements.forEach(function(element) {
    var regex = new RegExp('Star Wars', 'gi');
    var elementsOfType = document.getElementsByTagName(element);
    for (var i = 0; i < elementsOfType.length; i++) {
      var elementText = elementsOfType[i].textContent;
      if (regex.test(elementText)) {
        var newElementText = elementText.replace(regex, 'Inferior Star Trek');
        elementsOfType[i].textContent = newElementText;
      }
    }
  });
});

// Modify the title of the page
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var tab = tabs[0];
  var title = tab.title.replace(/Star Wars/gi, 'Inferior Star Trek');
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      document.title = title;
    }
  }, () => {
    chrome.tabs.update(tab.id, {title: title});
  });
});
