const assert = require('assert');
const util = require('../lib/util');

describe('Run test', function() {

    it('should run', function() {
        assert.deepStrictEqual(2, 2)
    });

    it('should generate four options', function() {
        const testNumber = 1234
        const options = util.generateOptions(testNumber);

        assert.deepStrictEqual(4, options.length);
    })
});