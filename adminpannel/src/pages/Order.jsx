import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from './../assets/admin_assets/assets';
import { backendUrl } from './../App';

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      console.log("Fetching orders...");

      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Full API Response:", response);
      console.log("Response Data:", response.data);

      if (response.data && Array.isArray(response.data.orders)) {
        setOrders(response.data.orders);
      } else {
        toast.error("Invalid response format from server");
      }
    } catch (error) {
      console.log("Error fetching orders:", error.message);
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-6">Order Page</h3>
      <div className="space-y-6">
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, orderIndex) => (
            <div key={orderIndex} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src={assets.parcel_icon} alt="Parcel Icon" className="w-12 h-12" />
                <div>
                  <p className="text-lg font-medium">Order #{orderIndex + 1}</p>
                  <p className="text-sm text-gray-500">Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="mb-4">
                {Array.isArray(order.items) && order.items.length > 0 ? (
                  order.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm text-gray-700">
                      {item.name} x {item.quantity} <span className="text-sm text-gray-500">({item.size})</span>
                    </p>
                  ))
                ) : (
                  <p>No items in this order</p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                {order.address ? (
                  <div>
                    <p className="font-semibold">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p>{order.address.street}</p>
                    <p>{order.address.city}, {order.address.state}, {order.address.country}</p>
                    <p className="text-sm text-gray-500">Phone: {order.address.phone}</p>
                  </div>
                ) : (
                  <p>No address available</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold">Items:</p>
                  <p>{order.items.length}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Payment Method:</p>
                  <p>{order.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Payment Status:</p>
                  <p>{order.payment ? 'Done' : 'Pending'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Total Amount:</p>
                  <p>${order.amount}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold">Status:</p>
                <select value={order.status} className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No orders available</p>
        )}
      </div>
    </div>
  );
};

export default Order;
