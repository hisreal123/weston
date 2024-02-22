const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ["Residential", "Commercial", "Industrial", "Land"],
    required: true,
  },
  listingPrice: { type: Number, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  category: [{ type: String }],
  size: {
    totalArea: { type: Number, required: true },
    livingArea: { type: Number },
    rooms: { type: Number },
    floors: { type: Number },
  },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  yearBuilt: { type: Number, required: true },
  description: { type: String, required: true },
  amenities: [{ type: String }],
  images: [{ type: String }],
  agent: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
  },
  listingDate: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["available", "Sold", "Pending"],
    default: "available",
  },
  notes: { type: String },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
