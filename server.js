const express = require("express");
const app = express();

app.use(express.static("public"));

const port = process.env.port || 3000;

app.get('/', (req, res)=>{
    res.sendFile('views/index.html', {root: __dirname });
})

app.listen(port, ()=>{
    console.log("Server running..");
})