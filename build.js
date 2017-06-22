var fs = require('fs');
var dir = "./dist/";
var path = require("path");


var nconf = require("nconf");
nconf.argv();
fs.readFile(nconf.get("file"),"utf-8", (err, data) => {
    if (err) throw err;
    fs.writeFile(nconf.get("output")||""+nconf.get("file").replace(/\.js$/,"") + ".json", JSON.stringify(eval(data)), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});
