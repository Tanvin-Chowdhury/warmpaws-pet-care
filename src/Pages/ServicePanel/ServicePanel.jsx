import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router';
import ServicePanelCard from './ServicePanelCard';
import { Sparkles } from 'lucide-react';

const ServicePanel = () => {
     const services = useLoaderData(); 
    return (
        <div className='mt-30'>

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

           <div className='grid grid-cols-6 gap-5 mx-auto max-w-[1440px]'>
                {
                    services?.slice(0,6).map((category) => (
                        <NavLink to={`/services/${category.category}`}
                        key={category.category}
                        className='px-4 py-3 rounded-2xl font-medium transition-all text-center 
                        bg-white text-[#1a202c] hover:bg-[#BFD8FF]/50 shadow-md hover:shadow-lg'
                        >{category.category} </NavLink>
                ))}
           </div>
            
            <div className='mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                 {
                    services?.map((service) => (
                    <ServicePanelCard 
                        key={service.serviceId} 
                        service={service} 
                    />
                ))}
            </div>

            <Outlet></Outlet>
           
        </div>
    );
};

export default ServicePanel;

{/* <button
                        key={category.serviceId}
                        onClick={() => setSelectedCategory(category.serviceId)}
                        className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                        selectedCategory === category.serviceId
                            ? 'bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 text-white shadow-lg scale-105'
                            : 'bg-white text-foreground hover:bg-[#BFD8FF]/50 shadow-md hover:shadow-lg'
                        }`}
                        >
                            {category.category}
                        </button> */}