const value = {
    e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1,
    d: 2, g: 2,
    b: 3, c: 3, m: 3, p: 3,
    f: 4, h: 4, v: 4, w: 4, y: 4,
    k: 5,
    j: 8, x: 8,
    q: 10, z: 10
};

const main = () => {
    let dictionary = [];
    //let n = parseInt(readline());
    let n = 5;
    // for (var i = 0; i < n; i++) {
    //     dictionary.push(readline());
    // }
    dictionary = ['because', 'first', 'these', 'could', 'which']
    //let letters = readline();
    let letters = 'hicquwh';

    let maxPoints = 0;
    let resultWord = "";
    for(var j=0; j<dictionary.length; j++) {
        let p = getPoints(dictionary[j], letters);
        if(p > maxPoints) {
            maxPoints = p;
            resultWord = dictionary[j];
        }
    }
    console.debug(resultWord);
}

const getPoints = (word, letters) => {
    let points = 0;
    var words = [...word];
    for (var c=0; c<words.length; c++) {
        console.log("word...?",word);
        var index = letters.indexOf(words[c].toString());
        console.log("index", index)
        if (index == -1) {
            return 0;
        }
        points += value[words[c]];
        console.debug("point ::", points)
    }
    return points;
}

main();