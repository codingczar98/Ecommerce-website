import React, {
  useEffect,
  useState,
} from "react";

export const Cart = ({
  cart,
  handleqty,
  handleremove,
}) => {
  const [tamnt, setTamnt] = useState(0);

  const totalamount = () => {
    let sum = 0;
    for (let i of cart) {
      sum = sum + i.qty * i.price;
    }
    setTamnt(sum);
  };
  useEffect(() => {
    totalamount();
  }, [cart]);
  return (
    <>
      <div className=" bg-black text-white">
        <div className="container border m-auto md:w-3/4 lg:w-11/12 rounded-md ">
          <h1 className="text-3xl text-center my-4">
            {" "}
            MyCart
          </h1>
          {cart.map((item, index) => {
            const {
              image,
              title,
              price,
              category,
              id,
              qty,
            } = item;

            return (
              <div
                className="flex py-4 px-4 border rounded m-1 "
                key={index}
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden ">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="w-3/5">
                  <div className="mt-1 ml-3">
                    <p> {title}</p>
                    <p> ${price}</p>
                  </div>
                </div>
                <div className="ml-2 mt-2">
                  <button
                    onClick={() =>
                      handleqty("+", index)
                    }
                    className="px-2 rounded-md text-2xl text-gray-100 border-gray-200 border-2"
                  >
                    +
                  </button>
                  <span className="text-purple text-xl m-2">
                    {qty}
                  </span>
                  <button
                    onClick={() =>
                      handleqty("-", index)
                    }
                    className="px-2.5 rounded-md text-2xl text-gray-100 border-gray-200 border-2"
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    className="text-red-500 ml-9 mt-1 text-md hover:text-white hover:bg-red-600 px-3 py-2 rounded-md"
                    onClick={() =>
                      handleremove(index)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:w-11/12 md:w-3/4 p-3 border-b text-xl m-auto text-right rounded">
          <p>
            {" "}
            Totaol amount: <span>${tamnt}</span>
          </p>
        </div>
      </div>
    </>
  );
};
