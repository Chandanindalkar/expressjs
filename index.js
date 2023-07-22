const express = require('express')
const path = require('path')
const app = express()
const port = 4000

// just pass the directory and static serves the files in that directory
// app.use(express.static(path.join(__dirname, "public"))) // server static files to the client

const middleware = (req, res, next) => {
  console.log(req)
}
// app.use(middleware)

const data = {"name":"John", "age":30, "city":"New York"}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  // res.send("hello " + req.params.name)
  // console.log(req)
})

app.get('/about', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})