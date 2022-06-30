const path = require('path');
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const express = require('express')
const app = express()
app.set('views','views')
app.set('view engine', 'pug')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes.routes)
app.use(shopRoutes)

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
