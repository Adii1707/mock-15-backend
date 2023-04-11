const express = require("express");

const {dataModel} = require("../model/data.model");

const getRoute = express.Router();

getRoute.get("/data", async (req, res)=> {

const destination = req.query.destination;

if(destination){
    try {
        let data = await dataModel.find({Destination: destination});
        res.send(data);
    } catch (error) {
        console.log(error)
    }
}
else{
    try {
        let data = await dataModel.find();
          res.send(data);
    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
    
}


})

module.exports = {
    getRoute
}