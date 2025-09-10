import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div>
        <div className="flex flex-wrap mt-20">
          {/* Left Panel */}
          <div className="w-full md:w-[55%] lg:w-1/2 bg-[#33522d] flex items-start justify-center pr-20 sm:pr-10 h-full">
            <div className="p-12 w-full max-w-2xl pr-0  mb-20">
              
              {/* Icon */}
              <div className="mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="21 20 159.3 160" 
                  fill="white" 
                  className="w-6 h-6 sm:w-8 sm:h-8" 
                  aria-hidden="true"
                >
                  <path d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"/>
                </svg>
              </div>

              {/* Heading */}
              <h1 className="text-white font-sans font-semibold font-medium uppercase text-[40px] md:text-[50px] lg:text-[70px] leading-tight py-10 sm:py-5">
                Contact Us
              </h1>

              {/* Subtitle */}
              <p className="text-white mt-4 mb-8 tracking-wide font-medium text-sm sm:text-xl md:text-base">
                Fill out the form and we will reach out as soon as possible.
              </p>

              {/* Form Card */}
              <div>
                <form className="space-y-6">
                  {/* Name fields */}
                  <div className="mb-8">
                    <label htmlFor="email" className="text-white block text-lg font-semibold mb-1">
                      Email *
                    </label>
                    <input type="email" id="email" className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    <div className="mb-8">
                      <label htmlFor="firstName" className="text-white block text-lg font-semibold mb-1">
                        First Name *
                      </label>
                      <input type="text" id="firstName" className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2" />
                    </div>
                    <div className="mb-8">
                      <label htmlFor="lastName" className="text-white block text-lg font-semibold mb-1">
                        Last Name *
                      </label>
                      <input type="text" id="lastName" className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Phone */}
                    <div className="mb-8">
                      <label htmlFor="phone" className="text-white block text-lg font-semibold mb-1">
                        Phone
                      </label>
                      <input type="tel" id="phone" className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"  />
                    </div>
                    <div className="mb-8">
                      <button 
                        type="submit"
                        className="w-full py-3 mt-4 text-white hover:bg-white hover:text-[#33522d] transition-colors rounded-full border-[2px] border-white  font-semibold hover:font-medium"
                      >
                        Send Message
                      </button>
                    </div>                    
                  </div>
                  <div className="address">
                      <p className=" py-1.5 text-3xl text-white">WHERE WE ARE</p>
                      <p className=" py-1.5 text-2xl text-white">Lämmertwiete 2, 21073 Hamburg,</p>
                      <p className=" py-1.5 text-2xl text-white">Germany, info@dosaworld.de</p>
                      <p className=" py-1.5 text-2xl text-white">+4917622213135</p>
                      <p className=" py-1.5 text-2xl text-white">04032527895</p>
                    </div>
                </form>
              </div>
            </div>
          </div>


          {/* Right Panel */}




          <div className="w-full md:w-[45%] lg:w-1/2">
            <div className="w-full h-[450px] md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.278241291759!2d9.97872677595137!3d53.46348726595317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b19100445e7787%3A0x820c7593f06ff0a7!2sDosa%20World%20Indisches%20restaurant!5e0!3m2!1sen!2sin!4v1754302731126!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;