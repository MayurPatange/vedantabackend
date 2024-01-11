const express = require('express')
const app = express()
const port = 4000
const fs = require('fs')
var bodyParser = require('body-parser')
const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');



// for testing purposes
var testRoutes = require('./routes/crud');

// Import my test routes into the path '/test'
app.use('/v1', testRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

// to show on port no 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})
