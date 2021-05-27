const  validacaoParams = (limite,  nome, pagina) => {
    

if( isNaN(parseInt(limite))  ) {
    throw {
      errorAluno: "parâmetro inválido",
      status: 400
    }
  }

  
if(!isNaN(parseInt(nome)) ) {
    throw {
      errorAluno: "parâmetro inválido",
      status: 400
    }
  }
  
if(isNaN(parseInt(pagina))  ) {
    throw {
      errorAluno: "parâmetro inválido",
      status: 400
    }
  }


}

module.exports = validacaoParams

