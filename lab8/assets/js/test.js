describe('Exercise 1', function() {
    it('should remove banned words from the string', function() {
        const result = "This house is not nice!".filter(['not']);
        assert.equal(result, "This house is nice!");
    });
});

describe('Exercise 2', function() {
    it('should sort the array in ascending order', function() {
        const result = [6, 4, 0, 3, -2, 1].bubbleSort();
        assert.deepEqual(result, [-2, 0, 1, 3, 4, 6]);
    });
});

describe('Exercise 3', function() {
    it('should allow a teacher to tech a subject', function() {
        const teacher = new Teacher();
        teacher.initialize("David", 29);
        const result = teacher.teach("WAP");
        assert.equal(result, "David is now teaching WAP");
    });

    it('should allow a student to learn a subject', function() {
        const student = new Student();
        student.initialize("John", 25);

        let result = "";
        const storeLog = inputs => (result += inputs);
        console["log"] = storeLog;

        student.learn("Inheritance");
        assert.equal(result, "John just learned Inheritance");
    });
});
