var $ = function (selector) {
  var elements = [];
  var selectors = selector.split(/(?=\.)|(?=#)/);
  var nodes = getElements(selectors[0]);
  elements = nodes;

  if (selectors.length === 1) {
    return nodes;
  } else {
    var matches = [];
    
    for (var s = 1; s < selectors.length; s++) {
      matches.push(getElements(selectors[s]));
      
      for (var e = 0; e < elements.length; e++) {
        if (matches.indexOf(elements[e]) === -1) {
          var result = Array.prototype.slice.call(elements, e);
        }
      }
    }
  return result;
  }
  //return elements;

  function getElements(selector) {
    var result = [];
    var firstChar = selector.charAt(0);
    switch(firstChar) {
      case '#':
        result = [document.getElementById(selector.substring(1))];
        break;    
      case '.':
        result = document.getElementsByClassName(selector.substring(1));
        break;
      default:
        result = document.getElementsByTagName(selector);
    }
    return result;
  }
}
