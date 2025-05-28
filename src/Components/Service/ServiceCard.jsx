import React from "react";

export default function ServiceCard() {
  const services = [
    {
      title: "Travel & Tourism",
      description:
        "Experience unforgettable journeys with our expertly crafted travel and tourism services.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Clothing",
      description:
        "Stay in style with our trendy clothing collections designed for comfort and elegance.",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
    {
      title: "Education Consultancy",
      description:
        "Our education consultancy guides students to achieve academic success with global universities.",
      image:
        "https://plus.unsplash.com/premium_photo-1661690088942-d968065868d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGl0JTIwc29sdXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "IT Solutions",
      description:
        "We offer innovative IT services like website development and enterprise software solutions.",
      image:
        "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjBzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((service, index) => (
          <div key={index} className='w-full'>
            <div className='relative group w-full h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500'>
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
                <button
                  className='group relative px-6 py-2 rounded-xl font-semibold text-base transition-transform duration-500 ease-in-out shadow-lg transform hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
                  style={{
                    color: "var(--color-cream)",
                    backgroundColor: "var(--color-secondary)",
                    borderColor: "var(--color-secondary)",
                    textDecoration: "none",
                    display: "inline-block",
                  }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
