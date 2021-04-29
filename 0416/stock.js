const readline = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = () => {
    let inputs =[];
    for(let j=0; j<6; j++) {
        let n = parseInt(readline(0,5));
        inputs.push(n);
    }
    //inputs = [ 1, 1, 0, 3, 2, 1 ];
    console.debug("inputs :: ", inputs);
    
    let result = [];
    var prev = 0;
    for(var i=0; i<inputs.length; i++) {
        var next = inputs[i];

        result.push(next - prev < 0 ? next - prev : 0);

        if(next > prev) prev = next;
    }

    // inputs.reduce((prev, next) => {
    //     result.push(next - prev < 0 ? next - prev : 0);
    //     if (next < prev) return prev;
    //     return next;
    // });
    console.debug("result ::", Math.min(...result));
}

main();