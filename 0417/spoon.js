const width = 2;
const height = 2;
var matrix = [ [ '0', '0'],[ '0', '.' ] ];

const result = (i, j) => {
    var position = j+' '+i;
    var right = getRight(i, j);
    var bottom = getBottom(i, j);
    
    return position+' '+right+' '+bottom;
}

const getRight = (i, j) => {
    var right = '-1 -1';
    for(var row = j+1; row < width; row++){
        if(matrix[i][row] == 0){
            right = row+' '+i;
            return right;
        }
    }
    return right;
}   

const getBottom = (i, j) => {
    var bottom = '-1 -1';
    for(var col = i+1; col < height; col++){
        if(matrix[col][j] == 0){
            bottom = j+' '+col;
            return bottom;    
        }
    }
    return bottom;
}

if(width > 1 && height > 1){
    for(var i = 0; i < width; i++){
        for(var j = 0; j < height; j++){
            if(matrix[i][j] == 0){ //파워노드
                console.debug(result(i, j));
            }
        }
    }
}else if(width == 1){
    for(var i = 0; i < height; i++){
        if(matrix[i] == 0){
            console.debug(result(i, 0));
        }
    }
}else if(height == 1){
    for(var j = 0; j < width; j++){
        if(matrix[0][j] == 0){
            console.debug(result(0, j));
        }
    }
}