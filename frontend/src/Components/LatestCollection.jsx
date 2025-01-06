import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]); // Ensure effect re-runs when products change

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our handpicked Latest Collection, designed to elevate your style game and keep you ahead of the trends.
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((item,index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image} // Pass the image field
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
