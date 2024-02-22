
export interface Property {
  name: string;
  details: {
    exteriorDetails: {
      plotSize: number;
      roof: string;
      construction: string;
      cooling: string;
      images: [string];
    };
    interiorDetails: {
      interiorSize: number;
      bedrooms: number;
      bathrooms: number;
      garage: number;
      laundryRoom: string;
      images: [string];
    };
    roomDimensions: {
      livingRoom: number;
      bathroom: number;
      kitchen: number;
      images: [string];
    };
    propertyInfo: {
      propertyType: string;
      yearBuilt: number;
      country: string;
      area: string;
      mls: string;
      lotAcreage: string;
      images: [string];
      price: number;
      sqFeet: number;
    };
  };
  status: string;
  _id: string;
}

export interface SectionSchema {
  livingHouses: Property[];
  houseVillas: Property[];
  houseApartments: Property[];
  officeFloors: Property[];
}
