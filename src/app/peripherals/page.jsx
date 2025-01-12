import React from 'react'

export default function Peripherals() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Filters Section */}
          <aside className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-medium">Category</h3>
              <ul className="space-y-2 mt-2">
                <li><input type="checkbox" id="mouse" /> <label htmlFor="mouse">Mouse</label></li>
                <li><input type="checkbox" id="keyboards" /> <label htmlFor="keyboards">Keyboards</label></li>
                <li><input type="checkbox" id="controllers" /> <label htmlFor="controllers">Joystick & Game Controllers</label></li>
                <li><input type="checkbox" id="headphones" /> <label htmlFor="headphones">Headphones & Speakers</label></li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Price</h3>
              <input type="range" min="30" max="8999" className="w-full mt-2" />
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Ratings</h3>
              <ul className="space-y-2 mt-2">
                {[5, 4, 3, 2].map((stars) => (
                  <li key={stars}>
                    <input type="checkbox" id={`stars-${stars}`} />
                    <label htmlFor={`stars-${stars}`}> {stars} Stars & Up</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Peripherals Grid */}
          <section className="col-span-3 grid grid-cols-4 gap-6">
            {Array(9).fill().map((_, idx) => (
              <div key={idx} className="bg-white p-4 shadow-md rounded-lg">
                <img
                  src={`https://via.placeholder.com/150?text=Item+${idx + 1}`}
                  alt={`Peripheral ${idx + 1}`}
                  className="mb-4 rounded"
                />
                <h3 className="text-sm font-medium mb-2">
                  Product Name {idx + 1}
                </h3>
                <p className="text-lg font-semibold">₱11,795.00</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
