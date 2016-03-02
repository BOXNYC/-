
/**
 * j$ - By Jo$eph Weitzel
 **/

var j$ = function(selector) {
  if(typeof selector === 'function') {
    document.addEventListener("DOMContentLoaded", function(event) {
      selector.call(document);
    });
    return;
  };
  var nodes = typeof selector === 'string' ?
      document.body.querySelectorAll(selector) :
      [selector];
  if(nodes.length) for(var i=0; i < nodes.length; i++) this[i] = nodes[i];
  else if(selector) this[0] = selector;
  this.length = nodes.length;
  this.each = function(func) {
    for(var i=0; i < nodes.length; i++) func.call(nodes[i], i, nodes[i]);
    return this;
  };
  this.index = function(){
    var i = 1;
    while(node=node.previousSibling) if(node.nodeType===1) ++i
    return i;
  };
  this.html = function(html){
    if(html) {
      for(var n in nodes) this[n].innerHTML = html;
      return this;
    }
    return nodes.length ? nodes[0].innerHTML : '';
  };
  function classArray(className) {
    return className.replace(/^\s*|\s*$/g, '').split(/\s{1,}/g);
  }
  function arrayRemove(array, item) {
    var index = array.indexOf(item);
    if(index > -1) array.splice(index, 1);
    return array;
  }
  this.addClass = function(cl, remove){
    for(var n in nodes) {
      var classes = classArray(nodes[n].className);
      !remove ? classes.push(cl) : arrayRemove(classes, cl);
      this[n].className = classes.join(' ');
    }
    return this;
  };
  this.removeClass = function(cl){
    return this.addClass(cl, true);
  };
  this.attr = function(attr, val){
    console.log(attr);
    if(typeof attr !== 'object') attr = {attr: val}
    for(var a in attr) for(var n in nodes) nodes[n].setAttribute(a, attr[a]);
    return this;
  };
},
$ = function(selector){
  return new j$(selector);
};
