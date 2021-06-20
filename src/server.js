import express from 'express'
import path from 'path'

const port = 3000
const app = express()

app.listen(port, () => {
  console.log(`Server is listening at port ${port}.`)
})

const dist = path.join(__dirname, 'dist')
const html = path.join(dist, 'index.html')

app.use(express.json())
app.use(express.static('public'))
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(html, (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})
