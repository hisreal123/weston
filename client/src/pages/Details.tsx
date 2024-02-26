import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustormButton from "../components/CustormButton";
import axiosInstance from "../utils/api";
import { useQuery } from "react-query";

interface PostData {
  _id: string;
  imgURL: string;
  author: string;
  title: string;
  description: string;
  content: string;
}

const Details: React.FC = () => {
  const { _id } = useParams<{ _id: string }>(); // Destructure _id from useParams

  const [postData, setPostData] = useState<PostData>({
    _id: "",
    imgURL: "",
    author: "",
    title: "",
    description: "",
    content: "",
  }); // Initialize postData as an object

  const { data, isLoading, isError } = useQuery<PostData>(
    ["post", _id],
    async () => {
      const res = await axiosInstance.get<PostData>(`/api/blog/${_id}`);
      return res.data;
    }
  );

  useEffect(() => {
    if (data) {
      setPostData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <section className="bg-gray-200">
        <div className="px-5 md:w-1/2 mx-auto py-20">
          <div className="h-[300px]">
            <img
              src={postData.imgURL}
              alt="Blog Image"
              className="relative h-full w-full object-cover"
            />
          </div>

          <div className="ctn">
            <span className="block mt-10 mb-3 font-bold text-xs md:text-sm">
              {postData.author}
            </span>
            <h1 className="font-bold md:text-3xl mb-4 text-xl">
              {postData.title}
            </h1>
            <p className="font-bold text-gray-500 mb-12 text-sm md:text-sm">
              {postData.description}
            </p>
            <p className="leading-loose mt-3 text-gray-500 text-sm">
              {postData.content}
            </p>
          </div>
        </div>
      </section>
      {/*  */}

      <div className="fixed bottom-6 right-6">
        <Link
          to="/"
          className="font-medium cursor-pointer hover:font-bold transition-all ease-in-out duration-300 delay-100"
        >
          Home
        </Link>
      </div>

      {/* Blog Footer */}
      <footer className="flex justify-center items-center bg-[#344055] py-20 px-4">
        <div className="text-white flex flex-col items-center text-center">
          <p>
            We're always happy to share latest updates with you and get you
            informed.
          </p>

          <Link to="/contact">
            <CustormButton
              custom_style="border border-white w-fit mt-4 text-xs md:text-sm hover:bg-[#f5f5f5] hover:text-[#344055]"
              context="CONTACT US"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Details;
