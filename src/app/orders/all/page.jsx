"use client";

import React, { useState } from 'react';

const orders = [
  {
    id: '12345',
    date: '2023-10-01',
    status: 'To Ship',
    total: '$150.00',
    items: [
      { product: 'Product A', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product B', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product H', imageUrl: '/homepage/amiibo_samplepic.webp' },
    ],
  },
  {
    id: '12346',
    date: '2023-10-02',
    status: 'To Pay',
    total: '$200.00',
    items: [
      { product: 'Product C', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product I', imageUrl: '/homepage/amiibo_samplepic.webp' },
    ],
  },
  {
    id: '12347',
    date: '2023-10-03',
    status: 'Completed',
    total: '$100.00',
    items: [
      { product: 'Product D', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product E', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product J', imageUrl: '/homepage/amiibo_samplepic.webp' },
    ],
  },
  {
    id: '12348',
    date: '2023-10-04',
    status: 'Cancelled',
    total: '$50.00',
    items: [
      { product: 'Product F', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product K', imageUrl: '/homepage/amiibo_samplepic.webp' },
    ],
  },
  {
    id: '12349',
    date: '2023-10-05',
    status: 'Return/Refund',
    total: '$75.00',
    items: [
      { product: 'Product G', imageUrl: '/homepage/amiibo_samplepic.webp' },
      { product: 'Product L', imageUrl: '/homepage/amiibo_samplepic.webp' },
    ],
  },
  // Add more orders as needed
];

const tabs = ['All', 'To Pay', 'To Ship', 'To Receive', 'Completed', 'Cancelled', 'Return/Refund'];

export default function Page() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOrders, setExpandedOrders] = useState({});

  const toggleExpandOrder = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = activeTab === 'All' || order.status === activeTab;
    const matchesSearch = order.items.some(item => item.product.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="mb-4">
        <div className="flex flex-wrap mb-4">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`flex-grow px-4 py-2 mr-2 mb-2 ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search by Product Name"
          className="w-full p-2 border rounded"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOrders.map(order => (
          <div key={order.id} className="border rounded-lg p-4 bg-white shadow">
            <h2 className="text-lg font-bold mb-2">Order ID: {order.id}</h2>
            <div className="text-sm text-gray-600 mb-2">
              <p>Date: {order.date}</p>
              <p>Status: {order.status}</p>
              <p>Total: {order.total}</p>
            </div>
            <div className="flex items-center mb-4">
              <img src={order.items[0].imageUrl} alt={order.items[0].product} className="w-16 h-16 object-cover rounded mr-4" />
              <div>
                <h3 className="text-md font-bold">{order.items[0].product}</h3>
              </div>
            </div>
            {expandedOrders[order.id] && order.items.slice(1).map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={item.imageUrl} alt={item.product} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="text-md font-bold">{item.product}</h3>
                  {order.status === 'Completed' && (
                    <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Rate Product</button>
                  )}
                </div>
              </div>
            ))}
            {order.items.length > 1 && (
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => toggleExpandOrder(order.id)}
              >
                {expandedOrders[order.id] ? 'View Less' : 'View More'}
              </button>
            )}
            {order.status === 'Completed' && (
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Rate Product</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}