
const express = require("express")
const app = express();
const port = 3000;



app.get("/", (req, res)=>{
    res.send("Hello World");
});


app.get("/about", (req,res)=>{

    const e1 = {
        name: "Molnar Balint",
        age:22,
        salary:2000.0
    };


    const e2 = {
        name: "Molnar Anna",
        age:21,
        salary:24400.0
    };



    const e3 = {
        name: "Molnar Norbert",
        age:20,
        salary:2030.0
    };

    const members = [];
    members.push(e1);
    members.push(e2);
    members.push(e3);

    res.send(members);
})


app.listen(port, ()=>{
    console.log("Server is up and running");
});

