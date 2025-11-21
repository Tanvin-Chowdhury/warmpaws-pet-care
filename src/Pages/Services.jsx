import React, { use } from 'react';
import ServiceCard from './ServiceCard';

const servicePromise = fetch('/services.json').then((res) => res.json());

const Services = () => {
    const services = use(servicePromise);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                services.slice(0,3).map((service) => (
                <ServiceCard key={service.serviceId} service = {service}></ServiceCard>
            ))}
        </div>
    );
};

export default Services;