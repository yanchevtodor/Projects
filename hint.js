function remove_cell(rows, cols, target){
    var counter = 1
    let matrix = [];
    for(var row=0; row < rows; row++) {
        matrix.push([]);
    }
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {   

                if(counter == target){
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
}
remove_cell(3, 3, 5)
