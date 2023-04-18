function test(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return test(n - 1) + test(n - 2);
    }
}

console.log("Số Fibonacci thứ n : " + test(n));

