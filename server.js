const express = require("express")
const cors = require("cors")
 const LOADER = require('././src/loader')

 


class Server {
  constructor() {
    const app = express()


    app.use(cors())
    app.use(express.json())
    LOADER.loadAll(app)    

    const PORT = 8080
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  }
}

new Server()