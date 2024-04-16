const express = require("express");
const app = express();
const path = require("path")
const port = 8080 ;
app.set("view engine" , "ejs")

// https://ejs.co/#install

//if it is not set then it will not identify the views dir if it is run outside of the folder , name must be views
app.set("views" , path.join(__dirname,"./views"))

// app.use(express.static("public"))
//powershell -ExecutionPolicy Bypass -Command "nodemon EJS/index.js"
app.use(express.static(path.join(__dirname , "public/css")))
app.use(express.static(path.join(__dirname , "public/js")))

app.listen(port,()=>{
    console.log(`App is listening to the port ${port}`)
})

app.get('/',(req,res)=>{
    // res.send('Hello World')
    res.render('home.ejs')
})

// app.get('/rolldice',(req,res)=>{
//     res.render('rolldice.ejs')
// })

// assuming data coming from the database then we do the following steps
app.get('/rolldice',(req,res)=>{
    const dice = Math.floor(Math.random()*5) + 1 ;
    res.render('rolldice.ejs' , {num : dice})
})
// app.get('/ig/:username',(req,res)=>{
//     const name = ['babu' , 'sourav' , 'riju' , 'rajashri']
//     const {username} = req.params ;
//     res.render('insta.ejs' , {username , name})
//     // console.log(username)
// })

app.get('/ig/:username',(req,res)=>{
       const {username} = req.params ;
       const InstData = require("./data.json")
       let data = InstData[username] ;
       if(data){
        res.render('instagram.ejs' , {data})
       }else{
        res.render('error.ejs')
       }
    })