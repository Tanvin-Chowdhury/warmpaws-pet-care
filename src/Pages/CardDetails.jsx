import { ArrowLeft, Calendar, CheckCircle2, Mail, Star, User } from 'lucide-react';
import React from 'react';
import { Navigate, useLocation, useNavigate } from "react-router";
import { toast } from 'react-toastify';

const CardDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const service = state?.service;

  if (!service) {
    return <h2 className="text-center mt-10">No details found.</h2>;
  }

  const handleBookNow = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        toast.success("Booked This Service")
  }


  return (
    <div className="container mx-auto px-4 mt-30 mb-20">

      {/* Back Button */}
      <button onClick={() => navigate("/services")}
        className="mb-8 flex items-center gap-2 text-[#4A6FA5] hover:underline"
      >
        <ArrowLeft className="size-5" /> Back to Services
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">

          {/* Hero Image */}
          <div className="winter-card overflow-hidden">
            <div className="relative h-96">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-full object-cover"
              />

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-6 py-2.5 rounded-2xl text-sm font-semibold bg-white text-[#4A6FA5] shadow-lg capitalize">
                  {service.category}
                </span>
              </div>
            </div>
          </div>


          {/* Service Info */}
            <div className="winter-card p-8 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a202c] mb-4">
                  {service.serviceName}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-[#64748b]">
                  <div className="flex items-center gap-2">
                    <User className="size-5 text-[#4A6FA5]" />
                    <span>Provider: <span className="font-medium text-[#1a202c]">{service.providerName}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-5 text-[#4A6FA5]" />
                    <span>{service.providerEmail}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Star className="size-6 fill-[#FFBFA9] text-[#FFBFA9]" />
                  <span className="text-xl font-semibold text-[#1a202c]">{service.rating}</span>
                  <span className="text-[#64748b]">Rating</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="size-6 text-[#4A6FA5]" />
                  <span className="text-xl font-semibold text-[#1a202c]">{service.slotsAvailable}</span>
                  <span className="text-[#64748b]">Slots Available</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-[#4A6FA5]">${service.price}</span>
                  <span className="text-[#64748b]">per session</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-[#1a202c] mb-3">Description</h3>
                <p className="text-[#64748b] leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

            {/* Features */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-[#1a202c] mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Professional Care',
                    'Safety Guaranteed',
                    'Flexible Scheduling',
                    'Expert Team',
                    'Quality Equipment',
                    'Follow-up Support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-[#4A6FA5] flex-shrink-0" />
                      <span className="text-[#64748b]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        {/* RIGHT SIDEBAR FORM */}
        <div className="lg:col-span-1">
            <div className="winter-card p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Book This Service</h3>
              
              <form onSubmit={handleBookNow} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-[#1a202c]">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b]" />
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full pl-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                            required
                            name = 'name'
                        />
                    </div>
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-[#1a202c]">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b]" />
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full pl-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                            required
                            name = 'email'
                        />
                    </div>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full rounded-3xl py-4 text-white bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-lg hover:shadow-xl transition-all"
                >
                  Book Now - ${service.price}
                </button>

                <div className="pt-4 border-t border-border text-center text-sm text-[#64748b]">
                  <p>By booking, you agree to our terms and conditions</p>
                </div>
              </form>
            </div>
          </div>


      </div>
    </div>
  );
};

export default CardDetails;
