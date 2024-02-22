const { Schema, model } = require("mongoose");

// Define PropertyDetails schema
const PropertyDetailsSchema = new Schema({
  exteriorDetails: {
    plotSize: Number,
    roof: String,
    construction: String,
    cooling: String,
    images: [String],
  },
  interiorDetails: {
    interiorSize: Number,
    bedrooms: Number,
    bathrooms: Number,
    garage: Number,
    laundryRoom: String,
    images: [String],
  },
  roomDimensions: {
    livingRoom: Number,
    bathroom: Number,
    kitchen: Number,
    images: [String],
  },
  propertyInfo: {
    propertyType: String,
    yearBuilt: Number,
    country: String,
    area: String,
    mls: String,
    lotAcreage: String,
    images: [String],
    price: Number,
    sqFeet: Number,
  },
});

// Define Property schema
const PropertySchema = new Schema({
  name: String,
  details: PropertyDetailsSchema,
  status: String,
});

// Define Section schema
const SectionSchema = new Schema({
  livingHouses: [PropertySchema],
  houseVillas: [PropertySchema],
  houseApartments: [PropertySchema],
  officeFloors: [PropertySchema],
});

// Define Place schema
const PlaceSchema = new Schema({
  name: String,
  sections: SectionSchema,
});

// Create model for Place
const Place = model("Place", PlaceSchema);

module.exports = Place;
