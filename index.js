const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoutes = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/api/products', productRoutes);



app.get('/', (req, res) => {
    res.send('Hello from node api server1 ');
});





mongoose.connect("mongodb+srv://ajjanoino:wEPnGnjgwvLWt5ci@backenddb.fme8th9.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb").then(() => {
    console.log("Connected");
    app.listen(3000, () => {
        console.log(`Example app listening on port 3000`);
    })
}).catch(() => {
    console.log("Connected failed")
});
