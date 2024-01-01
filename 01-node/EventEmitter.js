
            // ----->events in nodejs

//nodejs heavily uses event driven programming

const EventEmitter=require('events')//EventEmitter is a class returned by events module

const customEmitter= new EventEmitter()//obj of EventEmitter class

//listening to an event named 'response' using .on()
customEmitter.on('response',()=>{
    console.log(`data received `)
}) 
//1. many listeners can be attached for the same event.
//2. order of the evt listener and emitter matters . SOOO LISTEN ALWAYS BEFORE EMIT.

customEmitter.on('response',()=>{
    console.log(`same event can be listend many times`)
}) 
//3. more args can be passed while using emit.Eg: 
customEmitter.on('response',(name,roll)=>{
    console.log(`name: ${name}`,`roll: ${roll}`)
}) 
customEmitter.emit('response','ram',2)



//emiiting an event named 'response' using emit('')
// customEmitter.emit('response')
