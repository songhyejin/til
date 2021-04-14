const readline = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = () => {
    var inputs =[];
    for(var j=0; j<10; j++) {
        var n = parseInt(readline(-237,5526));
        inputs.push(n);
    }
    console.debug("inputs :: ", inputs);
    
    if(n == 0) {
        console.debug(0);
    } else {
        let min_t = 5527;
        for (let i = 0; i < inputs.length; i++) {
            const t = parseInt(inputs[i]);
            if(Math.abs(min_t) > Math.abs(t)) {
                min_t = t;
            }else if(Math.abs(min_t) == Math.abs(t) && min_t < t) {
                min_t = t;
            }
        }
        console.debug("result ::", min_t);
    }
}

main();



