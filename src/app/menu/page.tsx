import Menu from "@/components/home/Menus";


export const metadata = {
  title: "Menu | FoodHub",
  description: "Explore our lunch and dinner menu with fresh, tasty meals",
};

export default function MenuPage() {
  return (
    <div className="pt-16">
      {/* PAGE HERO */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Our <span className="text-orange-600">Delicious Menu</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of freshly cooked meals available for lunch
            and dinner. Quality, taste, and hygiene guaranteed.
          </p>
        </div>
      </section>

      {/* MENU SECTION */}
      <Menu/>
    </div>
  );
}
