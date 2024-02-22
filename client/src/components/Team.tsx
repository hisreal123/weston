import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import placeholder from "/assets/placeholder.svg";
import CustormButton from "./CustormButton";
import toast from "react-hot-toast";
interface TeamDataProps {
  imageUrl: string;
  name: string;
  position: string;
}
const Team: React.FC = () => {
  const [teamData, setTeamData] = useState<{
    team: { [key: string]: TeamDataProps };
  }>({ team: {} });

  const baseURL = "http://localhost:4000/";

  const filterImageData = Array.from(Object.values(teamData.team));

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(`${baseURL}api/team`);
        setTeamData(res.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchedData();
  }, [teamData]);

  console.log(teamData);

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
          <div className="div grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-4 w-4/5 mx-auto  gap-4 relative ">
            {filterImageData.map((data, index) => (
              <>
                <div className="relative" key={index}>
                  <div className="h-[200px] w-1/2 relative md:h-[375px] md:w-[324px] overflow-hidden">
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
                </div>
              </>
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
