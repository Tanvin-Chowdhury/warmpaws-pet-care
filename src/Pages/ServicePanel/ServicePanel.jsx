import React from 'react';
import { useLoaderData } from 'react-router';
import ServicePanelCard from './ServicePanelCard';

const ServicePanel = () => {
     const services = useLoaderData(); 
    return (
        <div className='mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-30'>
            
            {services?.map((service) => (
                <ServicePanelCard 
                    key={service.serviceId} 
                    service={service} 
                />
            ))}
        </div>
    );
};

export default ServicePanel;