// 这里主要创建server






















const express = require('express')
const cors = require('cors')

const router = require('./routes/index')

const {handleErrors} = require('./middleware/errorMiddleware')
const app = express()
// 创建web server

const PORT = 8080


app.use(express.json({limit:'5mb'}))
app.use(express.urlencoded({limit:'5mb',extended:true}))

app.use(cors())
// 全局中间件

app.use(express.json())
// 解析body数据，防止cors undefined问题,全局中间件


// 这里进入api网址挂载之类的
app.use('/api',router) 

// use error middleware at the end
app.use(handleErrors)



app.listen(PORT,function(){
    console.log('Server is running on http://localhost:8080')
})

// 创建web server


