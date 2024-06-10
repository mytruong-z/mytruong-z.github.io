const sum = (array) => array.reduce((a, b) => a + b, 0);

const multiply = (array) => array.reduce((a, b) => a * b, 1);

const reverse = (s) => s.split("").reverse().join("");

const filterLongWords = (array, i) => array.filter(word => word.length > i)

const devide = (array) => array.reduce((a, b) => a / b, 1);

/* [10 pts] JavaScript Module: Write a revealing module called CALCULATOR which has a private variable called state and reveals the following public methods which each take a number and do the expected math operation on state with their number: add(num), subtract(num), multiply(num), divide(num). Lastly also add a public method called getState() that returns state.
*/
let CALCULATOR = (function () {
    let state = 0;

    const add = (num) => state += num;
    const subtract = (num) => state -= num;
    const multiply = (num) => state *= num;
    const divide = (num) => state /= num;
    const getState = () => state;

    return {
        add,
        subtract,
        multiply,
        divide,
        getState
    }
})();