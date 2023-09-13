const express = require('express');

const router = express.Router();

//Controller functions
const productController = require('./../controllers/products.controller')

//Middleware functions
// const usersMiddleware = require('./../middlewares/users.middleware')
// const validation = require('./../middlewares/validations.middleware')
// const authMiddleware = require('./../middlewares/auth.middleware')

const upload = require('./../utils/multer')

//Rutas
router
  .route('/')
  .post(upload.single('imgURL'), productController.createProduct)
  .get(productController.findAllProducts)
  // .post(
    // validation.createUserValidator,
  //   authController.signUp
  // )
  
// router
//   .route('/login')
//   .post(authController.login)

// router.use(authMiddleware.protect)

// router
//   .use("/:id", usersMiddleware.validUser, authMiddleware.protectAccountOwner)
//   .route('/:id')
//   .get(usersController.findOneUser)
//   .patch(usersController.updateUser)
//   .delete(usersController.deleteUser)

module.exports = router;