const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World");
})
app.get('/welcome', () => {
    res.send('Welcome dear')
})
app.listen(3000, function(req, res){
    console.log('server is running')
});
