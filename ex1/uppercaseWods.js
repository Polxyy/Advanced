function word(str) {
    const reg = /\w+/g;
    const output = str.match(reg).join(', ').toUpperCase();
    console.log(output);
}

word('Functions in JS can be nested, i.e. hold other functions');
