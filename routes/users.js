import express from 'express'
import * as userController from '../controller/users.js'

const router = express.Router()

router
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getSingleUser)
  .post('/', userController.createUser)
  .put('/:id', userController.replaceUser)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser)

export default router
