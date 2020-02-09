const express = require('express');
const app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => {
    res.sendfile(__dirname + "/info.json")
})
app.listen(80);