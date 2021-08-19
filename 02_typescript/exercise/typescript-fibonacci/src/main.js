function fibonacci(number) {
    if (number <= 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var number = 20;
var array = [];
for (var i = 1; i <= number; i++) {
    array.push(fibonacci(i));
}
console.log("Dãy các số fibonacci là: " + array);
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var num = array_1[_i];
    sum += num;
}
console.log("Tổng các số fibonacci là: " + sum);
