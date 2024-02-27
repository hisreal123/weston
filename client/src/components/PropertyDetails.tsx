import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/api";
import Highlights from "./Highlights";
import { PropertyData } from "../../index";

const PropertyDetails: React.FC = () => {
  const [data, setData] = useState<PropertyData | null>(null);

  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await axiosInstance.get<PropertyData>(
          `/api/properties/categories/${name}`
        );
        const fetchedData = res.data;
        console.log(res.data);
        setData(fetchedData);

        // // Store images in localStorage
        // if (fetchedData.images) {
        //   localStorage.setItem("dataImage", JSON.stringify(fetchedData.images));
        // }
      } catch (error) {
        console.log("Error fetching category data", error);
      }
    };
    fetchCatData();
  }, [name]);

  return (
    <div className="px-5 mt-50">
      {data && (
        <section>
          <div className="tp border-b border-gray-500 pb-4 mb-5">
            <span className="block font-bold">Overview</span>
          </div>
          {/* gallery section */}
          <div className="gallery grid grid-cols-1 md:grid-cols-1">
            {data.images && data.images.length > 0 && (
              <div className="md:h-[450px] w-full">
                <img
                  src={data.images[0]}
                  alt={`Property image number 1`}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          {/* grid section for content */}
          <div className="content my-4 grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="left col-span-2">
              <div className="tp my-3">
                <h1 className="font-bold md:text-xl">{data.name}</h1>
                <div className="flex text-xs font-light text-black/50 mb-2 space-x-1 mt-1">
                  <p>{data.address.street}</p>
                  <p>{data.address.city}</p>
                  <p>{data.address.state}</p>
                  <p>{data.address.postalCode}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
                <div className="left flex flex-col justify-between">
                  <div className="wrap">
                    <div className="ctn font-bold mb-4 md:text-xl">
                      <h1> ${data.listingPrice}</h1>
                    </div>

                    <h4 className="font-bold text-xs mb-2">
                      Est. Payment: ${((data.listingPrice / 12) * 1).toFixed(2)}
                    </h4>
                    <div className="flex space-x-2 text-xs">
                      <h5 className="font-light">
                        <b className="font-bold mr-2">Status:</b>
                        {data.status}
                      </h5>
                      <div className="w-[.1rem] bg-black"></div>
                      <h5 className="">
                        <b className="font-bold mr-2">Days on site: </b>
                      </h5>
                      {data.floors / 2}
                    </div>

                    <h1 className="font-bold mt-5 mb-2">House DESCRIPTION</h1>
                    <p className="text-xs md:text-sm text-gray-600">
                      {data.description}
                    </p>
                  </div>

                  {/* Exterior Details */}

                  <div className="exterior mt-20">
                    <h1 className="font-bold md:text-lg">Exterior Details</h1>
                    <ol className="list-disc list-inside mt-4 text-xs flex flex-col space-y-2">
                      <li>
                        <b className="font-bold mr-1">Plot Size:</b>
                        {Math.ceil(data.size.totalArea / 6)}
                      </li>
                      <li>
                        <b className="font-bold mr-1">Roof:</b>Partial Roof
                      </li>
                      <li>
                        <b className="font-bold mr-1">Constructon:</b>Best
                      </li>
                      <li>
                        <b className="font-bold mr-1">Cooling:</b>Electric Air
                        Conditioning
                      </li>
                      <li>
                        <b className="font-bold mr-1">Power:</b>Electrical &
                        Solar
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="rgh w-full md:px-10 flex flex-col justify-between">
                  <div className="wrap">
                    <div className="flex justify-between text-sm space-x-2 text-black-500 font-bold py-10 md:py-0 w-4/5 md:w-full">
                      <div className="flex flex-col">
                        <span>{data.bedrooms}</span>
                        <span>BEDS</span>
                      </div>
                      <div className="w-[.1rem] bg-black"></div>
                      <div className="flex flex-col">
                        <span>{data.bathrooms}</span>
                        <span>BATHS</span>
                      </div>
                      <div className="w-[.1rem] bg-black"></div>
                      <div className="flex flex-col">
                        <span>{data.size.totalArea}</span>
                        <span>SQ.FT</span>
                      </div>
                    </div>
                    {/* highlight */}
                    <div className="hghligt relative text-sm">
                      <Highlights
                        data={{
                          propertyType: data.category,
                          size: {
                            livingArea: data.size.totalArea,
                          },
                          yearBuilt: data.floors,
                          address: {
                            country: "USA", // You might need to update this
                            state: data.address.state,
                          },
                          bathrooms: data.bathrooms,
                          floors: data.floors,
                          garage: data.garage,
                          LaundryRoom: data.LaundryRoom,
                        }}
                      />
                    </div>
                  </div>

                  {/* interior Details */}

                  <div className="interior mt-10 md:mt-20">
                    <h1 className="font-bold md:text-lg">Interior Details</h1>
                    <ol className="list-disc list-inside mt-4 text-xs flex flex-col space-y-2">
                      <li className="font-light">
                        <b className="font-bold mr-1">Interior Size: </b>
                        {data.size.totalArea} Sqft.
                      </li>
                      <li className="font-light">
                        <b className="font-bold mr-1">Bedroom: </b>
                        {data.bedrooms}
                      </li>
                      <li className="font-light">
                        <b className="font-bold mr-1">Bathrooms:</b>{" "}
                        {data.bathrooms}
                      </li>
                      <li className="font-light">
                        <b className="font-bold mr-1">Garage:</b>{" "}
                        {data.bathrooms / 3}
                      </li>
                      <li className="font-light">
                        <b className="font-bold mr-1">Laundry Room: </b>
                        {data.size.totalArea / 2} Area
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="rgh mt-10 md:0">
              {/* lorem lll */}
              <div className="interior mt-20 flex flex-col justify-between">
                <h1 className="font-bold md:text-lg">Room Details</h1>
                <ol className="list-disc list-inside mt-4 text-xs flex flex-col space-y-2">
                  <li>
                    <b className="font-bold mr-1">Interior Size:</b>{" "}
                    {data.size.totalArea} Sqft.
                  </li>
                  <li>
                    <b className="font-bold mr-1">Bedroom: </b>
                    {data.bedrooms}
                  </li>
                  <li>
                    <b className="font-bold mr-1">Bathrooms:</b>{" "}
                    {data.bathrooms}
                  </li>
                  <li>
                    <b className="font-bold mr-1">Garage:</b>{" "}
                    {data.garage ? data.garage : 0}
                  </li>
                  <li>
                    <b className="font-bold mr-1">Laundry Room:</b>{" "}
                    {data.LaundryRoom ? data.LaundryRoom : 0}
                  </li>
                </ol>
              </div>
            </div>

            {/* Render other details */}
          </div>
        </section>
      )}
    </div>
  );
};

export default PropertyDetails;
