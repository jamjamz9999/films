import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-dark-secondary pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {isVisible && (
          <>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-black uppercase text-white animate-fadeInUp">
                Let's <span className="text-ferrari-red">Collaborate</span>
              </h1>
              <p className="text-lg text-light-gray mt-4 mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                Have a project in mind? I'm ready to help you bring your vision to life. Get in touch using the details below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
              {/* Business Card & Info */}
              <div className="lg:col-span-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <div className="bg-dark-primary p-8 shadow-lg h-full">
                  <h2 className="text-2xl font-bold uppercase text-white mb-6">Contact Details</h2>
                  
                  {/* Business Card */}
                  <div className="bg-black text-white p-6 mb-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center mb-4">
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.nickasenjofilms.com&color=ffffff&bgcolor=000000" alt="QR Code" className="w-20 h-20 mr-4"/>
                          <div>
                              <h3 className="font-bold text-xl">Nick Asenjo</h3>
                              <p className="text-sm text-gray-400">Videographer / Filmmaker</p>
                          </div>
                      </div>
                      <div className="space-y-2 text-sm">
                          <p><strong className="tracking-wider text-gray-400">E:</strong> hello@nickasenjofilms.com</p>
                          <p><strong className="tracking-wider text-gray-400">P:</strong> +1 (555) 123-4567</p>
                          <p><strong className="tracking-wider text-gray-400">S:</strong> @nickasenjo</p>
                      </div>
                  </div>

                  {/* Google Business Info */}
                   <div>
                      <h3 className="text-xl font-bold uppercase text-white mb-3">Business Information</h3>
                      <div className="space-y-2 text-light-gray">
                          <p><strong className="text-gray-400">Address:</strong><br/>123 Cinema Drive, Hollywood, CA 90028</p>
                          <p><strong className="text-gray-400">Hours:</strong><br/>Mon - Fri: 9:00 AM - 6:00 PM</p>
                           <a href="#" className="inline-block text-ferrari-red hover:underline">View on Google Maps</a>
                      </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-2 w-full h-full min-h-[400px] lg:min-h-0 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.604599540024!2d-118.3289048847844!3d34.0805959805986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8f3c7f1a3cb%3A0x6c0d6b9f2e4a3b8c!2sParamount%20Pictures!5e0!3m2!1sen!2sus!4v1678886473456!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="shadow-lg"
                  ></iframe>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;