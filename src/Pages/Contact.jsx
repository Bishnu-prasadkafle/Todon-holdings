import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation states
  const [headerVisible, setHeaderVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const ctaRef = useRef(null);

  // Contact information data
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["977 -980328559"],
      color: "var(--color-secondary)",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@tondonholdings.com", "support@tondonholdings.com"],
      color: "var(--color-secondary)",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Kathmandu, Nepal"],
      color: "var(--color-secondary)",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday - Sunday: Closed",
      ],
      color: "var(--color-secondary)",
    },
  ];

  // Form input fields
  const inputFields = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      icon: User,
      placeholder: "your full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      icon: Mail,
      placeholder: "email",
    },
    {
      name: "phone",
      label: "Phone (Optional)",
      type: "tel",
      icon: Phone,
      placeholder: "",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      icon: Globe,
      placeholder: "How can we help?",
    },
  ];

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: formRef, setter: setFormVisible },
      { ref: infoRef, setter: setInfoVisible },
      { ref: ctaRef, setter: setCtaVisible },
    ].map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => setter(entry.isIntersecting),
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return { observer, ref };
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFormErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-10 md:py-20 overflow-hidden bg-[#f8fafc] relative'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-30 bg-pattern' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-6'>
            <span className='text-[var(--color-primary)]'>Get In </span>
            <span className='inline-block text-[#e63946] hover:scale-110 hover:-translate-y-1 transition-all duration-700'>
              Touch
            </span>
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl text-[#4ade80] max-w-3xl mx-auto'>
            Ready to transform your business? Let's discuss your project and
            bring your vision to life.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className='fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500/90 backdrop-blur-lg text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400/30 animate-bounce'>
            <div className='flex items-center gap-2'>
              <CheckCircle size={20} />
              <span className='font-semibold'>Message sent successfully!</span>
            </div>
          </div>
        )}

        {/* Main Grid */}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`transition-all duration-1000 ${
              formVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
            <div className='bg-white rounded-3xl p-6 lg:p-12 border border-[var(--color-navycream)] shadow-2xl hover:scale-[1.02] transition-transform duration-500'>
              <h2 className='text-2xl md:text-3xl font-bold mb-8 text-[var(--color-primary)]'>
                Send us a Message
              </h2>

              <div className='space-y-6'>
                {inputFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className='block text-sm font-medium mb-2 text-[var(--color-primary)]'>
                      {field.label}
                    </label>
                    <div className='relative'>
                      <field.icon
                        size={20}
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focusedField === field.name
                            ? "text-[var(--color-secondary)]"
                            : "text-gray-400"
                        }`}
                      />
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField("")}
                        placeholder={field.placeholder}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          formErrors[field.name]
                            ? "border-red-500"
                            : "border-gray-200"
                        } focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-opacity-20 transition-all duration-300`}
                      />
                      {formErrors[field.name] && (
                        <p className='mt-1 text-sm text-red-500'>
                          {formErrors[field.name]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2 text-[var(--color-primary)]'>
                    Your Message
                  </label>
                  <div className='relative'>
                    <MessageSquare
                      size={20}
                      className={`absolute left-3 top-4 transition-colors duration-300 ${
                        focusedField === "message"
                          ? "text-[var(--color-secondary)]"
                          : "text-gray-400"
                      }`}
                    />
                    <textarea
                      name='message'
                      id='message'
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      placeholder='Tell us about your project...'
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        formErrors.message
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-opacity-20 transition-all duration-300`}
                    />
                    {formErrors.message && (
                      <p className='mt-1 text-sm text-red-500'>
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className='w-full py-4 px-6 rounded-xl bg-[var(--color-secondary)] text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed'>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            ref={infoRef}
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              infoVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className='group bg-[var(--color-navycream)] rounded-2xl p-6 md:p-8 border border-[var(--color-secondary)] shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-500'>
                <div className='flex items-start gap-4'>
                  <div
                    className='p-4 rounded-xl'
                    style={{ backgroundColor: info.color }}>
                    <info.icon size={24} className='text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2 text-[var(--color-primary)]'>
                      {info.title}
                    </h3>
                    <div className='space-y-1'>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className='text-[var(--color-secondary)] group-hover:text-gray-600 transition-colors duration-300'>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className='group bg-[var(--color-navycream)] rounded-2xl p-6 md:p-8 border border-[var(--color-secondary)] shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-500'>
              <iframe
                title='location'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776848728!2d85.29111321259504!3d27.709031933406965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1695925128811!5m2!1sen!2snp'
                className='w-full h-[300px] rounded-xl'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
          {/* <div className='flex justify-center items-center gap-2 text-[var(--color-secondary)] hover:scale-105 transition-transform duration-300 cursor-pointer group'>
            <span className='font-semibold'>View Our Portfolio</span>
            <ArrowRight
              size={20}
              className='transform group-hover:translate-x-1 transition-transform duration-300'
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
