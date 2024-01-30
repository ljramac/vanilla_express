const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', userRoutes)

app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

app.use((req, res, next) => {
  const error = new Error('Not Found')

  error.status = 404

  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)

  res.json({
    error: {
      message: error.message
    }
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
