function increase(arr) {
    let currentBiggest = -9999999999;
    function flt(a) {
        if (a >= currentBiggest) {
            currentBiggest = a;
            return true;
        }
        else {
            return false;
        }
    }
    return arr.filter(flt)
    
}





console.log(increase([-3, -2, 1, 3,3, 8, 4, 10, 12, 3, 2, 24]))
increase([, 1, 2, 3, 4]);
increase([20, 3, 2, 15, 6, 1]);