// components/inner/InnerLayout.js
import React from 'react';
import Link from 'next/link';

const InnerLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Navigation Bar */}
      <nav className="w-1/4 bg-gray-100 border-r border-gray-300 p-4">
        <h2 className="text-lg font-bold mb-4">User Settings</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/settings/profile" className="block p-2 hover:bg-gray-200 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/settings/orders" className="block p-2 hover:bg-gray-200 rounded">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/settings/payment" className="block p-2 hover:bg-gray-200 rounded">
              Payment
            </Link>
          </li>
          <li>
            <Link href="/settings/notifications" className="block p-2 hover:bg-gray-200 rounded">
              Notifications
            </Link>
          </li>
          <li>
            <Link href="/settings/security" className="block p-2 hover:bg-gray-200 rounded">
              Security
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-3/4 p-6">{children}</div>
    </div>
  );
};

export default InnerLayout;
