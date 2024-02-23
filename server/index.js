const express = require("express");
const connectDB = require("./db");
const Team = require("./model/Team");
const cors = require("cors");
const router = require("./router/routers");
const readyData = require("./mockup/property");
const Property = require("./model/Property");
const Message = require("./model/Message");
const messageData = require("./mockup/message");

connectDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://p-weston.vercel.app/"],
    Credential: true,
  })
);

// const insertMessage = new Message(messageData);

// insertMessage
//   .save()
//   .then((data) => console.log("Data inserted !!!"))
//   .catch((err) => console.log("Not inserted !!:", err));

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Working already !!!");
});

/** All places api calls */
app.use("/api/properties", router);

app.listen(PORT, () => {
  console.log(" Listening on port", PORT);
});

/** get team*/

app.get("/api/team", async (req, res) => {
  try {
    const team = await Team.find();
    res.json({ team });
  } catch (err) {
    console.log("Error fetching team:", err);
    res.status(500).send("Error retrieving team");
  }
});
