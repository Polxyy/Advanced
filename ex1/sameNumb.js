function samenum(first){
    let farr = first.toString().split(''); 
    let mp = new Set(farr);    
    if(mp.size>=2){
        console.log(false);
    }
    else{
        console.log(true);
    }
    let numArr = farr.map(str =>  Number(str));
    let sum=numArr.reduce((accumulator, currValue) => accumulator+currValue, 0);
    console.log(sum);
}

samenum(1234)