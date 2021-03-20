const express = require("express");
const festivals = express.Router();
const Festival = require("../models/Festival");

//prochain festival
festivals.get("/closest", (req, res) => {
    Festival.findAll({
       order: [["fes_date", "DESC"]],
        limit: 1,
    }).then((festival) => {
        if (!festival) {
            res.json({error: "Aucun festival n'existe"});
        } else {
                res.json({closestFestival: festival});
        }
    }).catch((err) => {
        res.send("error: " + err);
    });
});




module.exports = festivals;
