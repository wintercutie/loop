import React from 'react';

export default function DeliveryAddress({ name, contactNumber, address }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm p-4 flex items-center justify-between bg-white">
      <div>
        {/* Header */}
        <div className="text-md text-gray-500 font-medium mb-2">Delivery Address</div>

        {/* Name and Contact */}
        <div className="font-semibold text-gray-800">{name}</div>
        <div className="text-gray-600 text-xs">{contactNumber}</div>

        {/* Address */}
        <div className="text-gray-600 text-xs mt-1">{address}</div>
      </div>

      {/* Change Button */}
      <button className="text-yellow-500 text-sm font-medium hover:underline focus:outline-none">
        Change
      </button>
    </div>
  );
}
