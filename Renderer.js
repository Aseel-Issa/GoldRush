

class Renderer{

    constructor(){
        this.source = $('#Matrix-template').html();
        this.template = Handlebars.compile(this.source);
        this.results = $('#matrix')
    }

    renderBoard(matrix){
        this.results.empty()
        for(let i=0; i<matrix.length; i++){
            const newHTML = this.template(matrix[i]);
            this.results.append(newHTML);
        }
    }
    renderPlayer1(value){
        $('#p1').find('#coins').text(value)
    }
    renderPlayer2(value){
        $('#p2').find('#coins').text(value)
    }
}