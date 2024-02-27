import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/api";
import CustormButton from "./CustormButton";
import { Link } from "react-router-dom";

interface Property {
  address: {
    state: string;
  };
  images: string[];
}

const ExpertLocations: React.FC = () => {
  const [dataSection, setDataSections] = useState<Property[]>([]);
  const [firstImages, setFirstImages] = useState<
    { state: string; imageUrl: string }[]
  >([]);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await axiosInstance.get<Property[]>(`/api/`);
        const data = res.data;
        setDataSections(data);

        // // Store images in localStorage
        // if (data.images) {
        //   localStorage.setItem("catImages", JSON.stringify(data.images));
        // }
      } catch (error) {
        console.log("Error fetching category data", error);
      }
    };
    fetchCatData();
  }, []);

  useEffect(() => {
    // Extract state and first image from each property
    const images = dataSection.map((property) => ({
      state: property.address.state,
      imageUrl: property.images[0],
    }));
    setFirstImages(images);
  }, [dataSection]);

  return (
    <div>
      <h1>Expert Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {firstImages.map((item, index) => (
          <Link to="/properties" key={index}>
            <div className="overflow-hidden">
              <div
                className="relative w-full h-[275px] overflow-hidden bg-center bg-cover 
              hover:bg-blend-multiply transition-all duration-300 ease-in-out hover:scale-105 transform group flex justify-center items-center"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              >
                <CustormButton
                  custom_style="font-bold text-white group-hover:px-6"
                  context={`${item.state}`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpertLocations;
