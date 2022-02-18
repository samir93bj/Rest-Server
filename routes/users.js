const { Router } = require('express');
const { check } = require('express-validator');

const {usuariosGet ,
      usuariosPost,
      usuariosPut,
      usuariosDelete,
      usuariosPatch} = require('../controllers/users');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido } = require('../helpers/db-validators');

const router = new Router();

router.get('/', usuariosGet);

  router.put('/:id', usuariosPut);

  router.post('/',[
      check('name','El nombre es obligatorio').not().isEmpty(),
      check('password','El password debe de ser mas de 6 letras').isLength({min:6}),
      check('email', 'El correo no es válido').isEmail(),
      //Verificamos el rol contra la DB
      check('rol').custom(esRoleValido),
      validarCampos
  ], usuariosPost);

  router.delete('/', usuariosDelete);

  router.patch('/', usuariosPatch);

  module.exports = router; 