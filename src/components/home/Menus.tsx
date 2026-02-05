// components/MenuPreview.tsx
"use client";

import Link from "next/link";
import { Calendar, ChefHat, ArrowRight } from "lucide-react";

const menuPreviewData = [
  {
    week: "Week 1",
    highlights: ["Poha Breakfast", "Paneer Sabzi", "Special Salad","..."],
    tag: "Most Popular",
  },
  {
    week: "Week 2",
    highlights: ["Idli Sambhar", "Rajma Chawal", "Chole","..."],
    tag: "North Indian",
  },
  {
    week: "Week 3",
    highlights: ["Dhokla", "Paneer Butter Masala", "Naan","..."],
    tag: "Gujarati Special",
  },
];

const MenuPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Weekly <span className="text-orange-600">Meal Plans</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Discover our 7-week rotating menu
        </p>
      </div>

      {/* PREVIEW CARDS - Simple Version */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {menuPreviewData.map((week, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-orange-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                <h3 className="font-semibold text-gray-900">{week.week}</h3>
              </div>
              <span className="text-xs font-medium bg-orange-50 text-orange-700 px-2 py-1 rounded">
                {week.tag}
              </span>
            </div>
            
            <ul className="space-y-1 mb-3">
              {week.highlights.map((dish, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  {dish}
                </li>
              ))}
            </ul>
            
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <ChefHat className="w-3 h-3" />
              <span>Quality ingredients</span>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="text-center">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
        >
          View All 7 Weeks Menu
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default MenuPreview;