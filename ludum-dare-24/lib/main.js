var express = require("express");
var fs      = require("fs");

var app = express();
app.use(express.cookieParser());

app.get("/", passFile("web/index.html", "text/html"))

app.all("*", function(req, resp) {
    resp.status(404);
    resp.type("text/plain");
    resp.send("Not Found");
})

app.listen(8080);

console.error("Server started");

function passFile(fn, type) {
    return function(req, resp) {
        fs.readFile(fn, function(err, data) {
            if (err) {
                resp.status(500);
                resp.type("text/plain");
                resp.send(err);
            } else {
                resp.status(200);
                resp.type(type);
                resp.send(data);
            }
        })
    }
}