function zigzag(arr){

    arr.sort((a,b)=> a-b);
    let length = arr.length;
    let result=[];
    
    for(let i=0;i<length/2;i++){
        if(length%2==0){
        result.push(arr[i]);
        result.push(arr[length -1 - i]);
        }
        else{
            result.push(arr[i]);
            if(i!=Math.ceil((length/2)-1)){result.push(arr[length -1 - i]);}
        }
    }
    return result;
}

console.log(zigzag([1, 65, 3, 52, 48, 63, 31, -3, 18]));