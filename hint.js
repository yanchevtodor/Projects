var rows = 3;
var cols = 3
var counter = 1

let matrix = [];
for(var i=0; i < rows; i++) {
    matrix.push([]);
}
for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {   

            if(counter == 5){
                matrix[row][col]= 0;
                counter++
            }

            else{
                matrix[row][col]= counter; 
                counter++
            }


    }
    

}
console.log(matrix)
