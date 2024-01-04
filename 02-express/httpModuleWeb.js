/*
         res.writeHead(200,header)
         ->Status code : ISRCS


         ->unlimited passing of html in .write or .end

*/

//->if we want ro res.write with url=index,then the url access all the link of index.html ie style or jsLogic so to cope with it this is the approach
const http =require('http')
const fs=require('fs')

const dummyData=fs.readFileSync('./dummy.html')

const styles=fs.readFileSync('./styles.css')
const logic=fs.readFileSync('./jsLogic.js')
const server=http.createServer((req,res)=>{

            //request objs :
    //  console.log(req.method)
     if(req.url==='/'){
        // res.writeHead(200,{'content-type': 'text/html'})// yo garda html ko op ko form 
        res.writeHead(200,{'content-type': 'text/plain'})//yo garda htm ko form ma
        res.write(dummyData)
        res.end()
     }
     else if(req.url==='/about'){
        res.writeHead(200,'ok',{'content-type': 'text/html'})
        res.write("this is a about page")
        res.end()
     }
     else if(req.url==='/styles.css'){
        res.writeHead(200,'ok',{'content-type': 'text/css'})
        res.write(styles)
        res.end()
     }
     else if(req.url==='/jsLogic.js'){
        res.writeHead(200,'ok',{'content-type': 'text/javacript'})
        res.write(logic)
        res.end()
     }
     else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("page not found")
        res.end()
     }







    //resp objs

    //syntax: res.writehead(statusCode,'statusMessage',{headers})
    res.writeHead(200,{'content-type': 'text/html'})//here content type is a header that specifies the browser to render certain formats ie content-type can have the value 'text/html' or 'application/json' 
    res.write('<h1>home page</h1>')
    res.end()//calls .end() explicitly
}).listen(5002)