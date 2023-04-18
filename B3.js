function combination(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return combination(n - 1, k - 1) + combination(n - 1, k);
    }
}

function countPairs(A, n) {
    let pairs = [];
    let numPairs = combination(n, 2);
    let k = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            pairs.push([A[i], A[j]]);
            k++;
        }
    }
    console.log("Kết quả có", numPairs, "cặp số:");
    for (let i = 0; i < pairs.length; i++) {
        console.log(pairs[i][0] + "&" + pairs[i][1]);
    }
}


let A = [1, 2, 3 , 4];
let n = A.length;
countPairs(A, n);
