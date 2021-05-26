const  validacaoNome = (nome) => {
    

    if(nome === undefined || nome === '') {
         throw {
            errorAluno: "nome inválido!", 
            status: 400           
          }
    }
    

    return nome

}

module.exports = validacaoNome

