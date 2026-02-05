const features = [
  {
    title: "Freshly Cooked Daily",
    description:
      "All meals are prepared fresh every day using high-quality ingredients.",
    icon: "🍲",
  },
  {
    title: "Lunch & Dinner Delivery",
    description:
      "Enjoy timely delivery for both lunch and dinner, right at your doorstep.",
    icon: "⏰",
  },
  {
    title: "Hygienic Kitchen",
    description:
      "We follow strict hygiene standards to ensure safe and healthy food.",
    icon: "🧼",
  },
  {
    title: "Affordable Pricing",
    description:
      "Delicious meals at pocket-friendly prices without compromising quality.",
    icon: "💰",
  },
  {
    title: "Fast Delivery",
    description:
      "Hot meals delivered quickly so you can enjoy food at its best.",
    icon: "🚀",
  },
  {
    title: "Easy Online Ordering",
    description:
      "Simple and smooth online ordering experience from any device.",
    icon: "📱",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose <span className="text-orange-600">FoodHub</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We focus on quality, taste, and customer satisfaction to deliver the
            best food experience every day.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
         {/* FAQ */}
          <div className="mt-12 max-w-3xl mx-auto">
            <details className="group border-b border-gray-200 py-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-gray-900">How does the meal delivery work?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Choose your plan, select your preferences, and we&apos;ll deliver freshly cooked meals to your doorstep daily. You can modify your menu weekly.
              </p>
            </details>
            
            <details className="group border-b border-gray-200 py-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-gray-900">Can I change or cancel my plan?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Yes! You can upgrade, downgrade, or cancel your plan anytime. No commitments or hidden fees.
              </p>
            </details>
          </div>
      </div>
    </section>
  );
};

export default Features;
