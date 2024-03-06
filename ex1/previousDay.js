function prevd(year, month, day) {
    let time = new Date(year, month-1, day-1)

    console.log(`${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`);
}

prevd(2015, 3,1 )