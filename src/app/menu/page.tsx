// app/page.tsx or app/menu/page.tsx
"use client";

import { useState } from 'react';
import { 
  CalendarDays, 
  UtensilsCrossed, 
  Coffee, 
  Sun, 
  Moon,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Share2,
  Star,
  Clock,
  ChefHat,
  Users
} from 'lucide-react';
type MealType = "breakfast" | "lunch" | "dinner";

interface WeeklyMenu {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
}


const menuData = [
  {
    week: "Week 1",
    breakfast: ["Poha", "Paratha", "Oats"],
    lunch: ["Dal Rice", "Veg Curry", "Roti"],
    dinner: ["Paneer Sabzi", "Chapati", "Salad"],
    prepTime: "30 min",
    difficulty: "Easy",
    rating: 4.5,
  },
  {
    week: "Week 2",
    breakfast: ["Upma", "Idli Sambhar", "Bread Butter"],
    lunch: ["Rajma Chawal", "Veg Sabzi", "Salad"],
    dinner: ["Chole", "Roti", "Curd"],
    prepTime: "45 min",
    difficulty: "Medium",
    rating: 4.2,
  },
  {
    week: "Week 3",
    breakfast: ["Dhokla", "Paratha", "Oats Porridge"],
    lunch: ["Mix Veg", "Jeera Rice", "Roti"],
    dinner: ["Paneer Butter Masala", "Naan", "Salad"],
    prepTime: "60 min",
    difficulty: "Medium",
    rating: 4.7,
  },
  {
    week: "Week 4",
    breakfast: ["Poha", "Upma", "Cornflakes"],
    lunch: ["Dal Tadka", "Roti", "Veg Sabzi"],
    dinner: ["Chana Masala", "Rice", "Salad"],
    prepTime: "35 min",
    difficulty: "Easy",
    rating: 4.0,
  },
  {
    week: "Week 5",
    breakfast: ["Idli Sambhar", "Dosa", "Oats"],
    lunch: ["Paneer Curry", "Roti", "Rice"],
    dinner: ["Veg Biryani", "Raita", "Salad"],
    prepTime: "75 min",
    difficulty: "Hard",
    rating: 4.8,
  },
  {
    week: "Week 6",
    breakfast: ["Paratha", "Poha", "Bread Toast"],
    lunch: ["Mix Dal", "Rice", "Sabzi"],
    dinner: ["Matar Paneer", "Roti", "Salad"],
    prepTime: "40 min",
    difficulty: "Medium",
    rating: 4.3,
  },
  {
    week: "Week 7",
    breakfast: ["Upma", "Dhokla", "Oats Smoothie"],
    lunch: ["Veg Pulao", "Raita", "Roti"],
    dinner: ["Chole Masala", "Rice", "Salad"],
    prepTime: "50 min",
    difficulty: "Medium",
    rating: 4.4,
  },
];

const difficultyColors = {
  Easy: "bg-emerald-100 text-emerald-800",
  Medium: "bg-amber-100 text-amber-800",
  Hard: "bg-rose-100 text-rose-800",
};

const mealIcons = {
  breakfast: <Coffee className="w-5 h-5" />,
  lunch: <Sun className="w-5 h-5" />,
  dinner: <Moon className="w-5 h-5" />,
};

export default function MenuPage() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (weekIndex: number) => {
    setFavorites(prev =>
      prev.includes(weekIndex)
        ? prev.filter(f => f !== weekIndex)
        : [...prev, weekIndex]
    );
  };

  const filteredData = menuData.filter(item => 
    filterDifficulty === "All" || item.difficulty === filterDifficulty
  );

  const handlePrevWeek = () => {
    setCurrentWeek(prev => (prev > 0 ? prev - 1 : menuData.length - 1));
  };

  const handleNextWeek = () => {
    setCurrentWeek(prev => (prev < menuData.length - 1 ? prev + 1 : 0));
  };

  const handleDownload = () => {
    // Implement download functionality
    alert("Download feature coming soon!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${menuData[currentWeek].week} Meal Plan`,
        text: `Check out this week's meal plan!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-16 from-amber-50 via-orange-50 to-yellow-50 p-4 md:p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Weekly Meal Planner
            </h1>
            <p className="text-gray-600 text-lg">
              Delicious and nutritious meal plans for every week
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Export</span>
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden md:inline">Share</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <CalendarDays className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Weeks</p>
                <p className="text-2xl font-bold">{menuData.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <ChefHat className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Unique Dishes</p>
                <p className="text-2xl font-bold">42</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg Prep Time</p>
                <p className="text-2xl font-bold">48 min</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">For Family</p>
                <p className="text-2xl font-bold">4-6 People</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterDifficulty(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filterDifficulty === level
                      ? "bg-amber-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <UtensilsCrossed className="w-4 h-4" />
            <span>{filteredData.length} weeks available</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Week Navigation */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Current Week Plan
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevWeek}
                className="p-2 rounded-full bg-white border hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-medium text-gray-700">
                {menuData[currentWeek].week}
              </span>
              <button
                onClick={handleNextWeek}
                className="p-2 rounded-full bg-white border hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Featured Week Card */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 text-white mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {menuData[currentWeek].week}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>{menuData[currentWeek].prepTime}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${difficultyColors[menuData[currentWeek].difficulty as keyof typeof difficultyColors]}`}>
                    {menuData[currentWeek].difficulty}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{menuData[currentWeek].rating}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(currentWeek)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <Star className={`w-6 h-6 ${favorites.includes(currentWeek) ? 'fill-white' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["breakfast", "lunch", "dinner"].map((mealType) => (
                <div key={mealType} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    {mealIcons[mealType as keyof typeof mealIcons]}
                    <h4 className="text-lg font-semibold capitalize">{mealType}</h4>
                  </div>
                  <ul className="space-y-2">
                    {menuData[currentWeek][mealType as MealType].map(
                      (item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Weeks Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Weekly Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((weekItem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="p-6 border-b">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {weekItem.week}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {weekItem.prepTime}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[weekItem.difficulty as keyof typeof difficultyColors]}`}>
                        {weekItem.difficulty}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="p-1 hover:text-amber-500 transition-colors"
                  >
                    <Star className={`w-5 h-5 ${favorites.includes(index) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(weekItem.rating)
                            ? 'fill-amber-500 text-amber-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{weekItem.rating}</span>
                </div>
              </div>

              {/* Meal Sections */}
              <div className="p-6 space-y-6">
                {["breakfast", "lunch", "dinner"].map((mealType) => (
                  <div key={mealType}>
                    <div className="flex items-center gap-2 mb-3">
                      {mealIcons[mealType as keyof typeof mealIcons]}
                      <h4 className="font-semibold text-gray-800 capitalize">
                        {mealType}
                      </h4>
                    </div>
                   <ul className="space-y-2">
                      {weekItem[mealType as MealType].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setCurrentWeek(index)}
                  className="w-full py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Select This Week
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No meal plans found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={() => setFilterDifficulty("All")}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            🍽️ Weekly meal plans for healthy and delicious eating
          </p>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </button>
            <button className="text-sm text-amber-600 hover:text-amber-700 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}