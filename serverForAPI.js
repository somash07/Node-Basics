const http=require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});
    resp.write(JSON.stringify({name:'somash',email:'man@gm.com'}))
    resp.end();
}).listen(4500)