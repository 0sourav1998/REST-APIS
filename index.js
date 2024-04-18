const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')
app.use(methodOverride('_method'));


app.set("view engine", "views");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id : uuidv4() ,
    username: "sourav",
    content: "Love for coding",
  },
  { 
    id : uuidv4() ,
    username: "babu",
    content: "love for cricket" 
  },
  { 
   id : uuidv4() ,
   username: "rajashri", 
   content: "love for fast food" 
  },
  {
    id : uuidv4(),
    username: "bubay",
    content: "love for game",
  }
];

app.listen(port, () => {
  console.log(`port is listening to ${port}`);
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});

app.get("/posts/new" , (req,res)=>{
    res.render("new.ejs")
})

app.post("/posts" , (req,res)=>{
    let {username,content} = req.body ;
    let id = uuidv4();
    let newPost = posts.push({ id , username , content})
    res.redirect('/posts')
})

app.get('/posts/:id' , (req,res)=>{
    let {id} = req.params ;
    let post = posts.find((p)=>id===p.id) ;
    console.log(post)
    res.render('show.ejs' , {post})
}) 

app.get('/posts/:id/edit',(req,res)=>{
    let {id} = req.params ;
    let post = posts.find((p)=>id===p.id) ;
    console.log(post) ;
    res.render('edit.ejs',{post})
})

app.patch('/posts/:id',(req,res)=>{
    let {id} = req.params ;
    let newContent = req.body.content ;
    let post = posts.find((p)=>id===p.id) ;
    post.content= newContent ;
    console.log(post)
    res.redirect('/posts')
})

app.delete('/posts/:id' , (req,res)=>{
    let {id} = req.params ;
    posts = posts.filter((p)=>id !==p.id)
    res.redirect('/posts')
})
