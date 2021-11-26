let input =  [2, 3, -5, -2, 4];
let newArray = [];

function adjacentElementsProduct(){
    for(let x = 0; x < input.length -1; x++){
     let y = x + 1;
     newArray.push(input[y]* input[x])
    }
    
    newArray.max = function( array ){
         Math.max.apply( Math, array );
    };
    
    let maxProduct =  Math.max.apply(Math, newArray);
    console.log(`Tích lớn nhất là ${maxProduct}`)
}

adjacentElementsProduct()