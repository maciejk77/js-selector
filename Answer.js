var $ = function (selector) {
  var elements = [];
  var selectors = selector.split(/(?=\.)|(?=#)/);
  var nodes = getElements(selectors[0]);

  if(selectors.length === 1) {
    return nodes;
  } else {
    console.log('selectors length is longer than one: ' + selector);
  }

  return elements;

function getElements(selector) {
  var result = [];
  if(selector.charAt(0) === '#') {
    result = document.getElementById(selector.substring(1));
  } else if (selector.charAt(0) === '.') {
    result = document.getElementsByClassName(selector.substring(1));
  } else {
    result = document.getElementsByTagName(selector);
  }
  return result
}

}