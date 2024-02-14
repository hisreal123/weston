import axios from "axios";
import React, { useEffect, useState } from "react";

const Sections: React.FC = () => {
  const [data, setData] = useState<[]>([]);

  const baseURL = "http://localhost:4000/";

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(baseURL);
        setData(res.data);
        console.log(res);
      } catch (error) {
        console.log("Error fetching data ", error);
      }
    };

    fetchedData();
  }, []);

  return (
    <>
      <div>
        <h1> Section</h1>

        <div className="wrapper h-[450px]"></div>
      </div>
    </>
  );
};

export default Sections;
