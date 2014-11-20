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
