function check(x1,y1,x2,y2){
    //vx1^2 + y1^2\
    let First = Math.sqrt((x1**2)+(y1**2));
    let Second = Math.sqrt((x2**2)+(y2**2));
    let Third = Math.sqrt(((x2-x1)**2)+((y2-y1)**2));

    let status1=First - Math.floor(First) == 0 ? 'valid' : 'invalid';
    let status2=Second - Math.floor(Second) == 0 ? 'valid' : 'invalid';
    let status3=Third - Math.floor(Third) == 0 ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${status1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${status2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status3}`);
}
//{${x1},${y1}} to 
check(2,1,1,1)