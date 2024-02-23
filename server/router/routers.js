const Message = require("../model/Message");
const Property = require("../model/Property");
const express = require("express");
const router = express.Router();

/** get all properties */
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.log("Error retrieving properties:", err);
    res.status(500).send("Error retrieving properties");
  }
};

/** get all  property by name  */
const getPropertyByName = async (req, res) => {
  const { name } = req.params;
  try {
    const property = await Property.findOne({ name });
    res.json(property);
  } catch (err) {
    console.log("Error this property:", err);
    res.status(500).send("Error retrieving this property");
  }
};

/** get all  property category*/
const getPropertyByCategory = async (req, res) => {
  // const { category } = req.params;

  try {
    const categories = await Property.distinct("category");
    res.json(categories);

    if (!categories) {
      res.staus(500).send("No category found");
    }
  } catch (err) {
    console.log("Error fetching the property category:", err);
    res.status(500).send("Error fetching the property category:");
  }
};

/** get all  property by specific category Name */
const getPropertyByCategoryName = async (req, res) => {
  // if (ObjectId.isValid(req.params.category)) {
  //   Property.findOne({ category: ObjectId(req.params, category) })
  //     .then((doc) => res.status(200).json(doc))
  //     .catch((err) => {
  //       res.status(500).json({ error: "error" });
  //     });
  // } else res.status(500).json({ error: "Error " });
};

/** Send message */

const sendMessage = async (req, res) => {
  const { message } = req.body;
  console.log(message);
  try {
    const newMessage = new Message({message});
    await newMessage.save();
    res.status(201).json({ message: "Message sent sucessfully !" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to send message " });
  }
};
// Post Message
// const postMessage('/message', )

/** get Endpoints*/
router.get("/", getAllProperties);
router.get("/name/:name", getPropertyByName);
router.get("/categories", getPropertyByCategory);
router.get("/categories/:category", getPropertyByCategoryName);

/** Post Endpoints*/
router.post("/message", sendMessage);
module.exports = router;
