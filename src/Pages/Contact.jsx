// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Send,
//   User,
//   MessageSquare,
//   Globe,
//   ArrowRight,
// } from "lucide-react";
// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [focusedField, setFocusedField] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert("Thank you for your message! We'll get back to you soon.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//     }, 2000);
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone",
//       details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
//       color: "from-green-500 to-emerald-600",
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       details: ["info@tondonholdings.com", "support@tondonholdings.com"],
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       icon: MapPin,
//       title: "Address",
//       details: ["123 Business District", "New York, NY 10001", "United States"],
//       color: "from-purple-500 to-purple-600",
//     },
//     {
//       icon: Clock,
//       title: "Business Hours",
//       details: [
//         "Monday - Friday: 9:00 AM - 6:00 PM",
//         "Saturday: 10:00 AM - 4:00 PM",
//         "Sunday: Closed",
//       ],
//       color: "from-orange-500 to-red-500",
//     },
//   ];

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900'>
//       {/* Hero Section */}
//       <section className='relative pt-32 pb-20 overflow-hidden'>
//         <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
//         <div className='absolute inset-0'>
//           <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
//           <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
//         </div>

//         <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center'>
//           <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white transform transition-all duration-800 hover:scale-105'>
//             Get In{" "}
//             <span className='text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text  hover:from-blue-300 hover:to-blue-500 transition-all duration-500 inline-block hover:scale-110 hover:-translate-y-1'>
//               Touch
//             </span>
//           </h1>
//           <p className='text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto transform transition-all duration-700 hover:text-gray-100'>
//             Ready to transform your business? Let's discuss your project and
//             bring your vision to life.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className='relative py-20'>
//         <div className='max-w-7xl mx-auto px-6 lg:px-8'>
//           <div className='grid lg:grid-cols-2 gap-16 items-start'>
//             {/* Contact Form */}
//             <div className='relative'>
//               <div className='bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20'>
//                 <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl'></div>

//                 <div className='relative z-10'>
//                   <div className='flex items-center gap-4 mb-8'>
//                     <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12'>
//                       <MessageSquare className='text-white' size={24} />
//                     </div>
//                     <h2 className='text-3xl font-bold text-white'>
//                       Send Us a Message
//                     </h2>
//                   </div>

//                   <div className='space-y-6'>
//                     <div className='grid sm:grid-cols-2 gap-6'>
//                       <div className='relative group'>
//                         <User
//                           className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
//                             focusedField === "name"
//                               ? "text-blue-400"
//                               : "text-gray-400"
//                           }`}
//                           size={20}
//                         />
//                         <input
//                           type='text'
//                           name='name'
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           onFocus={() => setFocusedField("name")}
//                           onBlur={() => setFocusedField("")}
//                           placeholder='Your Name'
//                           required
//                           className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10'
//                         />
//                       </div>

//                       <div className='relative group'>
//                         <Mail
//                           className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
//                             focusedField === "email"
//                               ? "text-blue-400"
//                               : "text-gray-400"
//                           }`}
//                           size={20}
//                         />
//                         <input
//                           type='email'
//                           name='email'
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           onFocus={() => setFocusedField("email")}
//                           onBlur={() => setFocusedField("")}
//                           placeholder='Your Email'
//                           required
//                           className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10'
//                         />
//                       </div>
//                     </div>

//                     <div className='grid sm:grid-cols-2 gap-6'>
//                       <div className='relative group'>
//                         <Phone
//                           className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
//                             focusedField === "phone"
//                               ? "text-blue-400"
//                               : "text-gray-400"
//                           }`}
//                           size={20}
//                         />
//                         <input
//                           type='tel'
//                           name='phone'
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           onFocus={() => setFocusedField("phone")}
//                           onBlur={() => setFocusedField("")}
//                           placeholder='Phone Number'
//                           className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10'
//                         />
//                       </div>

//                       <div className='relative group'>
//                         <Globe
//                           className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
//                             focusedField === "subject"
//                               ? "text-blue-400"
//                               : "text-gray-400"
//                           }`}
//                           size={20}
//                         />
//                         <input
//                           type='text'
//                           name='subject'
//                           value={formData.subject}
//                           onChange={handleInputChange}
//                           onFocus={() => setFocusedField("subject")}
//                           onBlur={() => setFocusedField("")}
//                           placeholder='Subject'
//                           required
//                           className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10'
//                         />
//                       </div>
//                     </div>

