const main = () => {
    let count = 0;
    while (count < 10) { //임시
        var maxH = 0;
        var maxIndex = 0;
    
        for (let i = 0; i < 8; i++) {
            const mountainH = parseInt(readline());
            console.debug("Height of "+i+" mountain------------->>", mountainH);
    
            if(mountainH > maxH) {
                maxH = mountainH;
                maxIndex = i;
            }
        }

        console.debug("max index ::", maxIndex);
        count = count + 1;
    }
}

const readline = () => {
	const rand = Math.floor(Math.random() * 10);
    return rand;
}

main();