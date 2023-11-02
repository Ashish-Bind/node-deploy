import express from 'express'
import * as productController from '../controller/product.js'

const router = express.Router()

router
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getSingleProduct)
  .post('/', productController.createProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct)

export default router
