// 1.先安装
// 2.引包

var express = require('express')

// 3.创建你服务器应用程序
var app = express()

// 公开指定目录
// 只要这样做了，你就可以/通过public/xxx访问了
// app.use('/public/',express.static('./public/'))

// 当我们省略了第一个参数的时候，访问的时候也只需要将第一个参数省略，直接访问文件夹里面的内容就可以了
app.use(express.static('./public/'))

app.get('/',function(req,res){
    res.send('hello')
})
app.get('/about',function(req,res){
    res.send('关于')
    // 怎么拿到后面的后缀,而且返回的还是一个对象
    console.log(req.query)
})



// 相当于server.listen
app.listen(3000,function(){
    console.log('app running at port 3000')
})
