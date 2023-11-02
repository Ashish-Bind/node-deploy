import Product from '../models/product.js'

export const getAllProducts = async (req, res) => {
  try {
    const doc = await Product.find()
    res.json(doc)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params
    const doc = await Product.findById(id)
    res.json(doc)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export const createProduct = async (req, res) => {
  try {
    const product = req.body
    await Product.create(product)
    res.json('Added Item')
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export const replaceProduct = async (req, res) => {
  const { id } = req.params
  const product = req.body

  await Product.replaceOne({ _id: id }, { ...product })

  res.json(`updated item with id ${id}`)
}

export const updateProduct = async (req, res) => {
  const id = req.params.id
  const product = req.body
  await Product.findByIdAndUpdate(id, product)
  res.json(`updated item with id ${id}`)
}

export const deleteProduct = async (req, res) => {
  const id = req.params.id
  await Product.findByIdAndDelete(id)
  res.json('deleted item with id ' + id)
}
