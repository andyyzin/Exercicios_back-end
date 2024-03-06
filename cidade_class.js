class Cidade{
    constructor(nome, estado, numPopulacao, numHomens, numMulheres){
        this.nome = nome
        this.estado = estado
        this.numPopulacao = numPopulacao
        this.numHomens = numHomens
        this.numMulheres = numMulheres
    }

    porcentualHomens(){
        return (this.numHomens / this.numPopulacao) * 100.0        
    }

    porcentualMulheres(){
        return (this.numMulheres / this.numPopulacao) * 100.0 
    }


}

module.exports = Cidade