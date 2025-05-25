import { Star, Quote, TrendingUp, Users, Building, Award } from "lucide-react";

const TestimonialsStats = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Tondon Holdings transformed our business operations completely. Their innovative solutions increased our efficiency by 300% and helped us scale globally.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "DataFlow Inc",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "The level of expertise and support provided by Tondon Holdings is unmatched. They delivered results beyond our expectations and continue to be our trusted partner.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Ventures",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Working with Tondon Holdings was a game-changer. Their strategic approach and cutting-edge technology helped us achieve our goals faster than we imagined.",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Clients",
      description: "Businesses worldwide trust our solutions",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Increase in client business efficiency",
    },
    {
      icon: Building,
      number: "50+",
      label: "Countries",
      description: "Global presence and partnerships",
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Success Rate",
      description: "Project completion and satisfaction",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        } transition-all duration-300`}
      />
    ));
  };

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Stats Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105'>
              Our Impact in Numbers
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Proven results that speak for themselves
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className='group text-center bg-gray-50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-blue-50 hover:shadow-xl'>
                  <div className='mb-4'>
                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-500 transition-all duration-500 transform group-hover:scale-110'>
                      <IconComponent
                        size={28}
                        className='text-blue-600 group-hover:text-white transition-all duration-500'
                      />
                    </div>
                  </div>
                  <div className='text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300'>
                    {stat.number}
                  </div>
                  <div className='text-xl font-semibold text-gray-800 mb-2'>
                    {stat.label}
                  </div>
                  <div className='text-gray-600 group-hover:text-gray-700 transition-all duration-300'>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className='text-center mb-12'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105'>
              What Our Clients Say
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden'>
                {/* Quote Icon */}
                <div className='absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-all duration-500'>
                  <Quote size={40} className='text-blue-500' />
                </div>

                {/* Rating */}
                <div className='flex items-center mb-4'>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className='text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-all duration-300 italic'>
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className='flex items-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-all duration-500'
                  />
                  <div>
                    <div className='font-semibold text-gray-900 group-hover:text-blue-600 transition-all duration-300'>
                      {testimonial.name}
                    </div>
                    <div className='text-gray-600 text-sm'>
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover accent */}
                <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left'></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white'>
          <h3 className='text-3xl font-bold mb-4'>
            Ready to Join Our Success Stories?
          </h3>
          <p className='text-blue-100 mb-8 max-w-2xl mx-auto text-lg'>
            Let us help you achieve the same remarkable results our clients
            experience every day
          </p>
          <button className='group bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95'>
            Start Your Success Story
            <span className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300'>
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
