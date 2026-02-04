"use client";

import Image from "next/image";
import { useState } from "react";
import { menuData } from "../../data/menus";

const Menu = () => {
  const [active, setActive] = useState<"lunch" | "dinner">("lunch");

  const items = menuData[active];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="text-orange-600">Menu</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Freshly prepared meals for lunch and dinner
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActive("lunch")}
          className={`px-6 py-2 rounded-full font-medium ${
            active === "lunch"
              ? "bg-orange-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Lunch
        </button>
        <button
          onClick={() => setActive("dinner")}
          className={`px-6 py-2 rounded-full font-medium ${
            active === "dinner"
              ? "bg-orange-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Dinner
        </button>
      </div>

      {/* MENU GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">
                  ₹{item.price}
                </span>
                <button className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm hover:bg-orange-700">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
