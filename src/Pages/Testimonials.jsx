import { Heart, Quote, Star } from 'lucide-react';
import React, { use } from 'react';

const testimonialPromise = fetch('/testimonial.json').then((res) => res.json());

const Testimonials = () => {

    const testimonials = use(testimonialPromise);

    return (
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A6FA5]/10 backdrop-blur-sm mb-5">
              <Heart className="size-4 text-[#4A6FA5]" />
              <span className="text-sm font-medium text-[#4A6FA5]">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c]">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Real stories from our happy community of pet parents and their beloved companions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-30">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="animate-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-[#4A6FA5]/10">
                  <div className="mb-4">
                    <Quote className="size-8 text-[#4A6FA5]/30" />
                  </div>
                  
                  <p className="text-[#64748b] mb-6 flex-grow">
                    {testimonial.comment}
                  </p>
                  
                  <div className="border-t border-[#4A6FA5]/10 pt-4 space-y-2">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-semibold text-[#1a202c]">{testimonial.name}</p>
                    <p className="text-sm text-[#64748b]">{testimonial.petType}</p>
                    <p className="text-xs text-[#64748b]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
    );
};

export default Testimonials;