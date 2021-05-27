

class validacaoAluno {

  static validacaoNome(nome) {


    if (nome === undefined || nome === '') {
      throw {
        errorAluno: "nome inválido!",
        status: 400
      }
    }


    return nome

  }

  static validacaoRga(rga) {



    if (!rga.includes('.')) {
      throw {
        errorAluno: "RGA inválido!",
        status: 400
      }
    }
    if (!(rga.includes('.') && rga.includes('-'))) {
      throw {
        errorAluno: "RGA inválido!",
        status: 400
      }
    }
    let rgaSplitado = rga.split('.');

    if (rgaSplitado[0].length !== 4) {
      throw {
        errorAluno: "RGA inválido!",
        status: 400
      }
    }
    if (rgaSplitado[1].length !== 4) {
      throw {
        errorAluno: "RGA inválido!",
        status: 400
      }
    }
    let rgaSplitadoHifen = rgaSplitado[2].split('-')
    if (rgaSplitadoHifen[0].length !== 3) {
      throw {
        errorAluno: "RGA inválido!",
        status: 400
      }

    }
    if (rgaSplitadoHifen[1].length !== 1) {
      throw {
        errorAluno: "RGA inválido!",
        status: 400
      }

    }

    return rga

  }

  static validacaoSituacao(situacaoNova, situacaoVelha) {
    
    if(situacaoNova !== undefined && (situacaoNova !== 'ativo' && situacaoNova !== 'inativo'  )) {
      throw {
        errorAluno: 'situação tem que estar no padrão ativo ou inativo',  
        status: 400      
      }
    }
    
     return situacaoNova !== undefined? situacaoNova : situacaoVelha
  }


}



module.exports = validacaoAluno;




