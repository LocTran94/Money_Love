let A = [1,2,3,5,6,10,8,7,11,15,19,40];

function test(arr){
    let resolve = [];
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 2) {
            for (let j = 2; j < arr[i]; j++) {
                if(arr[i] % j === 0) flag = false
            }
            if (flag === true) resolve.push(arr[i])
        }
        flag = true

    }
    return resolve.sort((a,b)=> a - b)
}

console.log(test(A))

