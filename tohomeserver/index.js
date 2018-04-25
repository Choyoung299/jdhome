const express = require('express') //引入模块
const bodyParser = require('body-parser') //引入模块

const app = express()
app.use(express.static('static'))//设置静态目录
app.use(bodyParser.urlencoded({ extended: false }))//post数据获取和解析

app.get('/classify',require('./src/get.classify.js'))

app.get('/shops',require('./src/get.shops.js'))

app.get('/ctgs',require('./src/get.ctgs.js'))

app.get('/goods',require('./src/get.goods.js'))

app.listen(8082)