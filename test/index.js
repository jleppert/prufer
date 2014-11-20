var should 		 = require('chai').should(),
	path	     = require('path'),
	fs           = require('fs');

var prufer = require('../index');

describe('The prufer function', function(){
	it('should generate a basic prufer sequence', function(){
      prufer([3, 3, 3, 4]).should.deep.equal([[3, 0], [3, 1], [3, 2], [4, 3], [4, 5]]);
    });
});