const Message = require("../model/Message");
const Property = require("../model/Property");
const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog");

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

const getPropertyByCategoryName = async (req, res) => {
  const category = req.params.category;
  console.log(category);

  try {
    console.log("Searching for:", category);
    const specificProperty = await Property.findOne({ category });

    if (specificProperty) {
      console.log("Found property:", specificProperty);
      res.status(200).json(specificProperty);
    } else {
      res.status(204).end(); // No property found
    }
  } catch (err) {
    console.error("Error getting specific property:", err);
    res.status(500).send("Error retrieving property");
  }
};
/** Send message */

const sendMessage = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  // check("firstName", "First Name length Error").isString();
  // check("lastName", "Last Name is required").isString();
  // check("email", "Email length Error").isEmail();

  // const errors = validationResult({
  //   firstName,
  //   lastName,
  //   email,
  //   phone,
  //   message,
  // });

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() }); // Return validation errors
  // }

  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(200).json({ message: `Message sent successfully to ${email}` });
    console.log({ message: `Message sent successfully to ${email}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

const getBlogPost = async (req, res) => {
  try {
    const blogPost = await Blog.find();
    res.status(200).json(blogPost);
    console.log({ blogPost });
  } catch (err) {
    console.log("Error fetching blog:", err);
    res.status(500).json({ message: err });
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const postId = req.params._id;
    const data = await Blog.findById(postId);
    if (!data) {
      throw Error("No post found with this" + " ID");
    }
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

// Post Message
// const postMessage('/message', )

/** get Endpoints*/
router.get("/", getAllProperties);
router.get("/properties/name/:name", getPropertyByName);
router.get("/properties/categories", getPropertyByCategory);
router.get("/properties/categories/:category", getPropertyByCategoryName);

/** get BlogPost*/
router.get("/blog", getBlogPost);
router.get("/blog/:_id", getBlogPostById);

/** Post Endpoints*/
router.post("/message", sendMessage);
module.exports = router;
