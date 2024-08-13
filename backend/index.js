const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();


const routePathImages = path.resolve(__dirname, 'images');
app.use(express.json());
app.use("/images",express.static(routePathImages));

app.get("/images",(req,res)=>{
    const data = fs.readdirSync(routePathImages).map((file)=>{
        return file;
    })
    res.send(JSON.stringify(data));
})
app.listen(8080,()=>{
    console.log("Server started on port 8080");
})