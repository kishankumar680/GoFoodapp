// const express = require('express')
// const mongoose=require("mongoose");

// const app = express()

// const port = 5000
// mongoose.connect("mongodb://localhost:27017/GoFoodmern",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },).then(()=>console.log("lakshmi"))
// .catch((err)=>{console.error(err);});


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



const express = require('express')
const app = express()
const port = 5000

const mongoDB = require("./db")

const accessData =(req,res,next)=>{
  res.setHeader("Access-control-Allow-Origin","http://localhost:3000");
  res.header(
      "Access-control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
}



app.use(accessData);      // use of middleware

mongoDB();

app.use(express.json())     // use of middleware

app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
