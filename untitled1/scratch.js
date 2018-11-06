var http = require('http');
var url = require('url') ;
var fs = require("fs") ;


http.createServer(function(req,res){
    var req_url = url.parse(req.url,true);
    var fileName = "." + req_url.pathname ;
    console.log(fileName) ;
    fs.appendFile("fileName.txt",fileName,function(err){
        fs.appendFile("fileName.txt","\n",function(){}) ;
        res.end("log has saved!") ;
        if ( err ) throw err ;
        console.log("saved!") ;
    })
}).listen(80,"0.0.0.0") ;