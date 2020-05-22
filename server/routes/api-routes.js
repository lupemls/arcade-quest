const db = require("../models");

module.exports = app => {
    //posts a new business
    app.post("/api/addBusiness", (req,res) => {
        db.Business.create({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            type: req.body.type,
            lat: req.body.lat,
            long: req.body.long,
            payment: req.body.payment,
            photoRef: req.body.photoRef
        })
            .then((result) => {
                res.json(result);
            })
    })

    //posts arcade machine for a business
    //need to add relation in businessArcade
    app.post("/api/updateArcade", (req,res) => {
        db.Arcade.create({
            game: req.body.game,
            type: req.body.type
        })
    })

    //gets all businesses
    app.get("api/allBusinesses", (req,res) => {
        db.Business.findAll({})
            .then(result => {
                res.json(result)
            })
    })

    //gets all arcade machines
    app.get("api/allArcades", (req,res) => {
        db.Arcade.findAll({})
            .then(result => {
                res.json(result)
            })
    })

    //gets arcade machines at a given business
    //????????????????
    app.get("api/businessArcades", (req,res) => {
        db.BusinessArcade.findAll({
            where: {
                BusinessId: req.query.id
            }
        }).then(result => {
            res.json(result)
        })
    })


}