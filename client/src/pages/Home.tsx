import { Link } from "react-router-dom";
import CustormButton from "../components/CustormButton";
import Discover from "../components/Discover";

const Home: React.FC = () => {
  return (
    <>
      <div className="lg:px-0 mt-[50px] lg:mt-[0]">
        <div className="lg:flex lg:space-x-3 max-h-screen h-screen">
          <div className="px-5 lg:px-8 left lg:w-fit lg:h-full relative h-screen -translate-y-28 lg:translate-y-2 justify-center flex flex-col space-y-7 ">
            <h1 className="text-3xl font-bold md:w-4/5 md:text-5xl ">
              Trusted Real Estate property for you
            </h1>
            <p className="text-xs md:text-sm text-[#808080] md:w-4/5">
              Looking for your dream house or property. Search here and select
              your best one from more than 1 million listing
            </p>

            <div className="flex relative">
              <Link to="/">
                <CustormButton
                  context="Discover Properties"
                  custom_style="bg-black text-white hover:bg-white hover:text-black  relative"
                />
                <Discover />
              </Link>

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
              We have the bebst to suit your interes and are all afordable{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
