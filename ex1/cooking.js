function GordonRamsay(numba, action1,action2,action3,action4,action5){
    let number = Number(numba);
    let ops = [action1,action2,action3,action4,action5];
    let actions ={
        chop:(a) => a/2,
        dice:(a) => Math.sqrt(a),
        spice:(a) => a+1,
        bake:(a) => a*3,
        fillet:(a) => a*0.8
    }
    for(let act of ops){
        number = actions[act](number);
        console.log(number);
    }
}

GordonRamsay('9', 'dice', 'spice', 'chop', 'bake', 'fillet')