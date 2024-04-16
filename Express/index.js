const express = require("express");
const app = express();
//express is a function which is stored in app , app is basically a obj
const port = 3000;

//  functions of Express

// 1 . Listening to the port ,
// 2 . Parse the data

app.listen(port, () => {
  console.log(`App is listing in ${port}`);
});

// 3 . Match res according to the routes
// 4. suitable res send

app.get("/", (req, res) => {
  // console.log(req)
  // let html = '<h1>Home Page</h1>'
  let obj = { name: "Sourav", Id: 124 };
  res.send(obj);
});

// app.get("/search", (req, res) => {
//   let search =
//     '<input type="text" placeholder="Enter ur name"/><button>Click Here</button>';
//   res.send(search);
// });

// app.get("/search/:name/:id", (req, res) => {
//   const name = req.params.name;
//   const id = req.params.id;

//   res.send(`<h1>U searched for name : ${name}</h1>`);
// });

app.get("/search", (req, res) => {
  console.log(req.query);
  const query = req.query.q;
  const color = req.query.color;
  if (!color) {
    const name = `<h1>The entered query is : ${query}</h1>`;
    res.send(name);
  } else {
    const name = `<h1>The entered query is : ${query} & the color is : ${color}</h1>`;
    res.send(name);
  }
});
