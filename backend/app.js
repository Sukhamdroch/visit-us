const express = require('express')
const app = express()
const port = 3000
const config = require('./config/db')
const seeder = require('./config/seeder')
seeder.adminseeder()
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
app.use(express.json({ limit: '50mb' }))

const adminroutes = require('./routes/adminroutes')
app.use("/admin", adminroutes)

app.listen(port, () => {
    console.log("server running at port " + port)
})