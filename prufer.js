require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"prufer":[function(require,module,exports){
function prufer(a) {
  var tree = [];
  var T = Array.apply(null, Array(a.length + 2)).map(function(_, i) { return i; });
  var deg = Array.apply(null, Array(1*T.length)).map(function() { return 1; });
  a.map(function(i) { deg[i]++; });
  
  for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < T.length; j++) {
      if(deg[T[j]] === 1) {
        tree.push([a[i], T[j]]);
        deg[a[i]]--;
        deg[T[j]]--;
        break;
      }
    }
  }
  
  var last = T.filter(function(x) { return deg[x] === 1; });
  tree.push(last);
  
  return tree;
}

module.exports = prufer;

},{}]},{},[]);
