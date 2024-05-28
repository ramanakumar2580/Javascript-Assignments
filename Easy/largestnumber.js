function findLargestNumber(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
const numbers = [12, 24, 45, 60, 345];
const largest = findLargestNumber(numbers);
console.log("The largest number is :", largest);