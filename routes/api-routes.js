const db = require("../models");

module.exports = app => {
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
            placeId: req.body.placeId
        })
            .then((dbBusiness) => {
                res.json(dbBusiness);
            })
    })

    app.post("/api/updateArcade", (req,res) => {
        db.Arcade.create({
            game: req.body.game,
            type: req.body.type
        })
    })
}