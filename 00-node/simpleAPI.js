/*
    NODEMON package: time saving module.
    baar baar run garda node node lekhirana parxa. so nodemon use.. it runs node js continously.
    ->npm i nodemon -g -> g vaneko globally halya.

*/

const http=require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});
    resp.write(JSON.stringify({name:'somash',email:'man@gm.com'}))
    resp.end();
}).listen(4500)