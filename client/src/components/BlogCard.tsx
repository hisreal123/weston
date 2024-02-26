import CustormButton from "./CustormButton";
import { Link } from "react-router-dom";

interface BlogDataProps {
  _id: number;
  imgURL: string;
  title: string;
  description: string;
  content: string;
}

export const BlogCard: React.FC<{ blogData: BlogDataProps[] }> = ({
  blogData,
}) => {
  // const { imgURL, title, description } = blogData;

  return (
    <>
      {blogData.map((d, i) => (
        <div className="shadow-md relative h-full " key={i}>
          <Link to={`/blog/${d._id}`}>
            <div className="img overflow-hidden">
              <img src={d.imgURL} alt="" className="h-full w-full" />
            </div>
          </Link>

          <div className="content relative px-3 md:px-5 flex flex-col justify-between items-center">
            <Link to={`/blog/${d._id}`} className="block">
              <h2 className="text-xs md:text-sm font-bold text-center my-5">
                {d.title}
              </h2>
            </Link>

            <p className="text-sm leading text-center">{d.description}</p>

            <Link to={`/blog/${d._id}`}>
              <CustormButton
                context="READ MORE"
                custom_style="border border-black/80 hover:bg-black hover:text-white w-fit my-4 text-xs md:text-sm"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
