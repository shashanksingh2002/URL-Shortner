require('./envloader')()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const knex = require('./knex')
const { Model } = require('objection')
Model.knex(knex)

const baseRouter = require('./router')
const app = express()
const port = 3000 || process.env.PORT 

app.use(
    morgan(
        'REQUEST :response-time ms [:date[clf]] ":method :url HTTP/:http-version" :status :user-agent',
        {
            immediate: true,
            skip: function (req) { return (req.path === '/') },
        },
    ),
)
app.use(express.json())
app.use(cors())
app.use('/api/', baseRouter)

app.listen(port, () => {
    console.log('Server is setup and running at port:',port)
})