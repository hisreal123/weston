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
            images: [
              "https://images.unsplash.com/photo-1618946467973-a5105efa83eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1610565094701-ddfce4af14b5?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1568548634530-38ee433dcc1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          interiorDetails: {
            interiorSize: 2000,
            bedrooms: 4,
            bathrooms: 2,
            garage: 2,
            laundryRoom: "Yes",
            images: [
              "https://images.unsplash.com/photo-1528908929486-dfaa209c6986?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          roomDimensions: {
            livingRoom: 20,
            bathroom: 10,
            kitchen: 15,
            images: [
              "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1488813340362-2a31b5522ebe?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
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
              "https://images.unsplash.com/photo-1688647063090-36f36f692d95?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            images: [
              "https://images.unsplash.com/photo-1487798452839-c748a707a6b2?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1532490389938-2856e3f1560a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          interiorDetails: {
            interiorSize: 5000,
            bedrooms: 6,
            bathrooms: 4,
            garage: 3,
            laundryRoom: "Yes",
            images: [
              "https://images.unsplash.com/photo-1512972972907-6d71529c5e92?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1562663464-36b958487cd6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          roomDimensions: {
            livingRoom: 40,
            bathroom: 15,
            kitchen: 25,
            images: [
              "https://images.unsplash.com/photo-1559294094-ef9682194038?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1459801722795-3d86a4dfda53?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
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
            images: [
              "https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1529113241001-b495badd8d44?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          interiorDetails: {
            interiorSize: 1200,
            bedrooms: 2,
            bathrooms: 2,
            garage: 1,
            laundryRoom: "In Unit",
            images: [
              "https://images.unsplash.com/photo-1540809799-5da9372c3f64?q=80&w=1324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1517706355179-794182e1e0d4?q=80&w=1322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          roomDimensions: {
            livingRoom: 15,
            bathroom: 8,
            kitchen: 10,
            images: [
              "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1603904068158-f4ce1371dbc8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
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
            images: [
              "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          interiorDetails: {
            interiorSize: 5800, // in square feet
            bedrooms: 4,
            bathrooms: 5,
            garage: 6,
            laundryRoom: "Common Area",
            images: [
              "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1518299734107-83b069adf8af?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          roomDimensions: {
            livingRoom: 5,
            bathroom: 5,
            kitchen: 5,
            images: [
              "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1531471689044-dd3ca86632e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
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
