function walkman(steps,feet,speed){
    let distanceMeter = steps * feet;
    let speedInMeters = speed /3.6;
    let time = distanceMeter / speedInMeters;
    let rest = Math.floor(distanceMeter / 500);

    let timeMin = Math.floor(time /60);
    let timeSec = Math.floor(time -timeMin *60);
    let timeHr= Math.floor(time / 3600);

    let hh = timeHr < 10 ? '0' : '';
    let ss = timeSec < 10 ? '0' : '';
    let mm = timeMin + rest < 10 ? '0' : '' ;


    let output = (`${hh + timeHr}:${mm+(timeMin+rest)}:${ss+(timeSec+1)}`);
    console.log(output);
}

walkman(4000,0.6,5);