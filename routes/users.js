const { Router } = require('express');
const {usuariosGet ,
      usuariosPost,
      usuariosPut,
      usuariosDelete,
      usuariosPatch} = require('../controllers/users');

const router = new Router();

router.get('/', usuariosGet);

  router.put('/:id', usuariosPut);

  router.post('/', usuariosPost);

  router.delete('/', usuariosDelete);

  router.patch('/', usuariosPatch);

  module.exports = router; 