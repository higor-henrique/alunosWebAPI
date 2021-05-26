const  validacaoRGA = (rga) => {
    

    if(!rga.includes('.') ) {
         throw {
            errorAluno: "RGA inválido!", 
            status: 400           
          }
    }
    if(!(rga.includes('.') && rga.includes('-'))) {
        throw {
            errorAluno: "RGA inválido!", 
            status: 400           
          }
    }
    let rgaSplitado = rga.split('.');
    
    if(rgaSplitado[0].length !== 4) {
        throw {
            errorAluno: "RGA inválido!", 
            status: 400           
          }
    }
    if(rgaSplitado[1].length !== 4) {
        throw {
            errorAluno: "RGA inválido!", 
            status: 400           
          }
    }
    let rgaSplitadoHifen = rgaSplitado[2].split('-')
    if(rgaSplitadoHifen[0].length !== 3) {
        throw {
            errorAluno: "RGA inválido!", 
            status: 400           
          }
        
    }
    if(rgaSplitadoHifen[1].length !== 1) {
        throw {
            errorAluno: "RGA inválido!", 
            status: 400           
          }
        
    }

    return rga

}

module.exports = validacaoRGA

