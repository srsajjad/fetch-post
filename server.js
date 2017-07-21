let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let fs = require('fs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/showTasks', (req, res) => {
  let taskList = JSON.parse(fs.readFileSync('database.txt', 'utf8'))
  res.send(taskList)
})

app.post('/addTask', (req, res) => {
  let taskArr = JSON.parse(fs.readFileSync('database.txt', 'utf8'))
  taskArr.push(req.body.task)
  fs.writeFileSync('database.txt', JSON.stringify(taskArr), 'utf8')
})

app.listen(1337, () => console.log('listening to the port 1337'))
