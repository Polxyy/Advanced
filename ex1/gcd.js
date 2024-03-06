function asd(fistnum,secondNum){
    while(secondNum){
        let temp = secondNum;
        secondNum = fistnum%secondNum;
        fistnum = temp;
        //console.log(`a = ${fistnum}`)
        //console.log(`b= ${secondNum}`)
        //console.log(`temp = ${temp}`)
    }

    console.log(fistnum);
}


//asd(15,5)
asd(2154,458)