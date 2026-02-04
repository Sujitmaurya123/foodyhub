import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-orange-50 to-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            🍽️ Fresh Food Delivered Daily
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Delicious Lunch & Dinner  
            <span className="text-orange-600"> Delivered to Your Door</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Enjoy freshly prepared meals every day. Order online for quick,
            hygienic, and affordable lunch and dinner delivery.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
            >
              Order Now
            </Link>

            <Link
              href="/menu"
              className="px-6 py-3 rounded-lg border border-orange-600 text-orange-600 font-semibold hover:bg-orange-50 transition"
            >
              View Menu
            </Link>
          </div>

          {/* INFO */}
          <div className="mt-10 flex gap-8 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">🚀 Fast Delivery</p>
              <p>Hot & fresh meals</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">🥗 Healthy Food</p>
              <p>Quality ingredients</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">⏰ Daily Service</p>
              <p>Lunch & Dinner</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/images/foode.jpg" // place image in public folder
            alt="Delicious food delivery"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
