const express = require("express");
const app= express();
const Port = 5000;
const {graphqlHTTP} = require('express-graphql');
const schema = require("./Schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

//allow cross - origin

app.use(cors());

const db= require("./Config/Keys").MongoURI;

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log("Database Connected Successfully"))
.catch(error=> console.log(error));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));



app.listen(Port,()=>{
    console.log(`Server started on port ${Port} `);
});