const knex = require('../database');
const validacaoAluno = require('../validators/validacaoAluno');
const validacaoParams = require('../validators/validacaoParams');
module.exports = class serviceAluno {
  static async getAlunoAll(limite = 25, nome = '', pagina = 1) {
    try {
      validacaoParams(limite, nome, pagina);
      if (nome !== '')
        return await knex('aluno').limit(limite).offset((pagina - 1) * limite).whereRaw(`nome like \'%${nome}%\'`,)

      return await knex('aluno').limit(limite).offset((pagina - 1) * limite)


    } catch (error) {
      throw {
        errorAluno: error.errorAluno || "Erro ao achar aluno",
        error: error,
        status: error.status
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
      let rga = validacaoAluno.validacaoRga(Aluno.rga)
      let nome = validacaoAluno.validacaoNome(Aluno.nome)
      let situacao = validacaoAluno.validacaoSituacao(Aluno.situacao, 'inativo');

      return await knex('aluno').insert({ nome, rga, curso: Aluno.curso, situacao })

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

      let rga = validacaoAluno.validacaoRga(Aluno.rga)
      let nome = validacaoAluno.validacaoNome(Aluno.nome)


      let response = await knex('aluno').where({ id: id })

      let situacao = validacaoAluno.validacaoSituacao(Aluno.situacao, response.situacao);

      if (response.length === 0) {
        throw {
          status: 404,
          errorAluno: "Aluno não existe"
        }
      }


      await knex('aluno')
        .where({ id: id })
        .update({
          nome, rga, curso: Aluno.curso, situacao
        })

      return await knex('aluno').where({ id: id })

    } catch (error) {
      console.log(error)
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

      await knex('aluno').where({ id: id }).del()

      return response;

    } catch (error) {
      throw {
        errorAluno: error.errorAluno || "Erro ao deletar aluno",
        error: error,
        status: 404
      }
    }
  }


}