//                     <div className='relative group'>
//                       <MessageSquare
//                         className={`absolute left-4 top-6 transition-all duration-300 ${
//                           focusedField === "message"
//                             ? "text-blue-400"
//                             : "text-gray-400"
//                         }`}
//                         size={20}
//                       />
//                       <textarea
//                         name='message'
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedField("message")}
//                         onBlur={() => setFocusedField("")}
//                         placeholder='Your Message'
//                         rows={6}
//                         required
//                         className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10 resize-none'></textarea>
//                     </div>

//                     <button
//                       type='submit'
//                       disabled={isSubmitting}
//                       className='group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-2 active:scale-95 border border-blue-500/30 hover:border-blue-400/50 backdrop-blur-sm disabled:opacity-70 disabled:cursor-not-allowed'>
//                       <div className='flex items-center justify-center gap-3'>
//                         {isSubmitting ? (
//                           <>
//                             <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
//                             <span>Sending Message...</span>
//                           </>
//                         ) : (
//                           <>
//                             <Send
//                               size={20}
//                               className='transition-all duration-300 group-hover:translate-x-1'
//                             />
//                             <span>Send Message</span>
//                             <ArrowRight
//                               size={20}
//                               className='transition-all duration-300 group-hover:translate-x-1'
//                             />
//                           </>
//                         )}
//                       </div>
//                       <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-105'></div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className='space-y-8'>
//               {contactInfo.map((info, index) => {
//                 const IconComponent = info.icon;
//                 return (
//                   <div
//                     key={index}
//                     className='group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/10'>
//                     <div className='flex items-start gap-6'>
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
//                         <IconComponent className='text-white' size={28} />
//                       </div>
//                       <div className='flex-1'>
//                         <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300'>
//                           {info.title}
//                         </h3>
//                         <div className='space-y-2'>
//                           {info.details.map((detail, detailIndex) => (
//                             <p
//                               key={detailIndex}
//                               className='text-gray-300 text-lg group-hover:text-gray-200 transition-all duration-300 hover:text-blue-300 cursor-pointer'>
//                               {detail}
//                             </p>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Map Placeholder */}
//               <div className='group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/10'>
//                 <div className='flex items-center gap-4 mb-6'>
//                   <div className='w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
//                     <MapPin className='text-white' size={24} />
//                   </div>
//                   <h3 className='text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300'>
//                     Find Us
//                   </h3>
//                 </div>
//                 <div className='bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl h-64 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300'>
//                   <div className='text-center'>
//                     <MapPin
//                       className='text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-all duration-300'
//                       size={48}
//                     />
//                     <p className='text-gray-300 text-lg group-hover:text-white transition-all duration-300'>
//                       Interactive Map Integration
//                     </p>
//                     <p className='text-gray-400 text-sm mt-2'>
//                       Google Maps or similar service would be embedded here
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA Section */}
//       <section className='relative py-20 overflow-hidden'>
//         <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10'></div>
//         <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
//           <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-105'>
//             Ready to Start Your Project?
//           </h2>
//           <p className='text-xl text-gray-300 mb-8 transform transition-all duration-700 hover:text-gray-200'>
//             Let's discuss how we can help transform your business with
//             cutting-edge digital solutions.
//           </p>
//           <div className='flex flex-col sm:flex-row gap-6 justify-center'>
//             <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2 active:scale-95'>
//               <span className='flex items-center justify-center gap-3'>
//                 <Phone size={20} />
//                 Call Now
//               </span>
//             </button>
//             <button className='group border-2 border-white/30 hover:border-blue-400 text-white hover:text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95 hover:bg-white/5'>
//               <span className='flex items-center justify-center gap-3'>
//                 <Mail size={20} />
//                 Email Us
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
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
import { useState } from "react";

