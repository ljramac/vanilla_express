const User = require('../models').User

const list = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error)
  }
}

const create = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const retrieve = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId)
    if (!user) {
      return res.status(404).send({
        message: 'User Not Found'
      })
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId)
    if (!user) {
      return res.status(404).send({
        message: 'User Not Found'
      })
    }
    await user.update(req.body)
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const destroy = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId)
    if (!user) {
      return res.status(404).send({
        message: 'User Not Found'
      })
    }
    await user.destroy()
    res.status(204).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = { list, create, retrieve, update, destroy }
