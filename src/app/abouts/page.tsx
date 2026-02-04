import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* IMAGE */}
        <div className="relative">
          <Image
            src="/images/kitchen.jpg"
            alt="Our kitchen"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            About Us
          </span>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Fresh, Hygienic &  
            <span className="text-orange-600"> Home-Style Meals</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">FoodHub</span>, we
            believe good food brings people together. We prepare fresh,
            delicious meals every day using quality ingredients and traditional
            recipes.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether it’s a quick lunch or a wholesome dinner, our mission is to
            deliver tasty, healthy, and affordable food straight to your door —
            on time, every time.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Freshly Cooked Daily
                </h4>
                <p className="text-sm text-gray-600">
                  No frozen food, only fresh ingredients
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Hygienic Kitchen
                </h4>
                <p className="text-sm text-gray-600">
                  Clean, safe & FSSAI-standard cooking
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Affordable Pricing
                </h4>
                <p className="text-sm text-gray-600">
                  Best quality food at fair prices
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Fast Delivery
                </h4>
                <p className="text-sm text-gray-600">
                  Hot meals delivered on time
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/menu"
              className="inline-block px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
