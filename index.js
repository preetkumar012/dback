const express = require('express');
const app = express();
require("./db/config");
const Product=require('./db/Product');
const cors = require("cors");
const dotenv=require('dotenv');
app.use(cors());
dotenv.config({path:'./.env'});
app.use(express.json())
const port = process.env.PORT || 5000

app.post("/register", async (req, resp)=>{
    const user= new Product(req.body);
    const result=await user.save();
    resp.send(result);
    })

    app.post('/login', async(req, resp)=>{
        console.log(req.body);
        if (req.body.password && req.body.email) {
            const data = await Product.findOne(req.body).select("-password");
            if (data) {
                resp.send(data);
                console.log(data);
      
            } else {
                resp.send({ Result: "Result not found" });
            }
      
        } else {
            resp.send({ result: "Record is missing" })
        }
      
      })

      app.get("/", (req, resp) => {
        console.log("app is working here ");
        resp.send("<h1>app is working here</h1>");
      });
      

app.listen(5000, () => {
    console.log(`port is running at ${port}`);
})