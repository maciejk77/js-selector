var $ = function (selector) {
  var elements = [];
  var selectors = selector.split(/(?=\.)|(?=#)/);
  var nodes = getElements(selectors.shift());

  if(selectors.length === 1) {
    //console.log(selector);
    return nodes;
  } else {
    //console.log('selectors length is longer than one: ' + selector);
    excludeNoneMatching(nodes, selectors)
  }

  return elements;

  function excludeNonMatching(nodes, selectors) {
    var tempArray = [];
    for(var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if(matchesSelectors(el, selectors)) {
        tempArray.push(el);
      }
    }
    return tempArray;
  }

  function hasClass(el, cls) {
    return el.className && new RegExp("\\s|^" + cls + "\\s|$").test(el.className);
  }

  function matchesSelector(el, sel) {
    var firstChar = sel.charAt(0);
    switch(firstChar) {
      case '#':
        return sel.substring(1) === el.attr('id');
      case '.':
        return hasClass(el, sel.substring(1));
    }
  }

  function matchesSelectors(el, selectors) {
    var matches= true;
    for(var i = 0; i < selectors.length; i++) {
      if(!matches || !matchesSelector(el, selectors[i])) {
        matches = false;
      }
    }
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
