const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //middleware
        this.middleware();

        //Rutas de mi aplicacion
        this.routes();
    }
    
    middleware (){
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.get('/api', (req, res) => {
            res.status(200).json({
                ok : "True",
                msg: "get API"
            })
          });

          this.app.put('/api', (req, res) => {
            res.status(400).json({
                ok : "True",
                msg: "put API"
            })
          });

          this.app.post('/api', (req, res) => {
            res.status(201).json({
                ok : "True",
                msg: "post API"
            })
          });

          this.app.delete('/api', (req, res) => {
            res.json({
                ok : "True",
                msg: "delete API"
            })
          });

          this.app.patch('/api', (req, res) => {
            res.json({
                ok : "True",
                msg: "patch API"
            })
          });
    }

    listen(){

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: https://localhost:${this.port}`);
        });
    }
}
  

module.exports = Server;
