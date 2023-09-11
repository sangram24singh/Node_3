const express=require('express')
const routers=require('./router/router')
const app=express()
app.use(express.json())
app.use(routers)
app.listen(8000,()=>{
    console.log("you are running  on port 8000");
})
