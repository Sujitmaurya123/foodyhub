import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">FoodHub</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Freshly cooked lunch and dinner delivered daily. Taste, quality,
            and hygiene guaranteed.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-400">Menu</Link></li>
            <li><Link href="/abouts" className="hover:text-orange-400">About</Link></li>
            <li><Link href="/contact-us" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* TIMINGS */}
        <div>
          <h3 className="font-semibold text-white mb-4">Opening Hours</h3>
          <ul className="text-sm space-y-2">
            <li>Lunch: 12:00 PM – 3:00 PM</li>
            <li>Dinner: 7:00 PM – 11:00 PM</li>
            <li>Open All Days</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Noida, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@foodhub.com</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FoodHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
