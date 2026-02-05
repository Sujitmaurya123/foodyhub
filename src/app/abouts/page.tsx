"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const features = [
    {
      id: 1,
      title: "Freshly Cooked Daily",
      description: "No frozen food, only fresh ingredients",
      icon: "🍅"
    },
    {
      id: 2,
      title: "Hygienic Kitchen",
      description: "Clean, safe & FSSAI-standard cooking",
      icon: "🧼"
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description: "Best quality food at fair prices",
      icon: "💰"
    },
    {
      id: 4,
      title: "Fast Delivery",
      description: "Hot meals delivered on time",
      icon: "🚚"
    }
  ];

  return (
    <section 
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-gradient-to-b from-orange-50 to-white py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE SECTION - Enhanced with modern design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/kitchen.jpg"
                alt="Our professional kitchen where chefs prepare fresh, hygienic home-style meals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">FSSAI Certified</span>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl -z-10 opacity-10 rotate-12"></div>
            
            {/* Stats cards */}
            <div className="flex justify-center gap-4 mt-10">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-orange-100 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-orange-600">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-amber-100 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-amber-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">Years Serving</div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SECTION */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 text-sm font-semibold text-orange-700">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 
                id="about-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
              >
                Fresh, Hygienic & 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mt-2">
                  Home-Style Meals
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  At <span className="font-bold text-gray-900">FoodHub</span>, we believe good food brings people together. 
                  We prepare fresh, delicious meals every day using quality ingredients 
                  and traditional recipes passed down through generations.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Whether it&apos;s a quick lunch or a wholesome dinner, our mission is to deliver 
                  tasty, healthy, and affordable food straight to your door — prepared with 
                  love and served with care.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-8">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    whileHover={{ scale: 1.02, translateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 group w-full sm:w-auto"
                  aria-label="Explore our menu to see all delicious meals"
                >
                  <span>Explore Our Menu</span>
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-orange-300 to-amber-300"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">500+ Daily Orders</div>
                    <div className="text-gray-500">Trusted by food lovers</div>
                  </div>
                </div>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">100% Fresh Ingredients</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">30-min Delivery Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Hygiene Certified</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;