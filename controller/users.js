import { data } from '../data.js'

export const getAllUsers = (req, res) => {
  res.json(data.users)
}

export const getSingleUser = (req, res) => {
  const { id } = req.params
  const foundProduct = data.users.find((item) => item.id === parseInt(id))
  res.json(foundProduct ? foundProduct : 'Not found')
}

export const createUser = (req, res) => {
  const product = req.body
  data.users.push(product)
  res.json(`${product?.title} added successfully`)
}

export const replaceUser = (req, res) => {
  const id = parseInt(req.params.id)
  const product = req.body
  console.log(req.body)
  data.users = data.users.map((item) => {
    return item.id === id ? { id, ...product } : item
  })
  res.json(`updated item with id ${id}`)
}

export const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const product = req.body
  console.log(req.body)
  data.users = data.users.map((item) => {
    return item.id === id ? { id, ...item, ...product } : item
  })
  res.json(`updated item with id ${id}`)
}

export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)
  data.users = data.users.filter((item) => item.id !== id)
  res.json('deleted item with id ' + id)
}
