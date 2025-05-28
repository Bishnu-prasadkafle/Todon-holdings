import React from "react";
import Herocard from "./Herocard";

export default function Services() {
  const explanationImageClass = "rounded-xl shadow-lg w-full object-cover";
  const explanationImageStyle = {
    height: "340px",
  };

  return (
    <div className='font-sans bg-[#f8fafc]'>
      {/* Hero Section */}
      <Herocard />

      {/* Services Explanation Section */}
      <section
        className='py-24 px-4 text-gray-800'
        style={{ backgroundColor: "#f8fafc" }}>
        <div className='max-w-6xl mx-auto space-y-28'>
          {/* Travel & Tourism */}
          <div className='grid md:grid-cols-2 gap-12 items-center my-8'>
            <img
              src='https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef'
              alt='Travel & Tourism'
              className={explanationImageClass}
              style={explanationImageStyle}
            />
            <div>
              <h3
                className='text-3xl font-bold mb-4'
                style={{ color: "var(--color-secondary)" }}>
                Travel & Tourism
              </h3>
              <p className='text-lg leading-relaxed'>
                Discover the joy of travel with curated experiences that blend
                comfort, adventure, and culture. At Tondon Holdings, our travel
                services cater to every kind of explorer — from solo adventurers
                to family vacations. We handle everything from flight bookings
                and accommodations to guided tours and visa assistance, ensuring
                a seamless, enriching journey wherever you go.
              </p>
            </div>
          </div>

          {/* Clothing */}
          <div className='grid md:grid-cols-2 gap-12 items-center my-8'>
            <div>
              <h3
                className='text-3xl font-bold mb-4'
                style={{ color: "var(--color-secondary)" }}>
                Clothing
              </h3>
              <p className='text-lg leading-relaxed'>
                Elevate your wardrobe with our distinctive fashion line that
                fuses cultural authenticity with contemporary design. Each piece
                is crafted with premium fabrics and fine tailoring to ensure
                lasting comfort and effortless elegance. Whether you're dressing
                for work, celebrations, or casual moments, we bring you style
                that speaks for itself.
              </p>
            </div>
            <img
              src='https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D'
              alt='Clothing'
              className={explanationImageClass}
              style={explanationImageStyle}
            />
          </div>

          {/* Education Consultancy */}
          <div className='grid md:grid-cols-2 gap-12 items-center my-8'>
            <img
              src='https://images.unsplash.com/photo-1529070538774-1843cb3265df'
              alt='Education Consultancy'
              className={explanationImageClass}
              style={explanationImageStyle}
            />
            <div>
              <h3
                className='text-3xl font-bold mb-4'
                style={{ color: "var(--color-secondary)" }}>
                Education Consultancy
              </h3>
              <p className='text-lg leading-relaxed'>
                Unlock global academic opportunities with our trusted education
                consultancy. From selecting the right university to preparing
                applications and interviews, we guide students step-by-step. Our
                tailored approach increases acceptance chances, maximizes
                scholarships, and ensures alignment with long-term career goals.
              </p>
            </div>
          </div>

          {/* IT Solutions */}
          <div className='grid md:grid-cols-2 gap-12 items-center my-8'>
            <div>
              <h3
                className='text-3xl font-bold mb-4'
                style={{ color: "var(--color-secondary)" }}>
                IT Solutions
              </h3>
              <p className='text-lg leading-relaxed'>
                Step into the digital future with our comprehensive IT services.
                We specialize in designing responsive websites, scalable mobile
                apps, and enterprise-grade software solutions tailored to your
                business needs. From consultation to deployment, we prioritize
                functionality, aesthetics, and user experience to help you grow
                efficiently.
              </p>
            </div>
            <img
              src='https://images.unsplash.com/photo-1519389950473-47ba0277781c'
              alt='IT Solutions'
              className={explanationImageClass}
              style={explanationImageStyle}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
