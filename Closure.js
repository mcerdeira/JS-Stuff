function MakeCounter(count) {
    return function () {
        return count++;
    }
}

var counter = MakeCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); // 9
