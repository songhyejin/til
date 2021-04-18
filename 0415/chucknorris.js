const readline = () => {
    var text = "C";

    var length = text.length;
    var output = "";
    for (var i = 0;i < length; i++) {
        var bin = text.charCodeAt(i).toString(2);
        
        if(bin.length < 7) {
            bin = "0" + bin;
        }
        
        output +=bin;
    }
    console.debug("binary ::",output) 
    return output;
}

var binaryText = readline();
var firstBit = binaryText[0];

const outputCode = (firstBit) => {
    var output = "";
    if(firstBit == "0") {
        output = "00 0";
    } else {
        output = "0 0";
    }

    var prevBit = "";
    for(var i=1; i<binaryText.length; i++) {
        var bit = binaryText[i];
        if(bit != prevBit) {
            output += bit == "0" ? " 00 0" : " 0 0";
        } else {
            output += "0";
        }
        prevBit = bit;
    }

    console.debug("output ::", output);
}

outputCode(currentSign);