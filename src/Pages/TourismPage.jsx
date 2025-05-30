import Herocard from "../Components/Service/Herocard";
import React, { useState, useEffect, useRef } from "react";
import {
  Plane,
  MapPin,
  Shield,
  Clock,
  Users,
  Star,
  Phone,
  Mail,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";

const TourismPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      icon: <Plane className='w-6 h-6' />,
      title: "Flight Bookings",
      description:
        "Best deals on domestic and international flights with 24/7 booking support",
      features: ["Competitive Prices", "Flexible Booking", "Multiple Airlines"],
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: "Hotel Reservations",
      description:
        "Luxury resorts to budget stays, we find the perfect accommodation for you",
      features: ["5-Star Resorts", "Budget Options", "Prime Locations"],
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Guided Tours",
      description:
        "Expert local guides for unforgettable cultural and adventure experiences",
      features: ["Local Experts", "Cultural Tours", "Adventure Trips"],
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Visa Assistance",
      description:
        "Complete visa processing support for hassle-free international travel",
      features: ["Document Help", "Fast Processing", "Expert Guidance"],
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: "Travel Insurance",
      description:
        "Comprehensive coverage to protect your journey and peace of mind",
      features: ["Medical Coverage", "Trip Protection", "24/7 Claims"],
    },
    {
      icon: <Clock className='w-6 h-6' />,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever you are in the world",
      features: ["Emergency Help", "Live Chat", "Phone Support"],
    },
  ];

  const destinations = [
    {
      name: "Maldives Pa",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "From $2,999",
      rating: 4.9,
      reviews: 127,
      duration: "7 Days",
    },
    {
      name: "Bali Retreat",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      price: "From $1,899",
      rating: 4.8,
      reviews: 89,
      duration: "5 Days",
    },
    {
      name: "Santorini Dreams",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      price: "From $2,599",
      rating: 4.9,
      reviews: 156,
      duration: "6 Days",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  const features = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Established travel company with proven track record",
    },
    {
      icon: Users,
      title: "Expert Travel Consultants",
      description: "Professional team with extensive global knowledge",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Licensed agency with comprehensive insurance",
    },
  ];

  return (
    <>
      <Herocard
        heading='Tours & Travels'
        description='Discover the joy of travel with curated experiences that blend
              comfort, adventure, and culture.'
        image='https://images.unsplash.com/photo-1748223341494-86fb07ff110b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
      />

      <section
        ref={sectionRef}
        className='relative py-10 overflow-hidden'
        style={{
          background: "#f8fafc",
          minHeight: "100vh",
        }}>
        {/* Background Pattern */}
        <div
          className='absolute inset-0'
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.3,
          }}></div>

        <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
          {/* Hero Section */}

          {/* Services Section */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.2s" : "0s",
            }}>
            {services.map((service, index) => (
              <div
                key={index}
                className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1'
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-200 transition-colors duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 text-slate-800'>
                  {service.title}
                </h3>
                <p className='leading-relaxed mb-4 text-slate-500'>
                  {service.description}
                </p>
                {activeService === index && (
                  <ul className='space-y-2 border-t pt-4'>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-slate-500'>
                        <CheckCircle className='w-4 h-4 mr-2 text-blue-600' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Destinations Section */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.4s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Top Destinations
              </h2>
              <p className='text-xl text-slate-500'>
                Explore our most loved travel experiences
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className='group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2'>
                  {dest.image && (
                    <div className='relative overflow-hidden'>
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className='h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                  )}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-800 mb-2'>
                      {dest.name}
                    </h3>
                    <p className='text-blue-600 font-semibold mb-2 text-lg'>
                      {dest.price}
                    </p>
                    <p className='text-slate-500 text-sm mb-3'>
                      Duration: {dest.duration}
                    </p>
                    <div className='flex items-center mb-4 text-yellow-500'>
                      <Star className='w-4 h-4 fill-current' />
                      <span className='ml-1 text-sm text-slate-600'>
                        {dest.rating} ({dest.reviews} reviews)
                      </span>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex gap-3 mt-4'>
                      <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        View Details
                      </button>
                      <button className='flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.6s" : "0s",
            }}>
            <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl font-bold text-blue-600 mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-slate-500 text-sm font-medium'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            className={
              "mt-20 transition-all duration-1000 ease-out transform translate-y-0"
            }
            style={{
              transitionDelay: isVisible ? "0.8s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Why Choose Our Travel Services
              </h2>
              <p className='text-xl text-slate-500'>
                Your trusted partner for unforgettable journeys
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1'>
                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300'>
                      <IconComponent className='w-8 h-8 text-blue-600' />
                    </div>
                    <h3 className='text-xl font-bold mb-4 text-slate-800'>
                      {feature.title}
                    </h3>
                    <p className='leading-relaxed text-slate-500'>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={
              "mt-20 transition-all duration-1000 ease-out transform translate-y-0"
            }
            style={{
              transitionDelay: isVisible ? "1s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Ready to Explore the World?
              </h2>
              <p className='text-xl text-slate-500'>
                Let us help you plan your perfect getaway
              </p>
            </div>
            <div className='flex justify-center'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourismPage;
