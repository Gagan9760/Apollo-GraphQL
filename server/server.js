const express = require('express')
const app = express()
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')
const {typeDefs} = require('./Schema/Typedefs')
const {resolvers} = require('./Schema/Resolvers')
app.listen(3001,()=>console.log(`Live at http://localhost:3001`))
mongoose.connect('mongodb+srv://Gagan:gaggu200@cluster0.zxhcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log("Connected to DB"))
const server = new ApolloServer({typeDefs,resolvers})
const startsever = async()=>{
    await server.start()
    server.applyMiddleware({app})
}
startsever()


