const express = require('express') ;
const app = express() ;
const port = 8080 ;

app.use(express.urlencoded({extended:true})) 
//make the data in a readble format for the react
// if data in url then automatically react will parse the data

app.use(express.json()) 
//encoded json data

app.listen(port,()=>{
    console.log(`App is listing to port : ${port}`)
}) ;
app.get('/register' , (req,res)=>{
    const {user , password} = req.query ;
    //in get req information is displayed in the url as a query strng so it is not safe for sensitive datas like pass id etc
    res.send(`Get request to ${user}`)
})

app.post('/register' , (req,res)=>{
    const {user , password} = req.body ;
    //here in post information are stored in body which is not visible in the url
    // console.log(req.body)
    res.send(`Get request to ${user}`)
})