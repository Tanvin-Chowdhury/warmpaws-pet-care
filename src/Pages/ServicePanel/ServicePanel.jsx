import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ServicePanelCard from './ServicePanelCard';
import { Sparkles } from 'lucide-react';

const ServicePanel = () => {
    const services = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredServices, setFilteredServices] = useState(services);

    const categories = ['All', ...new Set(services.map(s => s.category))];

    useEffect(() => {
        
        if (selectedCategory === 'All') {
            setFilteredServices(services);
        } else {
            setFilteredServices(
                services.filter(s => s.category === selectedCategory)
            );
        }
    }, [selectedCategory, services]);

    return (
        <div className='mt-25'>
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-2 shadow-md">
                    <Sparkles className="size-4 text-[#4A6FA5]" />
                    <span className="text-sm font-medium text-[#4A6FA5]">All Services</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] mt-5">
                    Winter Pet Care Services
                </h1>
                <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                    Browse our complete range of professional winter care services for your pets
                </p>
            </div>

            {/* Category Buttons */}
            <div className='grid grid-cols-6 gap-5 mx-auto max-w-[1440px]'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-3 rounded-2xl font-medium transition-all text-center shadow-md ${
                            selectedCategory === category
                                ? 'bg-[#BFD8FF]/50 text-[#1a202c] shadow-lg'
                                : 'bg-white text-[#1a202c] hover:bg-[#BFD8FF]/50 hover:shadow-lg'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Service Grid */}
            <div className='mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-20'>
                {filteredServices.length > 0 ? (
                    filteredServices.map(service => (
                        <ServicePanelCard key={service.serviceId} service={service} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No services found in this category.
                    </p>
                )}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-[1440px] mb-20">
                <div className="winter-card p-8 text-center">
                    <div className="text-4xl font-bold text-[#4A6FA5] mb-2">500+</div>
                    <p className="text-[#64748b]">Happy Pet Parents</p>
                </div>
                <div className="winter-card p-8 text-center">
                    <div className="text-4xl font-bold text-[#FFBFA9] mb-2">1000+</div>
                    <p className="text-[#64748b]">Services Completed</p>
                </div>
                <div className="winter-card p-8 text-center">
                    <div className="text-4xl font-bold text-[#4A6FA5] mb-2">4.9★</div>
                    <p className="text-[#64748b]">Average Rating</p>
                </div>
                </div>
        </div>
    );
};

export default ServicePanel;
