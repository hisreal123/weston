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
          <h6> {data.size.livingArea / 3}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Year Built</h6>
          <h6> {data.yearBuilt}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Country</h6>
          <h6> {data.address.country}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">State</h6>
          <h6> {data.address.state}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Bathrooms</h6>
          <h6> {data.bathrooms}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Floors</h6>
          <h6> {data.floors}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Garage</h6>
          <h6> {data.garage}</h6>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 py-1">
          <h6 className="text-gray-600">Laundry Room</h6>
          <h6> {data.LaundryRoom}</h6>
        </div>
      </section>
    </>
  );
};

export default Highlights;
