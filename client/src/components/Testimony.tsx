import React from "react";
import img1 from "/assets/carousel/profile.png";
import qMark from "/assets/carousel/qMark.svg";
import qMark2 from "/assets/carousel/qMark2.svg";

const Testimony: React.FC = () => {
  return (
    <>
      <div className="bg-white md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 p-4 md:p-12 gap-3md:gap-5">
        <div className="left md:fit w-full  relative">
          <img src={img1} alt="client_profile " className="w-full h-full" />
        </div>
        <div className="right flex flex-col justify-center col-span-2">
          <div className="wrap px-4 self-start ">
            <div className="tp flex mt-3 md:mt-0 md:0">
              <img
                src={qMark}
                alt="question_mark "
                className="self-start h-7 md:h-12"
              />
              <img
                src={qMark}
                alt="question_mark "
                className="mb-6 self-start h-7 md:h-12"
              />
            </div>
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              commodo eget dictum molestie pretium viverra sed viverra. Lobortis
              ipsum sed faucibus hendrerit netus fringilla. Tortor vel ut ut
              mauris condimentum sagittis. Quam ultrices tempor blandit eget
              pharetra, velit tortor non. Massa pharetra enim fermentum nisi,
              commodo egestas a, quam. Integer imperdiet eu sit donec convallis
              tellus nisi. At elit, rhoncus ullamcorper nam enim,
            </p>

            <div className="btm flex w-full justify-end">
              <img src={qMark2} alt="question_mark " className="h-7 md:h-12" />
              <img src={qMark2} alt="question_mark " className="h-7 md:h-12" />
            </div>
          </div>

          <div
            className="detailsWrap ml-4 text-sm
          "
          >
            <h4 className="font-bold">S.T JOHN</h4>

            <p className="text-gray-400">-London</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
