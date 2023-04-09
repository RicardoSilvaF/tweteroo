import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post("/sign-up", (req,res) =>{
    let newUser = req.body;
    users.push(newUser);
    res.send(users);
});

const port = 5000;
app.listen(port);