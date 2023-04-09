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
    res.send("OK");
});

app.post("/tweets", (req,res) =>{
    let newTweet = req.body;
    if(!users.find(check => check.username === newTweet.username)){
        res.send("UNAUTHORIZED");
    }
    else{
        tweets.push(newTweet);
        res.send("OK");
    }
});

app.get("/tweets", (req,res) => {
    let lastTweets = tweets.slice(-10);
    for(let i = 0; i<lastTweets.length ; i++){
        let loadAvatar = users.find(check => check.username === lastTweets[i].username).avatar;
        lastTweets[i].avatar = loadAvatar;
    }
    res.send(lastTweets);
});

const port = 5000;
app.listen(port);