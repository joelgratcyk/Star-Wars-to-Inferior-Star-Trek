// This function replaces all instances of "Star Wars" with "Inferior Star Trek"
function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(/Star\s*Wars/gi, 'Inferior Star Trek');
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }
  }
}

// Replace the text in the body and h tags of the page
replaceText(document.body);
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(replaceText);

var elements = ['p', 'a', 'span', 'div', 'li'];
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