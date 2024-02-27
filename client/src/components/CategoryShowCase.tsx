import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/api";

interface Property {
  category: string;
  images: string[];
}

const CategoryShowCase: React.FC = () => {
  const [dataSection, setDataSections] = useState<Property[]>([]);
  const [firstImages, setFirstImages] = useState<
    { category: string; imageUrl: string }[]
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
    // Extract category and first image from each property
    const images = dataSection.map((property) => ({
      category: property.category,
      imageUrl: property.images[0],
    }));
    setFirstImages(images);
  }, [dataSection]);

  return (
    <>
      <div>
        <h1> Section</h1>
        <div className="wrapper relative h-[450px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {firstImages.map((item, index) => (
            <div className="wrapper relative h-[300px] md:h-full" key={index}>
              <div className="wrap relative h-full">
                <div className="h-full w-full">
                  <img
                    src={item.imageUrl}
                    className="h-full w-full object-cover"
                    alt={`Property image ${index}`}
                  />
                </div>
                <p className=" tex-center bg-black/40 px-3 py-2 absolute w-full bottom-0 text-center text-white font-bold">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryShowCase;
