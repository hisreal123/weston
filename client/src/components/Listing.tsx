import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "/assets/carousel/img1.jpg";
import img2 from "/assets/carousel/img2.png";
import { useState } from "react";

const images = [img1, img2];

const Listing = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If current index is the last index, go back to the first index (0)
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If current index is the first index, go to the last index
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="wrapper py-8 md:py-0 ">
      <div className="relative">
        {images.map((image, index) => (
          <div className="h-full w-full overflow-hidden" key={index}>
            <img
              key={index}
              src={image}
              alt={`Image ${currentIndex + 1}`}
              className={` relative h-full w-full object-cover ${
                index === currentIndex ? " block " : "hidden"
              }`}
            />
          </div>
        ))}

        <div className="wrap absolute bottom-3 right-3 flex space-x-3">
          <div
            className="border-2 border-white/50 rounded-full group hover:border-white cursor-pointer"
            onClick={prevSlide}
          >
            <IoIosArrowBack className="text-white/50 text-3xl group-hover:text-white " />
          </div>

          <div
            className="border-2 border-white rounded-full group hover:border-white cursor-pointer"
            onClick={nextSlide}
          >
            <IoIosArrowForward className="text-white/50 text-3xl group-hover:text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
