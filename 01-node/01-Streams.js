/*
    STREAMS: 
    ->concept for handling data flow. Streams provide an abstraction to work with data in chunks, allowing you to efficiently process large amounts of data without loading everything into memory at once. 
    ->writable,readable,ransform,duplex
    -> default size of stream 64kb
    ->last buffer-remainder
    ->highWaterMark - control size by changing default 64kb into required size
  
    eg 
    const stream=createReadStream('path',{highWaterMark: sizein bytes},{encoding: 'utf'})

*/
//using streams while reading files 

const {createReadStream}=require('fs')

const stream=createReadStream('./subfolder/bigtxt.txt',{encoding: 'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',()=>{
    console.log(err)
})