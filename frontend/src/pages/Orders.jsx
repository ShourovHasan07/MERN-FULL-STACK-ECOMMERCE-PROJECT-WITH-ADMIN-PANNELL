import React, { useContext,useEffect,useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title';
import axios from 'axios';


const Orders = () => {
  const { products, currency,backendUrl,token } = useContext(ShopContext);

  const [orderData,setOrderData] = useState([])
  const loadOrderData = async()=>{

    try {

      if(!token){
        return null
      }
     
       const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers: {
        Authorization: `Bearer ${token}`, // এখানে `token` অবশ্যই থাকতে হবে
      },})
       if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{

          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date

           allOrdersItem.push(item)

          })

        })

       setOrderData(allOrdersItem.reverse())
       }
      
    } catch (error) {
      
    }

  }


  useEffect (()=>{
    loadOrderData()
  },[token])

  


  return (
    <div className="border-t pt-16 px-4 sm:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orderData.map((item, index) => (
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
                  <p >Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Size:  {item.size}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Date: <span className="text-gray-800">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                 Payment: <span className="text-gray-800">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            {/* Status & Actions */}
            <div className="flex flex-col mr-14  sm:flex-row items-center gap-4">
              <div className="flex mr-14 items-center gap-2">
                <span className="w-3 h-3 rounded-full  bg-green-500"></span>
                <p className="text-sm  text-gray-700">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border px-4 py-2 ml-8 text-sm font-medium rounded-md hover:bg-gray-100">
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
