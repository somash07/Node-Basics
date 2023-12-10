const http = require('http')
http.createServer((req,res)=>{
    res.write("hello somash");
    res.end;
}).listen(4500);