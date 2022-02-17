const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Conectar a la DB
        this.conectarDB();
        
        //middleware
        this.middleware();

        //Rutas de mi aplicacion
        this.routes();
    }
    
    async conectarDB(){
        await dbConnection();
    }

    middleware (){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/users'));

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: https://localhost:${this.port}`);
        });
    }
}
  

module.exports = Server;
