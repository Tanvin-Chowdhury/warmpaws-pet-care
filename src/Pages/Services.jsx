import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';
import ServicePanelCard from './ServicePanel/ServicePanelCard';
import Loading from './Loading';


const Services = () => {
    const services = useLoaderData();
    
    if(!services){
        return <Loading></Loading>
    }

    return (
        <div className="mt-10">
            {/* Grid of 3 services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 3).map((service) => (
                    <ServicePanelCard key={service.serviceId} service={service} />
                ))}
            </div>

            {/* Button outside the grid */}
            <div className="mt-8 w-full flex justify-center">
                <Link to='services'
                    className="flex items-center rounded-2xl px-8 py-4 text-white bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-lg hover:shadow-xl transition-all group"
                >
                    View All Services
                    <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default Services;
