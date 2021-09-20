// Only change code below this line

var sum = 0
function addThree () {

sum = sum + 3;
console.log("addThree: " + sum)
}
addThree(3);
function addFive () {
sum = sum + 5;
console.log("addFive: " + sum)
}
addFive(8)

// Only change code above this line
module.exports = {
    addThree,
    addFive
};