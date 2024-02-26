const express = require("express");
const connectDB = require("./db");
const Team = require("./model/Team");
const cors = require("cors");
const router = require("./router/routers");
const readyData = require("./mockup/property");
const Property = require("./model/Property");
const Message = require("./model/Message");
const messageData = require("./mockup/message");
const Blog = require("./model/Blog");
const blogData = require("./mockup/blog");
const { default: mongoose } = require("mongoose");

connectDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://p-weston.vercel.app"],
    Credential: true,
  })
);

// Blog.insertMany(blogData)
//   .then((doc) => {
//     console.log("Inserted data !!");
//   })
//   .catch((err) => {
//     console.log("Not inserted !!");
//   });

// const updateBlogData = async () => {
//   try {
//     // Check if any data exists
//     const existingData = await Blog.find();

//     if (existingData.length > 0) {
//       // If data exists, delete it
//       await Blog.deleteMany();
//       console.log("Existing data deleted.");
//     }

//     // Insert new data
//     await Blog.insertMany(blogData);
//     console.log("New data inserted.");
//   } catch (err) {
//     console.error("Error updating blog data:", err);
//   } finally {
//     // Close the connection after updating
//     mongoose.connection.close();
//   }
// };

// Call the function to update blog data
// updateBlogData();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Working already !!!");
});

/** All places api calls */
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
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
