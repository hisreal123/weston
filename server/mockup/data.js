/**
 *
 * how it works
 *
 * Place:
 *   - A place is a location in the world. It has an id, name and
 *
 * section:
 *   - A section is a part of a place. Each place can have multiple sections.
 *     Sections are identified by their own unique ids within the place they belong to.
 *
 */
const mockupData = {
  name: "WASHINGTON",
  sections: {
    livingHouses: [
      {
        name: "Cozy Family Home",
        details: {
          exteriorDetails: {
            plotSize: 5000,
            roof: "Tile",
            construction: "Brick",
            cooling: "Central Air",
          },
          interiorDetails: {
            interiorSize: 2000,
            bedrooms: 4,
            bathrooms: 2,
            garage: 2,
            laundryRoom: "Yes",
          },
          roomDimensions: {
            livingRoom: 20,
            bathroom: 10,
            kitchen: 15,
          },
          propertyInfo: {
            propertyType: "Single Family Home",
            yearBuilt: 2005,
            country: "USA",
            area: "Suburban",
            mls: "MLS123456",
            lotAcreage: "0.25 acres",
            images: [
              //   "https://via.placeholder.com/800x600",
              "https://images.unsplash.com/photo-1688646953306-5ec93eab8c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5ncm9vbSUyMGludGVyaW9yfGVufDB8fDB8fHww",
              "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-decor-zYfuVYqCdo4",
            ],
            price: 350000,
            sqFeet: 2500,
          },
        },
        status: "Available",
      },
    ],
    houseVillas: [
      {
        name: "Luxury Villa with Pool",
        details: {
          exteriorDetails: {
            plotSize: 10000,
            roof: "Thatched",
            construction: "Stone",
            cooling: "Central Air",
          },
          interiorDetails: {
            interiorSize: 5000,
            bedrooms: 6,
            bathrooms: 4,
            garage: 3,
            laundryRoom: "Yes",
          },
          roomDimensions: {
            livingRoom: 40,
            bathroom: 15,
            kitchen: 25,
          },
          propertyInfo: {
            propertyType: "Luxury Villa",
            yearBuilt: 2010,
            country: "USA",
            area: "Countryside",
            mls: "MLS789012",
            lotAcreage: "1 acre",
            images: [
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8THV4dXJ5JTIwVmlsbGElMjB3aXRoJTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1496328488450-9c5c5d555148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8THV4dXJ5JTIwVmlsbGElMjB3aXRoJTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
            ],
            price: 1200000,
            sqFeet: 6000,
          },
        },
        status: "Available",
      },
    ],
    houseApartments: [
      {
        name: "Modern City Apartment",
        details: {
          exteriorDetails: {
            plotSize: 0,
            roof: "xy",
            construction: "xyz",
            cooling: "cooler",
          },
          interiorDetails: {
            interiorSize: 1200,
            bedrooms: 2,
            bathrooms: 2,
            garage: 1,
            laundryRoom: "In Unit",
          },
          roomDimensions: {
            livingRoom: 15,
            bathroom: 8,
            kitchen: 10,
          },
          propertyInfo: {
            propertyType: "Apartment",
            yearBuilt: 2015,
            country: "USA",
            area: "City Center",
            mls: "MLS987654",
            lotAcreage: "3",
            images: [
              "https://plus.unsplash.com/premium_photo-1681487992758-600a82b05347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9kZXJuJTIwQ2l0eSUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1614002128779-35f1ffaa5b50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1vZGVybiUyMENpdHklMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
            ],
            price: 2000,
            sqFeet: 1200,
          },
        },
        status: "Available",
      },
    ],
    officeFloors: [
      {
        name: "Downtown Office Space",
        details: {
          exteriorDetails: {
            plotSize: 5500, // in square feet
            roof: "Flat",
            construction: "Steel Frame",
            cooling: "Central Air",
          },
          interiorDetails: {
            interiorSize: 5800, // in square feet
            bedrooms: 4,
            bathrooms: 5,
            garage: 6,
            laundryRoom: "Common Area",
          },
          roomDimensions: {
            livingRoom: 5,
            bathroom: 5,
            kitchen: 5,
          },
          propertyInfo: {
            propertyType: "Office Space",
            yearBuilt: 2008,
            country: "USA",
            area: "Downtown",
            mls: "MLS123456",
            lotAcreage: "N/A",
            images: [
              "https://images.unsplash.com/photo-1481151500463-1fa2dd2d5dbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG93bnRvd24lMjBPZmZpY2UlMjBTcGFjZXxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1496681859237-6039cd585c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG93bnRvd24lMjBPZmZpY2UlMjBTcGFjZXxlbnwwfHwwfHx8MA%3D%3D",
            ],
            price: 8000,
            sqFeet: 5800,
          },
        },
        status: "Available",
      },
    ],
  },
};

module.exports = mockupData;
