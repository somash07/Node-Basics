/*
         res.writeHead(200,header)
         ->Status code : ISRCS
*/

const http =require('http')

const server=http.createServer((req,res)=>{

    //request objs :
     console.log(req.method)






    //resp objs
    res.writeHead(200,{'content-type': 'text/html'})//here content type is a header that specifies the browser to render certain formats ie content-type can have the value 'text/html' or 'application/json' 
    res.write('<h1>home page</h1>')
    res.end()//calls .end() explicitly
}).listen(5002)