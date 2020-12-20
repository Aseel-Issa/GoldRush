
class Matrix{

    constructor(rows, cols, initVal){
        this.matrix = []
        this.generateMatrix(rows, cols, initVal)
    }

    generateMatrix(rows, cols, initVal){
        let row
        for(let i = 0; i<rows; i++){
            row = []
            for(let j=0; j<cols; j++){
                row.push(initVal)
            }
            this.matrix.push(row)
        }
    }

    print(){
        for(let i=0; i<this.matrix.length; i++){
            console.log(JSON.stringify(this.matrix[i]))
        }
    }

    alter(row, col, value){
        this.matrix[row][col] = value
    }

    get(row, col){
        return this.matrix[row][col]
    }

    printColumn(col){
        for(let i=0; i<this.matrix.length; i++){
            console.log(this.matrix[i][col])
        }
    }

    printRow(row){
        for(let i=0; i<this.matrix[row].length; i++){
            console.log(this.matrix[row][i])
        }
    }

}
// module.exports = Matrix