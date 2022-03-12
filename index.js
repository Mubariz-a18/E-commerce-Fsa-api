const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/index')
const bodyparser = require('body-parser');
const defaultRoutes = require('./Routes/defaultRoutes')
const productRouter = require('./Routes/productRouter')


const app = express();
const port = process.env.PORT || 4000

app.listen(port,() =>{
    console.log("server is running on port " +port);
});
app.use(bodyparser.json())
mongoose.connect(config.dbconstr)
    .then(res => console.log('Connected to MongoDb'))
    .catch(err => console.log('failed to connect to db'));


app.use('/health',defaultRoutes)
app.use('/',productRouter)
