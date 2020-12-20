// const Matrix = require('./Matrix')

class GoldRush extends Matrix {

    constructor() {
        super(10, 10, 'Coin')
        // c stands for coins
        this.dim = 10
        // p1 stands for player 1
        this.alter(0, 0, 'Player1')
        // p2 stands for player 2
        this.alter(this.dim - 1, this.dim - 1, 'Player2')
    }

    // add walls to matrix
    addSemiRandomWalls() {
        for (let row = 1; row < this.dim; row += 2) {
            for (let j = 0; j < this.dim / 2; j++) {
                let col = Math.floor(Math.random() * 10)
                if (!this.isPlayerCell(row, col)) {
                    this.alter(row, col, 'Wall')
                }
            }
        }
    }

    // returns true if the cell is a w cell
    isWallCell(row, col) {
        return this.get(row, col) == 'Wall'
    }

    // returns true if the cell is a w cell
    isCoinCell(row, col) {
        return this.get(row, col) == 'Coin'
    }

    // add empty cells to matrix
    addSemiRandomEmpty() {
        for (let row = 0; row < this.dim; row++) {
            for (let j = 0; j < this.dim / 5; j++) {
                let col = Math.floor(Math.random() * 10)
                if (!(this.isWallCell(row, col) || this.isPlayerCell(row, col))) {
                    this.alter(row, col, 'Empty')
                }
            }
        }
    }

    isPlayerCell(row, col) {
        return this.get(row, col) == 'Player1' || this.get(row, col) == 'Player2'
    }

    isRightBorderCell(col) {
        return col == (this.dim -1)
    }

    isLeftBorderCell(col) {
        return col == 0
    }

    isTopBorderCell(row) {
        return row == 0
    }

    isBottomBorderCell(row) {
        return row == (this.dim -1)
    }

    // Generates the matrix with all the coins, walls, and emty cells
    prepareGoldRush() {
        this.addSemiRandomWalls()
        this.addSemiRandomEmpty()
    }


}

// const game = new GoldRush()
// game.prepareGoldRush()
// game.print()