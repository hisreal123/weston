import axios from "axios";
import React, { useEffect, useState } from "react";
interface Section {
  imageUrl: string;
  // Add any other properties of section here
}

const CategoryShowCase: React.FC = () => {
  const [dataImage, setDataImage] = useState<string>("");
  const [dataSection, setDataSections] = useState<Section[]>([]);

  const baseURL = "http://localhost:4000/";

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(`${baseURL}api/places`);

        const sections = res.data[0]?.sections;

        setDataSections(sections);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchedData();
  }, []);

  console.log(dataSection);

  return (
    <>
      <div>
        <h1> Section</h1>
        <div className="wrapper h-[450px] w-[360px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-red-400">
          {/* {Object.entries(dataSection).map([section, index]) => (

          ) )} */}
          <img
            src={dataImage || "https://via.placeholder.com/360x450"}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CategoryShowCase;
