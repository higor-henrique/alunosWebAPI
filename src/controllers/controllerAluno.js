const serviceAluno = require('../services/serviceAluno')

module.exports = class ControllerAluno {

  static async postAluno(req, res) {
    try {
      const response = await serviceAluno.registerAluno(req.body)
      

      return res.status(201).send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(error.status || 500).send({
        error: error.errorAluno
      })
    }
  }
  static async getAlunoAll(req, res) {
    try {
      
      const response = await serviceAluno.getAlunoAll(req.query.limite, req.query.nome,req.query.pagina)      
      
      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorAluno
      })
    }
  }
  static async getAlunoId(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id"
        })

      const response = await serviceAluno.getAlunoId(req.params.id)

      return res.status(200).send({
        response
      })

    } catch (error) {
    
      return res.status(error.status || 500).send({
        error: error.errorAluno
      })
    }
  }

  static async updateAluno(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para atualizar usuario"
        })

      const response = await serviceAluno.updateAluno(req.params.id, req.body)

      return res.status(200).send({response})


    } catch (error) {
   
      return res.status(error.status || 500).send({
        error: error.errorAluno
      })
    }
  }
  static async removeAluno(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para remover"
        })

      const response = await serviceAluno.removeAluno(req.params.id)

      return res.status(200).send({
        response
      })

    } catch (error) {
      
      return res.status(error.status || 500).send({
        error: error.errorAluno
      })
    }
  }


}