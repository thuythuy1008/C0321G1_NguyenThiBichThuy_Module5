function fibonacci(number: number): number {
    if (number <= 2) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let number = 20;
let array = [];
for (let i = 1; i <= number; i++) {
    array.push(fibonacci(i));
}
console.log("Dãy các số fibonacci là: " + array);

let sum = 0;
for (let num of array) {
    sum += num;
}
console.log("Tổng các số fibonacci là: " + sum);