const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
const Place = require("./model/Place");
const { sections } = require("./mockup/data");
const mockupData = require("./mockup/data");

// const cors = require(cors());

connectDB();

const app = express();
app.use(express.json());

// const insertPlace = new Place(mockupData);

// insertPlace
//   .save()
//   .then(() => console.log("Place inserted into Database !!"))
//   .catch((err) => console.log("Data not sent !!", err));

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Working already !!!");
});

/** All places api calls */
app.get("/api/places", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    console.log("Error retrieving places:", err);
    res.status(500).send("Error retrieving places");
  }
});

app.listen(PORT, () => {
  console.log(" Listening on port", PORT);
});

/** Single place api calls */

app.get("/api/places/name/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const places = await Place.find({ name: { $regex: name, $options: "i" } });

    if (!places.length === 0) {
      return res.status(404).send({ message: "No Place found with that name" });
    }
    res.json(places);
  } catch (err) {
    console.log("Error retrieving place:", err);
    res.status(500).send("Error retrieving places by name");
  }
});

/** get sections api calls */

app.get("/api/places/name/:name/section", async (req,res) => {
  try{
    const {name } = req.params;
    const place  = await Place.findOne({name})

    if (!place){
      return res.status(404).json({message: "Place not found"})
    }
    
  }
});
