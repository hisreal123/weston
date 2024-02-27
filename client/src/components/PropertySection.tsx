import { useEffect, useState } from "react";
import CustormButton from "./CustormButton";
import axiosInstance from "../utils/api";
import { Link } from "react-router-dom";

interface CategoryProps {
  category: string;
}

interface PropertyData {
  _id: number;
  name: string;
  images: string[];
  listingPrice: number;
  category: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  bedrooms: number;
  bathrooms: number;
  size: {
    totalArea: number;
  };
  // Add other properties as needed
}

const PropertySection: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [catTitle, setCatTitle] = useState<string>("");
  const [catData, setCatData] = useState<PropertyData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/api/properties/categories`);
        const data = res.data;
        setCategories(data);
        localStorage.setItem("categoriesTitle", JSON.stringify(res.data));
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();

    const localData = localStorage.getItem("categoriesTitle");
    if (!categories.length && localData) {
      setCategories(JSON.parse(localData));
    }

    // Set default catTitle if not already set
    if (!catTitle && categories.length > 0) {
      setCatTitle(categories[0].category);
    }
  }, [categories, catTitle, catData]);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCatTitle(e.currentTarget.value);
  };

  useEffect(() => {
    const fetchCatData = async () => {
      if (catTitle) {
        try {
          const res = await axiosInstance.get(
            `/api/properties/categories/${catTitle}`
          );
          const data: PropertyData = res.data;
          setCatData(data);

          // Store images in localStorage
          if (data.images) {
            localStorage.setItem("catImages", JSON.stringify(data.images));
          }
        } catch (error) {
          console.log("Error fetching category data", error);
        }
      }
    };
    fetchCatData();
  }, [catTitle]);

  // Placeholder image URL
  const placeholderImage = "https://placehold.co/600x400/png";

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

      <div className="content px-2 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {catData &&
            catData?.images?.slice(0, 6).map((image, index) => (
              <div className="relative" key={index}>
                <Link to={`/${catData.category}`}>
                  <div className="overflow-hidden">
                    <div
                      className="relative w-full h-[275px] overflow-hidden bg-center bg-cover 
                      hover:bg-blend-multiply transition-all duration-300 ease-in-out hover:scale-105 transform group flex justify-center items-center"
                      style={{
                        backgroundImage: `url(${
                          image ? image : placeholderImage
                        })`,
                      }}
                    >
                      <CustormButton
                        custom_style="border border-white text-white group-hover:px-6"
                        context="VIEW MORE"
                      />
                    </div>
                  </div>
                  {/* transition duration-300 ease-in-out transform hover:scale-105 */}
                </Link>
                <p className="font-bold text-xs my-2">
                  ${catData.listingPrice}
                </p>
                <div className="flex text-xs font-bold mb-2 space-x-2">
                  <p>{catData.address.street}</p>
                  <p>{catData.address.city}</p>
                  <p>{catData.address.state}</p>
                  <p>{catData.address.postalCode}</p>
                </div>
                <div className="flex text-xs font-light space-x-2 text-gray-500">
                  <p>{catData.bedrooms} BEDS</p>
                  <p>{catData.bathrooms} BATHS</p>
                  <p>{catData.size.totalArea} SQ.FT</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PropertySection;
