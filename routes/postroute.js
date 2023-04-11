const express = require("express");

const {dataModel} = require("../model/data.model");

const postRoute = express.Router();


postRoute.post("/data", async (req, res)=>{

    try {
        let data = new dataModel(req.body);
        await data.save();
        res.send("data added")
    } catch (error) {
        console.log(error);
        res.send("err", "something went wrong")
    }
})

module.exports = {
    postRoute
}