import React from "react";

interface HighlightsProps {
  data: {
    propertyType: string;
    size: {
      livingArea: number;
    };
    yearBuilt: number;
    address: {
      country: string;
      state: string;
    };
    bathrooms: number;
    floors: number;
    garage: number;
    LaundryRoom: number;
  };
}

const Highlights: React.FC<HighlightsProps> = ({ data }) => {
  return (
    <>
      <section className="my-5">
        <h1 className="my-3 font-bold md:text-xl"> HIGHLIGHTS</h1>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Property Type</h6>
          <h6> {data.propertyType}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Living Area</h6>
          <h6> {Math.ceil(data.size.livingArea / 3)}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Year Built</h6>
          <h6> {data.yearBuilt ? data.yearBuilt : 2001}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Country</h6>
          <h6> {data.address.country ? data.address.country : "USA"}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">State</h6>
          <h6> {data.address.state ? data.address.state : "ALABAMA"}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Bathrooms</h6>
          <h6> {data.bathrooms ? data.bathrooms : 3}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Floors</h6>
          <h6> {data.floors ? data.floors : "2 Solid"}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Garage</h6>
          <h6> {data.garage ? data.garage : 1}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Laundry Room</h6>
          <h6> {data.LaundryRoom ? data.LaundryRoom : 2}</h6>
        </div>
      </section>
    </>
  );
};

export default Highlights;
