console.log("Server up and running")

let express=require("express")
let io=require("socket.io")
let http=require("http")
let app=express()
let server=http.createServer(app)
io=new io.Server(server);
app.use('/',express.static('public'));


//sockets
io.sockets.on('connect',(socket)=>{
    console.log("we have a new client",socket.id);
    socket.on('disconnect',()=>{
        console.log(socket.id, "has disconnected.");
    })
    socket.on('clickedInstrument',(data)=>{
        io.sockets.emit('clickedSound',data)
    })
})






























server.listen(2000,()=>{
    console.log("Server up");
})




