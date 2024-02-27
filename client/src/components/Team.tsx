import React, { Suspense, useEffect, useState } from "react";
import placeholder from "/assets/placeholder.svg";
import CustormButton from "./CustormButton";
import toast from "react-hot-toast";
import axiosInstance from "../utils/api";
import { motion } from "framer-motion";

interface TeamDataProps {
  imageUrl: string;
  name: string;
  position: string;
}

const Team: React.FC = () => {
  const [teamData, setTeamData] = useState<{
    team: { [key: string]: TeamDataProps };
  }>({ team: {} });

  // converts the Object to an array.
  const filterImageData = Array.from(Object.values(teamData.team));

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axiosInstance.get("/api/team");
        setTeamData(res.data);

        // set the data into teamData and store it in local storage for next reload, a better way to optimize server
        localStorage.setItem("teamData", JSON.stringify(res.data));
      } catch (error) {
        // console.log("Error fetching data", error);
      }
    };
    fetchedData();

    // now we check if the data is empty, den it assing the data from localStorage to localData, or we use fetchedData()
    if (Object.keys(teamData.team).length === 0) {
      const localData = localStorage.getItem("teamData");
      if (localData) {
        setTeamData(JSON.parse(localData));
      } else {
        fetchedData();
      }
    }
  }, [teamData]);

  // console.log(teamData);

  /** add more button*/
  const handleAddMore = () => {
    toast.success("That is all for now !!");
  };

  return (
    <section className="wrap mt-2 py-5">
      <div className="top text-center lg:my-14 my-8">
        <h1 className="text-md  font-bold md:text-2xl ">
          MEMBERS OF WESTON GROUP
        </h1>
        <p className="text-#808080 text-xs md:text-sm ">Meet the team</p>
      </div>

      <Suspense fallback="loading...">
        <div className="wrap">
          <div className="div grid grid-cols-1 lg:grid-cols-3 px-10 py-4 md:px-0 md:grid-cols-2 md:gap-4 md:w-4/5 mx-auto gap-4 relative ">
            {filterImageData.map((data, index) => (
              <motion.div
                className="relative "
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <div className="h-[400px]  relative w-full md:h-[375px] md:w-[324px] overflow-hidden">
                  <img
                    src={data.imageUrl || placeholder}
                    alt={data?.name}
                    height={100}
                    width={100}
                    className="h-full w-full object-cover hover:scale-105 transition-all duration-50 "
                  />
                </div>

                <div className="relative mt-5 flex flex-col items-center">
                  <span className="font-bold mb-2">{data?.name}</span>
                  <span className="text-gray-300 font-light text-xs">
                    {data?.position}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="wrap mx-auto w-fit mt-20 mb-10">
          <CustormButton
            fn={handleAddMore}
            custom_style="border border-black/80 hover:bg-black hover:text-white text-xs "
            context="LOAD MORE"
          />
        </div>
      </Suspense>
    </section>
  );
};

export default Team;
