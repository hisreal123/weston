import { Link } from "react-router-dom";
import CustormButton from "../components/CustormButton";
import Discover from "../components/Discover";
import CategoryShowCase from "../components/CategoryShowCase";
import Listing from "../components/Listing";
import Testimony from "../components/Testimony";
import { BlogCard } from "../components/BlogCard";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/api";
import ExpertLocations from "../components/ExpertLocations";

const Home: React.FC = () => {
  const [blogData, setBlogData] = useState([] as []);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axiosInstance.get("/api/blog");
        setBlogData(res.data);
        // console.log(res.data);

        // set the data into teamData and store it in local storage for next reload, a better way to optimize server
        localStorage.setItem("blogData", JSON.stringify(res.data));
      } catch (error) {
        // console.log("Error fetching data", error);
      }
    };

    fetchedData();

    // now we check if the data is empty, den it assing the data from localStorage to localData, or we use fetchedData()
    if (Object.keys(blogData).length === 0) {
      const localData = localStorage.getItem("blogData");
      if (localData) {
        setBlogData(JSON.parse(localData));
      } else {
        fetchedData();
      }
    }
  }, [blogData]);

  const filteredBlogData = Array.from(Object.values(blogData));
  // console.log(filteredBlogData);

  return (
    <>
      <div className="lg:px-0 mt-[50px] lg:mt-[0] bg-gray-100/50">
        <div className="lg:grid bg-white pb-4  md:grid-cols-2 grid-cols-1 lg:space-x-3 max-h-screen h-screen">
          <div className="px-5 lg:px-8 left lg:w-fit lg:h-full relative h-screen -translate-y-28 lg:translate-y-2 justify-center flex flex-col space-y-7 ">
            <h1 className="text-3xl font-bold md:w-4/5 md:text-5xl ">
              Trusted Real Estate property for you
            </h1>
            <p className="text-xs md:text-sm text-[#808080] md:w-4/5">
              Looking for your dream house or property. Search here and select
              your best one from more than 1 million listing
            </p>

            <div className="flex relative">
              <div>
                <Link to="/properties">
                  <CustormButton
                    context="Discover Properties"
                    custom_style="bg-black text-white hover:bg-white hover:text-black  relative"
                  />
                </Link>
                <Discover />
              </div>

              <Link to="/about">
                <CustormButton
                  context="Learn More"
                  custom_style=" hover:bg-black hover:text-white ml-4"
                />
              </Link>
            </div>
          </div>
          <div className="right hidden lg:block  relative overflow-hidden">
            <div className="lg:block relative">
              <img
                src="./assets/home_img.svg"
                alt="home_img"
                height={100}
                width={100}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Areas */}

        <section className="wrap ">
          <div className="top text-center lg:my-14">
            <h1 className="text-md  font-bold md:text-2xl ">
              WHAT AREA ARE YOU LOOKING FOR?
            </h1>
            <p className="text-#808080 text-xs md:text-sm ">
              We have the best to suit your interes and are all afordable{" "}
            </p>
          </div>

          <CategoryShowCase />
        </section>
        {/* Areas */}

        <section className="wrap ">
          <div className="top text-center lg:my-14">
            <h1 className="text-md  font-bold md:text-2xl ">WHO WE ARE</h1>
            <p className="text-#808080 text-xs md:text-sm ">
              We have the best to suit your interes and are all afordable
            </p>
          </div>
        </section>

        {/* What we are*/}
        <section className=" py-10">
          <div className=" px-5 grid md:grid-cols-2  grid-cols-1 gap-5">
            <div className="lg:px-8 left lg:w-fit lg:h-full relative justify-center flex flex-col space-y-8 ">
              <h1 className="text-xl font-bold md:w-4/5 md:text-3xl ">
                MEET THE WESTON REAL ESTATE
              </h1>
              <p className="text-xs md:text-sm text-[#808080] md:w-4/5 leading-loose">
                Meet the Weston Real Estate, your premier destination for
                personalized property solutions. Whether you're searching for
                the perfect family home, a cozy apartment, or a prime commercial
                space, we are dedicated to making your real estate dreams a
                reality. Our team of expert agents will guide you every step of
                the way, ensuring a smooth and stress-free experience. From
                luxury listings to affordable options, we have something for
                everyone. Discover your next investment with Weston Real Estate
                and unlock a world of possibilities. Contact us today to start
                your journey towards finding the perfect property.
              </p>

              <div className="flex relative">
                <Link to="/about">
                  <CustormButton
                    context="READ MORE"
                    custom_style="border border-black/80 hover:bg-black hover:text-white "
                  />
                </Link>
              </div>
            </div>
            <div className="right hidden lg:block relative overflow-hidden w-full">
              <div className="lg:block relative">
                <img
                  src="./assets/about_img.svg"
                  alt="about_img"
                  height={100}
                  width={100}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Listing  */}
        <section className="listing">
          <div className="top text-center my-5 md:my-14">
            <h1 className="text-md  font-bold md:text-2xl ">
              EXCLUSIVE LISTINGS
            </h1>
            <p className="text-#808080 text-xs md:text-sm ">
              Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
              Sodales semper tempor dictum faucibus habitasse.{" "}
            </p>
          </div>

          <Listing />
        </section>

        {/* Executive Listing  */}
        <section className="listing">
          <div className="top text-center my-5 md:my-14">
            <h1 className="text-md  font-bold md:text-2xl ">
              EXCLUSIVE LISTINGS
            </h1>
            <p className="text-#808080 text-xs md:text-sm ">
              Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
              Sodales semper tempor dictum faucibus habitasse.{" "}
            </p>
          </div>

          <ExpertLocations />
        </section>

        {/* What Client says*/}
        <section className="listing">
          <div className="top text-center my-5 md:my-14">
            <h1 className="text-md  font-bold md:text-2xl ">
              AREA OF EXPERTIES
            </h1>
            <p className="text-#808080 text-xs md:text-sm ">
              We are experts in the following locations, with certified customer
              interest
            </p>
          </div>

          <Testimony />
        </section>

        {/*Blog*/}
        <section className="py-10 relative ">
          <div className="blog grid grid-cols-1 gap-5 md:grid-cols-3 px-3 md:w-4/5 mx-auto relative">
            <BlogCard blogData={filteredBlogData} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
