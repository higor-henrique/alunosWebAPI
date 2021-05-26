const knex = require('../database');
const validacaoRGA = require('../validators/validacaoRGA');
const validacaoAluno = require('../validators/validacaoAluno');
module.exports = class serviceAluno {
  static async getAlunoAll(limite = 25, nome = '', pagina = 1) {
    try {

      if (nome !== '')
        return await knex('aluno').limit(limite).offset((pagina - 1) * limite).whereRaw(`nome like \'%${nome}%\'`, )

      return await knex('aluno').limit(limite).offset((pagina - 1) * limite)
      

    } catch (error) {
      throw {
        errorAluno: "Erro ao achar aluno",
        error: error
      }
    }
  }
  static async getAlunoId(id) {
    try {

      let response = await knex('aluno').where({ id: id })

      if (response.length === 0) {
        throw {
          status: 404,
          errorAluno: "Aluno não existe"
        }
      }
      return response;

    } catch (error) {
      throw {
        errorAluno: error.errorAluno || "Erro ao achar um unico aluno",
        error: error,
        status: error.status
      }
    }
  }
  static async registerAluno(Aluno) {
    try {

      let rga = validacaoRGA(Aluno.rga)
      let nome = validacaoAluno(Aluno.nome)
      return await knex('aluno').insert({ nome, rga, curso: Aluno.curso, situacao: Aluno.situacao })

    } catch (error) {
      throw {
        status: error.status,
        errorAluno: error.errorAluno || "Erro ao registrar um aluno",
        error: error
      }
    }
  }
  static async updateAluno(id, Aluno) {
    try {

      let rga = validacaoRGA(Aluno.rga)
      let nome = validacaoAluno(Aluno.nome)

      let response = await knex('aluno').where({ id: id })

      if (response.length === 0) {
        throw {
          status: 404,
          errorAluno: "Aluno não existe"
        }
      }

      knex('aluno').where({ id: id }).update({
        nome, rga, curso: Aluno.curso,
        situacao: Aluno.situacao
      })

    } catch (error) {
      throw {
        errorAluno: error.errorAluno || "Erro ao registrar um aluno",
        error: error,
        status: error.status
      }
    }
  }
  static async removeAluno(id) {
    try {

      let response = await knex('aluno').where({ id: id })



      if (response.length === 0) {
        throw {
          status: 404,
          errorAluno: "Aluno não existe"
        }
      }

      return knex('aluno').where({ id: id }).del()

    } catch (error) {
      throw {
        errorAluno: error.errorAluno || "Erro ao deletar aluno",
        error: error,
        status: 404
      }
    }
  }


}