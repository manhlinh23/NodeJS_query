
//khai bao express
const cors = require('cors')
const express = require('express')


//gan bien cho express
const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});
app.options("*",cors)
app.use(cors())
//gan bien cho bp
const bodyParser = require('body-parser')
require('dotenv')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000
//khai bao url cac api
let routes = require('./api/routes')
console.log('routes');
routes(app)

/*app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'})
})
*/
app.listen(port)
console.log("dang chay tren port: " + port)