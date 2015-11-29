var $ = function (selector) {
  var elements = [];
  var selectors = selector.split(/(?=\.)|(?=#)/);
  var nodes = getElements(selectors[0]);

  if(selectors.length === 1) {
    return nodes;
  } else {
    excludeNonMatching(nodes, selectors);
  }

  return elements;

  function excludeNonMatching(nodes, selectors) {
    var tempArray = [];
    for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(matchesSelectors(node, selectors)) {
        tempArray.push(node);
      }
    }
    return tempArray;
  }

  function matchesSelectors(node, selectors) {
    var matches= true;
    for(var i = 0; i < selectors.length; i++) {
      if(!matches || !matchesSelector(node, selectors[i])) {
        matches = false;
      }
    }
  }

  function matchesSelector(el, sel) {
    var firstChar = sel.charAt(0);
    switch(firstChar) {
      case '#':
        return sel.substring(1) === el.id;
      case '.':
        return hasClass(el, sel.substring(1));
    }
  }

  function hasClass(el, cls) {
    return el.className && new RegExp("\\s|^" + cls + "\\s|$").test(el.className);
  }

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
