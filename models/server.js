const express = require('express');

class server {

    constructor(){
        this.app = express();
        this.routes();
        this.port = process.env.PORT;
    }
    
    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World')
          });

    }

    
    listen(){
        //Almacenamos el puerto en la const port
        const 

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: https://localhost:${process.env.PORT}`);
        });
    }
}
  

module.exports = {
    server
};