
exports.up = knex => {

    return knex.schema.createTable('aluno', table => {
        table.increments('id')
        table.text('nome').notNullable()
        table.text('rga').notNullable()
        table.text('curso').defaultTo(null) 
        table.text('situacao').defaultTo(null)         
        table.date('registrado_em').defaultTo(knex.fn.now())   
    })
  
};

exports.down = knex =>  knex.schema.dropTable('aluno')
  
