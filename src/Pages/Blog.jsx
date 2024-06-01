import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { FaCartShopping } from "react-icons/fa6";

const Blog = ({ addtocart }) => {
  const [alldata, setAlldata] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState(null);
  const getdata = async () => {
    await fetch(
      " https://fakestoreapi.com/products "
    )
      .then((res) => res.json())
      .then((data) => {
        setAlldata(data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const categories = Array.from(
    new Set(alldata.map((res) => res.category))
  );

  const categoryOptions = categories.map(
    (category) => ({
      value: category, 
      label: category, 
    })
  );

  const filterProducts = selectedCategory
    ? alldata.filter(
        (alldata) =>
          alldata.category ===
          selectedCategory.value
      )
    : alldata;

  return (
    <>
      <div className="bg-black">
        <h1 className="text-white text-3xl p-4 text-center">
          All Categories
        </h1>
        <div className="w-1/2 m-auto p-2">
          <Select
            options={categoryOptions}
            isClearable
            placeholder="Search your Category"
            onChange={(selectOption) =>
              setSelectedCategory(selectOption)
            }
            value={selectedCategory}
          />
        </div>

        <section className="text-stone-200 body-font px-12 bg-black">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {filterProducts?.map(
                (item, index) => {
                  item["qty"] = 1;
                  const {
                    image,
                    title,
                    price,
                    category,
                    id,
                  } = item;
                  return (
                    <div
                      className="p-4 lg:w-1/3 md:w-80 sm:w-1/2"
                      key={index}
                    >
                      <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                        <img
                          className="lg:h-96 md:h-80 sm:h-60 w-full object-center object-inherhit object-fit"
                          src={image}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                            {category}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-100 mb-3">
                            {title}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam
                            kinfolk cold-pressed
                            sriracha leggings
                            jianbing microdosing
                            tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-yellow-500 inline-flex items-center md:mb-1 lg:mb-0">
                              <Link
                                to={`/blogs/${id}/${title}`}
                              >
                                Show details
                              </Link>
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>

                            <button
                              className="flex ml-auto text-yellow-500 border-solid  py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded-md "
                              onClick={() =>
                                addtocart(item)
                              }
                            >
                              AddCart{" "}
                              <FaCartShopping
                                className="ml-2 mt-1"
                                style={{
                                  fontSize:
                                    "19px",
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
