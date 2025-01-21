import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4 sm:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Product Image & Details */}
            <div className="flex items-start gap-4">
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <div className="flex items-center gap-4 mt-2 text-sm sm:text-base">
                  <p className="text-gray-800">
                    {currency} {item.price}
                  </p>
                  <p className="text-gray-600">Quantity: 1</p>
                  <p className="text-gray-600">Size: M</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Date: <span className="text-gray-800">25, Jul, 2025</span>
                </p>
              </div>
            </div>

            {/* Status & Actions */}
            <div className="flex flex-col mr-14  sm:flex-row items-center gap-4">
              <div className="flex mr-14 items-center gap-2">
                <span className="w-3 h-3 rounded-full  bg-green-500"></span>
                <p className="text-sm  text-gray-700">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 ml-8 text-sm font-medium rounded-md hover:bg-gray-100">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
