const db = require("../models");
let cors = require("cors");
const axios = require("axios");

//CORS options
var corsOptions = {
  origin: "http://localhost:3002",
  optionsSuccessStatus: 200,
};

module.exports = (app) => {
  //posts a new business
  app.post("/api/addBusiness", (req, res) => {
    console.log(req.body);
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${req.body.data.business}&inputtype=textquery&fields=photos,place_id&locationbias=point:${req.body.location.lat},${req.body.location.lng}&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w
        `
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        return axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data.candidates[0].place_id}&fields=url,geometry,photo&key=AIzaSyCAGBQZGrklbGFY3rBelRBQ_m0yzc4pd5w
          `
        );
      })
      .then((response) => {
        console.log(response.data);
        db.Business.create({

                name: req.body.data.business,
                address: req.body.data.address,
                city: req.body.data.city,
                state: "WA",
                zip: req.body.data.zip,
                type: req.body.data.businessType,
                lat: req.body.location.lat,
                long: req.body.location.lng,
                payment: req.body.data.payment,
                photoRef: response.data.result.photos[0].photo_reference,
                url: response.data.result.url
            })
            .then((result) => {
                        res.json(result);
                    })
      });
    // db.Business.create({

    //     name: req.body.name,
    //     address: req.body.address,
    //     city: req.body.city,
    //     state: req.body.state,
    //     zip: req.body.zip,
    //     type: req.body.type,
    //     lat: req.body.lat,
    //     long: req.body.long,
    //     payment: req.body.payment,
    //     photoRef: req.body.photoRef
    // })
    //     .then((result) => {
    //         res.json(result);
    //     })
  });

  //posts arcade machine for a business
  //need to add relation in businessArcade
  app.post("/api/updateArcade", (req, res) => {
    db.Arcade.create({
      game: req.body.game,
      type: req.body.type,
    });
  });

  //gets all businesses
  app.get("/api/allBusinesses", cors(corsOptions), (req, res) => {
    db.Business.findAll({}).then((result) => {
      res.json(result);
    });
  });

  //gets all arcade machines
  app.get("/api/allArcades", (req, res) => {
    db.Arcade.findAll({}).then((result) => {
      res.json(result);
    });
  });

  app.get("/api/business/:id", (req, res) => {
    db.Business.findAll({
      where: {
        id: req.params.id,
      },
    }).then((result) => {
      res.json(result);
    });
  });

  //gets arcade machines at a given business
  //????????????????
  app.get("/api/businessArcades/:BusinessId", (req, res) => {
      console.log(req.params)
    db.Business.findOne({
      where: {id: req.params.BusinessId},
      include: db.Arcade,
      // attributes: ['id'],
    //   through: { where: { id: parseInt(req.params.BusinessId) } },
    }).then((result) => {
      res.json(result);
    });
  });
};
