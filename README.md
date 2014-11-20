prufer
======

Implements the Prüfer sequence algorithm in pure javascript, for space-efficient representation of trees using  a unique sequence. Useful for generating random trees of data.

```js
var prufer = require('prufer');

// to make a tree, supply a series of integers
var tree = prufer([3, 3, 3, 4]);

// you'll get back an array of edges
console.log(tree);
// --> [[3, 0], [3, 1], [3, 2], [4, 3], [4, 5]]
```

Installing
-------------

  npm install prufer
  
For the browser, use `prufer.js`:

```html
<script src="prufer.js"></script>
<script>
  var prufer = require('prufer');
  prufer([3, 3, 3, 4]);
</script>
```

Running Tests
-------------

Make sure you have Mocha installed:

    npm install -g mocha
    npm test

Reporting Bugs & Feature Requests
-------------
Please use github to report all bugs and feature requests at <http://github.com/jleppert/prufer/issues>.


Further Reading
-------------
[Prüfer sequence Wikipedia](http://en.wikipedia.org/wiki/Pr%C3%BCfer_sequence)

[Python Version & Good Overview](http://hamberg.no/erlend/posts/2010-11-06-prufer-sequence-compact-tree-representation.html)

License
-------------
Copyright (c) 2014 Johnathan Leppert <johnathan.leppert@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
