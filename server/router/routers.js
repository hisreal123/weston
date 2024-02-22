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
  const category = req.params.category.trim().toLowerCase(); // Handle potential inconsistencies

  try {
    // If you need to serialize the entire object and potential circular references are unavoidable:
    // const getData = await Property.findOne({ category: { $in: [category] } }).toJSON({ virtuals: true });

    // If returning only specific properties is sufficient:
    console.log("Searching for:", category);
    const getData = await Property.findOne({ category: { $in: [category] } });

    if (getData) {
      const getData = await Property.findOne({ category: { $in: [category] } });
      console.log("Found data:", getData);
    } else {
      res.status(204).end(); // No properties found
    }
  } catch (err) {
    console.error("Error getting specific data:", err);
    res.status(500).send("Error retrieving property");
  }
};

/**Endpoints*/
router.get("/", getAllProperties);
router.get("/name/:name", getPropertyByName);
router.get("/categories", getPropertyByCategory);
router.get("/categories/:category", getPropertyByCategoryName);

module.exports = router;
