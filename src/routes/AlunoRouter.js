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

    app.route('*')
    .get((req, res)=> {
     res.status(405).send("rota inválida")
    })
    .post((req, res)=> {
     res.status(405).send("rota inválida")
    })  
    .put((req, res)=> {
     res.status(405).send("rota inválida")
    })  
    .delete((req, res)=> {
     res.status(405).send("rota inválida")
    })

  

  }
}


