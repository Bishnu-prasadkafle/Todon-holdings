import React, { useState } from "react";
import {
  Plane,
  MapPin,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";

const TourismPage = () => {
  const [activeService, setActiveService] = useState(null);

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
      name: "Maldives Paradise",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $2,999",
      rating: 4.9,
      reviews: 127,
      duration: "7 Days",
    },
    {
      name: "Bali Retreat",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $1,899",
      rating: 4.8,
      reviews: 89,
      duration: "5 Days",
    },
    {
      name: "Santorini Dreams",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-white'>
              <div className='flex items-center mb-6'>
                <Plane className='w-8 h-8 mr-3 text-blue-200' />
                <h1 className='text-4xl lg:text-5xl font-bold'>
                  Travel & Tourism
                </h1>
              </div>
              <p className='text-xl mb-6 text-blue-100 leading-relaxed'>
                Discover the joy of travel with curated experiences that blend
                comfort, adventure, and culture. At Tondon Holdings, our travel
                services cater to every kind of explorer — from solo adventurers
                to family vacations.
              </p>
              <p className='text-lg mb-8 text-blue-200'>
                We handle everything from flight bookings and accommodations to
                guided tours and visa assistance, ensuring a seamless, enriching
                journey wherever you go.
              </p>
              <button className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center shadow-lg'>
                Learn More <ArrowRight className='ml-2 w-5 h-5' />
              </button>
            </div>
            <div className='relative'>
              <div className='rounded-xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Tropical Paradise'
                  className='w-full h-96 object-cover'
                />
              </div>
              <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border'>
                <div className='flex items-center mb-2'>
                  <Award className='w-5 h-5 text-blue-600 mr-2' />
                  <span className='font-semibold text-gray-900'>
                    Certified Travel Partner
                  </span>
                </div>
                <div className='flex items-center'>
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />
                  <span className='ml-2 text-sm text-gray-600'>
                    4.9/5 from 1000+ reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-3xl lg:text-4xl font-bold text-blue-600 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Our Professional Services
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive travel solutions designed to make your journey
            seamless and memorable
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100'
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}>
              <div className='bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6'>
                {service.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                {service.description}
              </p>

              <div
                className={`transition-all duration-300 ${
                  activeService === index
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}>
                <ul className='space-y-2 pt-2'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-gray-700'>
                      <CheckCircle className='w-4 h-4 text-blue-600 mr-2' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Destinations */}
      <div className='bg-gray-50 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Popular Destinations
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Explore our handpicked destinations for unforgettable experiences
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {destinations.map((dest, index) => (
              <div
                key={index}
                className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='relative'>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className='w-full h-64 object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md'>
                    <div className='flex items-center'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='ml-1 text-sm font-semibold'>
                        {dest.rating}
                      </span>
                    </div>
                  </div>
                  <div className='absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    {dest.duration}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {dest.name}
                  </h3>
                  <div className='flex justify-between items-center mb-4'>
                    <span className='text-2xl font-bold text-blue-600'>
                      {dest.price}
                    </span>
                    <span className='text-sm text-gray-500'>
                      ({dest.reviews} reviews)
                    </span>
                  </div>
                  <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300'>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Why Choose Tondon Holdings?
          </h2>
          <p className='text-xl text-gray-600'>
            Your trusted partner in creating exceptional travel experiences
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <img
              src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              alt='Professional Travel Team'
              className='rounded-xl shadow-lg w-full h-80 object-cover'
            />
          </div>
          <div className='space-y-6'>
            <div className='flex items-start'>
              <div className='bg-blue-100 p-2 rounded-lg mr-4 mt-1'>
                <Award className='w-6 h-6 text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  15+ Years of Excellence
                </h3>
                <p className='text-gray-600'>
                  Established travel company with proven track record of
                  customer satisfaction.
                </p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='bg-blue-100 p-2 rounded-lg mr-4 mt-1'>
                <Users className='w-6 h-6 text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Expert Travel Consultants
                </h3>
                <p className='text-gray-600'>
                  Professional team with extensive knowledge of global
                  destinations and travel requirements.
                </p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='bg-blue-100 p-2 rounded-lg mr-4 mt-1'>
                <Shield className='w-6 h-6 text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Secure & Reliable
                </h3>
                <p className='text-gray-600'>
                  Licensed travel agency with comprehensive insurance and secure
                  booking systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className='bg-blue-600 py-16'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
            Ready to Plan Your Next Journey?
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Contact our travel experts today for personalized service and
            competitive pricing.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center'>
              <Phone className='mr-2 w-5 h-5' />
              Call Now: +1-800-TRAVEL
            </button>
            <button className='border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center'>
              <Mail className='mr-2 w-5 h-5' />
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismPage;
