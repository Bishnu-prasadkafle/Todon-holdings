import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ServiceCard() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Travel & Tourism",
      description:
        "Experience unforgettable journeys with our expertly crafted travel and tourism services.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      link: "/services/travel",
    },
    {
      title: "Clothing",
      description:
        "Stay in style with our trendy clothing collections designed for comfort and elegance.",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
      link: "/services/clothing",
    },
    {
      title: "Education Consultancy",
      description:
        "Our education consultancy guides students to achieve academic success with global universities.",
      image:
        "https://plus.unsplash.com/premium_photo-1661690088942-d968065868d0",
      link: "/services/education",
    },
    {
      title: "IT Solutions",
      description:
        "We offer innovative IT services like website development and enterprise software solutions.",
      image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265",
      link: "/services/it-solutions",
    },
  ];

  const handleServiceClick = (link) => {
    navigate(link);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((service, index) => (
          <div key={index} className='w-full'>
            <div
              className='relative group w-full h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer'
              onClick={() => handleServiceClick(service.link)}>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />

              {/* Title visible initially */}
              <div className='absolute bottom-4 left-4 text-white text-2xl font-semibold z-10 transition-opacity duration-500 group-hover:opacity-0'>
                {service.title}
              </div>

              {/* Hover Content with semi-transparent black background */}
              <div className='absolute bottom-0 left-0 w-full px-5 py-6 text-center bg-black/40 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {service.title}
                </h3>
                <p className='text-sm text-white mb-4'>{service.description}</p>
                <Link
                  to={service.link}
                  className='group relative px-6 py-2 rounded-xl font-semibold text-base transition-all duration-500 ease-in-out shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm inline-block'
                  style={{
                    color: "var(--color-cream)",
                    backgroundColor: "var(--color-secondary)",
                    borderColor: "var(--color-secondary)",
                  }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