const Contact = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFormErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["97-980000000", "97-980000000"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@tondonholdings.com", "support@tondonholdings.com"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Kathmandu Nepal"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: Closed",
        "Sunday: Closed",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-x-hidden'>
      {/* Hero Section */}
      <section className='relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 '>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white transform transition-all duration-800 hover:scale-105'>
            Get In{" "}
            <span className='text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text hover:from-blue-300 hover:to-blue-500 transition-all duration-500 inline-block hover:scale-110 hover:-translate-y-1'>
              Touch
            </span>
          </h1>
          <p className='text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto transform transition-all duration-700 hover:text-gray-100'>
            Ready to transform your business? Let's discuss your project and
            bring your vision to life.
          </p>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <div className='fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/90 backdrop-blur-lg text-white px-8 py-4 rounded-xl shadow-2xl border border-green-400/30 animate-bounce'>
          <div className='flex items-center gap-3'>
            <CheckCircle size={24} />
            <span className='font-semibold'>
              Message sent successfully! We'll get back to you soon.
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className='relative py-20'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            {/* Contact Form */}
            <div className='relative'>
              <div className='bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl'></div>

                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12'>
                      <MessageSquare className='text-white' size={24} />
                    </div>
                    <h2 className='text-3xl font-bold text-white'>
                      Send Us a Message
                    </h2>
                  </div>

                  <div className='space-y-6'>
                    <div className='grid sm:grid-cols-2 gap-6'>
                      <div className='relative group'>
                        <User
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                            focusedField === "name"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                          size={20}
                        />
                        <input
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          placeholder='Your Name *'
                          required
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-all duration-300 hover:bg-white/10 ${
                            formErrors.name
                              ? "border-red-400 focus:border-red-400"
                              : "border-white/20 focus:border-blue-400"
                          }`}
                        />
                        {formErrors.name && (
                          <p className='text-red-400 text-sm mt-2 ml-2'>
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      <div className='relative group'>
                        <Mail
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                            focusedField === "email"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                          size={20}
                        />
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          placeholder='Your Email *'
                          required
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-all duration-300 hover:bg-white/10 ${
                            formErrors.email
                              ? "border-red-400 focus:border-red-400"
                              : "border-white/20 focus:border-blue-400"
                          }`}
                        />
                        {formErrors.email && (
                          <p className='text-red-400 text-sm mt-2 ml-2'>
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-6'>
                      <div className='relative group'>
                        <Phone
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                            focusedField === "phone"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                          size={20}
                        />
                        <input
                          type='tel'
                          name='phone'
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField("")}
                          placeholder='Phone Number'
                          className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10'
                        />
                      </div>

                      <div className='relative group'>
                        <Globe
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                            focusedField === "subject"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                          size={20}
                        />
                        <input
                          type='text'
                          name='subject'
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField("")}
                          placeholder='Subject *'
                          required
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-all duration-300 hover:bg-white/10 ${
                            formErrors.subject
                              ? "border-red-400 focus:border-red-400"
                              : "border-white/20 focus:border-blue-400"
                          }`}
                        />
                        {formErrors.subject && (
                          <p className='text-red-400 text-sm mt-2 ml-2'>
                            {formErrors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className='relative group'>
                      <MessageSquare
                        className={`absolute left-4 top-6 transition-all duration-300 ${
                          focusedField === "message"
                            ? "text-blue-400"
                            : "text-gray-400"
                        }`}
                        size={20}
                      />
                      <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField("")}
                        placeholder='Your Message *'
                        rows={6}
                        required
                        className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-all duration-300 hover:bg-white/10 resize-none ${
                          formErrors.message
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/20 focus:border-blue-400"
                        }`}></textarea>
                      {formErrors.message && (
                        <p className='text-red-400 text-sm mt-2 ml-2'>
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className='group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-2 active:scale-95 border border-blue-500/30 hover:border-blue-400/50 backdrop-blur-sm disabled:opacity-70 disabled:cursor-not-allowed'>
                      <div className='flex items-center justify-center gap-3'>
                        {isSubmitting ? (
                          <>
                            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send
                              size={20}
                              className='transition-all duration-300 group-hover:translate-x-1'
                            />
                            <span>Send Message</span>
                            <ArrowRight
                              size={20}
                              className='transition-all duration-300 group-hover:translate-x-1'
                            />
                          </>
                        )}
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-105'></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className='group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/10'>
                    <div className='flex items-start gap-6'>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                        <IconComponent className='text-white' size={28} />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300'>
                          {info.title}
                        </h3>
                        <div className='space-y-2'>
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className='text-gray-300 text-lg group-hover:text-gray-200 transition-all duration-300 hover:text-blue-300 cursor-pointer'>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Embedded Map */}
              <div className='group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/10'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
                    <MapPin className='text-white' size={24} />
                  </div>
                  <h3 className='text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300'>
                    Find Us
                  </h3>
                </div>
                <div className='rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300 h-64'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.65322787245!2d85.24373135767756!3d27.708935957714655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1748254515407!5m2!1sen!2snp'
                    width='600'
                    height='450'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10'></div>
        <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-105'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl text-gray-300 mb-8 transform transition-all duration-700 hover:text-gray-200'>
            Let's discuss how we can help transform your business with
            cutting-edge digital solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2 active:scale-95'>
              <span className='flex items-center justify-center gap-3'>
                <Phone size={20} />
                Call Now
              </span>
            </button>
            <button className='group border-2 border-white/30 hover:border-blue-400 text-white hover:text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95 hover:bg-white/5'>
              <span className='flex items-center justify-center gap-3'>
                <Mail size={20} />
                Email Us
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
