const sum = (array) => array.reduce((a, b) => a + b, 0);

const multiply = (array) => array.reduce((a, b) => a * b, 1);

const reverse = (s) => s.split("").reverse().join("");

const filterLongWords = (array, i) => array.filter(word => word.length > i)