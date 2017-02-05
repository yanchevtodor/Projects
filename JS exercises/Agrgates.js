function reduce (arr, func) {
    let result = arr[0];
    for (let nextNumber of arr.slice(1)){
        result = func(result, nextNumber);

    }
    return result;
}
console.log(36*0.05);console.log(5*0.36);