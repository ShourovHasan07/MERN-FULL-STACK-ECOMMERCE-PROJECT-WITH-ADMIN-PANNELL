import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../Components/CartTotal";

const Card = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR  "} text2={"CART"}></Title>
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          // Handle cases where productData is undefined
          if (!productData) {
            return (
              <div key={index} className="py-4 border-t border-b text-gray-700">
                <p className="text-red-500">Product not found</p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image?.[0] || "https://via.placeholder.com/150"}
                  alt={productData.name || "Product"}
                />

                <div>
                  <p className="text-sm font-medium sm:text-lg">
                    {productData.name || "Unknown Product"}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <p>{currency}{productData.price || "N/A"}</p>
                    <p className="border px-2 sm:px-3 sm:py-1 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
                className="ml-20 border border-orange-500 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-3 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt="Delete"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />

          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black hover:bg-slate-400 rounded p-2 mt-6 text-stone-50 transition-colors duration-300 sm:text-sm md:text-base lg:text-lg"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
