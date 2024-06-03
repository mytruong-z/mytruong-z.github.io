// tests.js

describe('Array and String functions', function() {

    describe('sum()', function() {
        it('should return the sum of all numbers in the array', function() {
            assert.equal(sum([1, 2, 3, 4]), 10);
            assert.equal(sum([0, -1, -2]), -3);
        });
    });

    describe('multiply()', function() {
        it('should return the product of all numbers in the array', function() {
            assert.equal(multiply([1, 2, 3, 4]), 24);
            assert.equal(multiply([2, 5, 0]), 0);
        });
    });

    describe('reverse()', function() {
        it('should return the reversed string', function() {
            assert.equal(reverse('hello'), 'olleh');
            assert.equal(reverse('world'), 'dlrow');
        });
    });

    describe('filterLongWords()', function() {
        it('should return words longer than the given length', function() {
            assert.deepEqual(filterLongWords(['my', 'truong', 'is'], 4), ['truong']);
            assert.deepEqual(filterLongWords(['a', 'ab', 'abc', 'abcd'], 2), ['abc', 'abcd']);
        });
    });

});
