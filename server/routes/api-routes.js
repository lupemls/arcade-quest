const db = require("../models");
const passport = require("../config/passport");

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
    app.get("/api/allBusinesses", (req,res) => {
        db.Business.findAll({})
            .then(result => {
                res.json(result)
            })
    })

    //gets all arcade machines
    app.get("/api/allArcades", (req,res) => {
        db.Arcade.findAll({})
            .then(result => {
                res.json(result)
            })
    })

    //gets arcade machines at a given business
    //????????????????
    app.get("/api/businessArcades/:id", (req,res) => {
        db.BusinessArcade.findAll({
            where: {
                BusinessId: req.params.id
            }
        }).then(result => {
            res.json(result)
        })
    })

    app.get("/api/business/:id", (req,res) => {
        db.Business.findOne({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result)
        })
    })

//=============================================================
//AUTH ROUTES
    // function checkAuthenticated(req, res, next) {
    //     if (req.isAuthenticated()) {
    //         return next();
    //     }
    //     res.redirect('/login')
    // }

    // app.get('/', checkAuthenticated, (req,res) => {
    //     res.render('/Main');
    // })

    app.post("/api/signup", (req,res) => {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/");
        }).catch(err => {
            res.status(401).json(err);
        })
    })

    app.post("/login", passport.authenticate("local"), (req,res) => {
        res.json({
            username: req.user.username,
        })
    })

    app.get("/logout", (req,res) => {
        req.logout();
        res.redirect("/Login");
    })

    // app.all('*', function(req,res,next){
    //     if (req.path === '/' || req.path === '/login')
    //         next();
    //     else{
    //         ensureAuthenticated(req,res,next);  
    //     }
    // });
}