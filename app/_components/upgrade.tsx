"use client";

import Image from "next/image";

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-center mb-10">Upgrade Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Free Plan</h2>
          <p className="text-3xl font-bold mb-4">₹0<span className="text-base font-normal">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li>Basic Features</li>
            <li>Limited Support</li>
            <li>Access to Core Tools</li>
          </ul>
          <button className="w-full py-2 px-4 border border-transparent bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Pro Plan</h2>
          <p className="text-3xl font-bold mb-4">₹699<span className="text-base font-normal">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li>All Free Plan Features</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
            <li>Unlimited Sessions</li>
          </ul>
          <button className="w-full py-2 px-4 border border-transparent bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Upgrade Now
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
          <p className="text-3xl font-bold mb-4">₹1299<span className="text-base font-normal">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li>All Pro Plan Features</li>
            <li>Dedicated Account Manager</li>
            <li>Custom Integrations</li>
            <li>Extended Analytics</li>
          </ul>
          <button className="w-full py-2 px-4 border border-transparent bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
