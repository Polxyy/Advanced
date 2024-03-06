function ar(input) {
    let arr = []
    let inc = 0;
    for (let el of input) {
        if (el == 'add') {
            arr.push(1 + inc);
            inc++
        }
        else {
            arr.pop();
            inc++
        }
    }

    if (arr.length > 0) {
        for (let el of arr) {
            console.log(el);
        }
    }
    else{
        console.log('Empty');
    }
}


ar(['add', 'remove', 'add'])