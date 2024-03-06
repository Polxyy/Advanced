function sss(arr){
    
    function dd(a,b){
        if(a.length < b.length){
            return -1
        }
        if(a.length > b.length){
            return 1
        }

        return a.localeCompare(b);
        
    }

    arr.sort(dd);
    for(let el of arr){
        console.log(el);
    }
}

sss(['test', 'Deny', 'omen', 'Default'])