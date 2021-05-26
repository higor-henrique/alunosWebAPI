const controllerAluno = require('../controllers/controllerAluno')


module.exports = class AlunoRouter {
  constructor(app) {

    app.route('/alunos')
      .get(controllerAluno.getAlunoAll)
      .post(controllerAluno.postAluno)

    app.route('/alunos/:id')
      .get(controllerAluno.getAlunoId)
      .delete(controllerAluno.removeAluno)
      .put(controllerAluno.updateAluno)



  }
}

