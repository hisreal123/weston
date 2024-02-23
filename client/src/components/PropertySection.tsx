import axios from "axios";
import { useEffect, useState } from "react";
import CustormButton from "./CustormButton";
import toast from "react-hot-toast";

interface CategoryProps {
  category: string;
}
const PropertySection: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [catTitle, setCatTitle] = useState<string>("");
  const [catData, setCatData] = useState([] as []);

  const baseURL =
    import.meta.env.VITE_API_KEY || import.meta.env.VITE_LOCAL_KEY;
  console.log(baseURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/properties/categories`);
        const data = res.data;
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    toast.success("You clicked this !!");
    // console.log(category);
    setCatTitle(e.currentTarget.value);
  };

  useEffect(() => {
    const fetchCatData = async () => {
      if (catTitle) {
        try {
          const res = await axios.get(
            `${baseURL}api/properties/categories/${catTitle}`
          );
          const data = res.data;
          setCatData(data);
        } catch (error) {
          console.log("Error fetching category data", error);
        }
      }
    };
    fetchCatData();
  }, []);

  console.log(catData);
  console.log(catTitle);
  return (
    <>
      <div className="block px-4 mx-auto md:w-1/2 ">
        <div className="flex items-center justify-center ">
          {categories.map((value, index) => (
            <div className="p-2" key={index}>
              <CustormButton
                context={`${value}`}
                fn={handleButton}
                value={`${value}`}
                custom_style="w-fit  text-[9px] md:text-xs border border-gray-300 hover:bg-black focus:bg-black focus:text-white hover:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertySection;
