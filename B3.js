const A = [1, 2, 3];

const n = 2;


for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
        if (n === 2) {
            console.log(A[i] + '&' + A[j]);
        } else {
            for (let k = j + 1; k < A.length; k++) {
                console.log(A[i] + '&' + A[j] + '&' + A[k]);
            }
        }
    }
}
