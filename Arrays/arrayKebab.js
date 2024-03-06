function kebab(arr,rot){
    let last=arr.length-1;
    for(let i=0;i<arr.length,i<rot;i++){
       
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

kebab(['1','2','3','4'],2)
kebab(['Banana', 'Orange', 'Coconut', 'Apple'], 15)

