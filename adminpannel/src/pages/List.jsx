import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "./../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // Fetch Product List
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    }
  };

  
 // Remove Product Function
 const removeProduct = async (id) => {
  try {
    console.log("Product ID to delete:", id);  // ✅ এই লাইনটি যোগ করুন
    const response = await axios.post(
      backendUrl + "/api/product/remove",
      { id },  // এখানে {id} সঠিকভাবে পাঠানো হচ্ছে কিনা
      {
        headers: {
          "Content-Type": "application/json",  // multipart/form-data নয়, এটি সঠিক হতে পারে
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      toast.success("Product deleted successfully");
      setList((prevList) => prevList.filter((product) => product._id !== id));
    } else {
      toast.error(response.data.message || "Failed to delete product");
    }
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.data);
      toast.error(error.response.data.message || "Failed to delete product");
    } else {
      toast.error("Failed to delete product");
    }
  }
};
;


  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">All Product List</h2>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center bg-gray-100 text-sm font-semibold py-2 px-4 border">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className="text-center">Action</p>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-4">
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-2 px-4 hover:bg-gray-50 rounded-lg shadow-lg"
          >
            {/* Product Image */}
            <img
              className="w-16 h-16 object-cover rounded-md border shadow-md"
              src={item.image[0]}
              alt={item.name}
            />

            {/* Product Details */}
            <p className="font-medium">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-green-600 font-semibold">$ {item.price}</p>

            {/* Delete Button */}
            <p
              onClick={() => removeProduct(item._id)}
              className="text-red-500 hover:text-red-700 text-lg font-bold cursor-pointer"
            >
              ✖
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
