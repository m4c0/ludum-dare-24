var express = require("express");

var app = express();
app.use(express.cookieParser());

app.all("*", function(req, resp) {
    resp.status(404);
    resp.type("text/plain");
    resp.send("Not Found");
})

app.listen(8080);

console.error("Server started");
