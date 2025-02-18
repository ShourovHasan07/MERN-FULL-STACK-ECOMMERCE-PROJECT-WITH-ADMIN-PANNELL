import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { backendUrl } from "../App";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSizeSelection = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found in localStorage. Redirecting to login...");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("🎉 Product added successfully!", {
        position: "top-center",
        autoClose: 2000, // Toast disappears after 2 seconds
      });

      setTimeout(() => {
        window.location.reload(); // Reloads the page after a delay
      }, 2500);

    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        if (error.response.data.error === "jwt expired") {
          console.log("Token expired. Redirecting to login...");
          localStorage.removeItem("token");
          toast.error("Session expired! Please log in again.");
        }
      } else {
        console.error("Error:", error.message);
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <ToastContainer />
      <div>
        <p className="mb-3">Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt="upload"
              />
              <input
                type="file"
                id={`image${index + 1}`}
                hidden
                onChange={(e) => {
                  const setter = [setImage1, setImage2, setImage3, setImage4][index];
                  setter(e.target.files[0]);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <label className="block text-gray-700 font-semibold">Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[500px] px-2 py-2 mt-2 border rounded"
        />
      </div>

      <div className="w-full">
        <label className="block text-gray-700 font-semibold">Product Description</label>
        <textarea
          placeholder="Write product details"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-[500px] px-2 py-2 mt-2 border rounded"
        />
      </div>

      <div className="flex flex-wrap gap-4 p-4">
        <div className="w-full sm:w-1/3">
          <label className="block text-gray-700 font-semibold">Product Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-100 p-2 border rounded-md"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-gray-700 font-semibold">Sub Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full p-2 bg-gray-100 border rounded-md"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="WinterWear">WinterWear</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-gray-700 font-semibold">Product Price</label>
          <input
            type="number"
            placeholder="Enter price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-gray-100 p-2 border rounded-md"
          />
        </div>
      </div>

      <div>
        <p className="text-gray-700 font-semibold">Product Sizes</p>
        <div className="flex gap-3 px-3 mt-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() => handleSizeSelection(size)}
              className={`cursor-pointer px-4 py-2 ${
                sizes.includes(size) ? "bg-pink-200" : "bg-slate-300"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          id="bestseller"
          checked={bestSeller}
          onChange={(e) => setBestSeller(e.target.checked)}
        />
        <label className="cursor-pointer ml-2" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="bg-black text-white rounded px-9 py-2 cursor-pointer hover:bg-gray-700 shadow-md"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
