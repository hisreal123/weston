import { useEffect, useState } from "react";
import CustormButton from "./CustormButton";
import toast from "react-hot-toast";
import axiosInstance from "../utils/api";

interface CategoryProps {
  category: string;
}
const PropertySection: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [catTitle, setCatTitle] = useState<string>("");
  const [catData, setCatData] = useState([] as []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/api/properties/categories`);
        const data = res.data;
        setCategories(data);
        console.log(data);
        localStorage.setItem("categoriesTitle", JSON.stringify(res.data));
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();

    if (Object.keys(categories).length === 0) {
      const localData = localStorage.getItem("categoriesTitle");
      if (localData) {
        setCategories(JSON.parse(localData));
      } else {
        fetchData();
      }
    }
  }, [categories]);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    toast.success("You clicked this !!");
    // console.log(category);
    setCatTitle(e.currentTarget.value);
  };

  useEffect(() => {
    const fetchCatData = async () => {
      if (catTitle) {
        try {
          const res = await axiosInstance.get(
            `/api/properties/categories/${catTitle}`
          );
          const data = res.data;
          setCatData(data);
        } catch (error) {
          console.log("Error fetching category data", error);
        }
      }
    };
    fetchCatData();
  }, [catTitle]);

  console.log(catData);
  // console.log(catTitle);

  // const returnDataImage = {Object.entries(catData).map(([key, value]) => {
  //         return (
  //           <div key={key}>
  //             <p>{value?.amenities}</p>
  //             {/* <p>{value?.name}</p> */}

  //             {/* Uncomment this section if you want to map through amenities */}
  //             {/* {value.amenities?.map((t, index) => (
  //             <p key={index}>{t}</p>
  //           ))} */}

  //             <div className="property-images">
  //               {value?.images?.map((img, index) => (
  //                 <img
  //                   key={index}
  //                   src={img}
  //                   alt={`Property Image ${index}`}
  //                   className="property-image"
  //                 />
  //               ))}
  //             </div>
  //           </div>
  //         );
  //       })}
  return (
    <>
      <div className="block px-4 mx-auto md:w-1/2">
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

      <div className="content"></div>
    </>
  );
};

export default PropertySection;

//  {
//    Object.entries(catData).map(([key, value]) => {
//      return (
//        <div key={key}>
//          {/* <p>{value?.amenities}</p> */}
//          <p>{value?.name}</p>

//          {/* Uncomment this section if you want to map through amenities */}
//          {/* {value.amenities?.map((t, index) => (
//               <p key={index}>{t}</p>
//             ))} */}

//          {/* <div className="property-images">
//                 {value?.images?.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt={`Property Image ${index}`}
//                     className="property-image"
//                   />
//                 ))}
//               </div>   */}
//        </div>
//      );
//    });
//  }
