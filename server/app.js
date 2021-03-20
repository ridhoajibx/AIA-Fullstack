const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.listen(port, () => {
    console.log(`Server already run at port: ${port}`)
})