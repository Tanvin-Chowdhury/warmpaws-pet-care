import { Star } from 'lucide-react';
import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="winter-card overflow-hidden group rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-30">

            <div className='relative h-56 overflow-hidden'>
                <img src={service.image} alt="image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/95 backdrop-blur-sm text-[#4A6FA5] shadow-md capitalize">
                        {service.category}
                    </span>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                        <Star className="size-4 fill-[#FFBFA9] text-[#FFBFA9]" />
                        <span className="text-sm font-semibold text-[#1a202c]">{service.rating}</span>
                    </div>
                </div>
            </div>


             <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                        {service.serviceName}
                    </h3>
                    <p className="text-sm text-[#64748b] line-clamp-2">
                        {service.description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div>
                        <span className="text-2xl font-bold text-[#4A6FA5]">${service.price}</span>
                        <span className="text-sm text-[#64748b] ml-1">/ session</span>
                    </div>

                    {/* <Link to={`/service/${service.id}`}>
                        <Button className="rounded-xl bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-md hover:shadow-lg transition-all group/btn">
                        View Details
                        <ArrowRight className="size-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </Link> */}
                </div>
                    <div className="pt-3 border-t border-border">
                        <p className="text-sm text-[#64748b]">
                            by <span className="font-medium text-[#1a202c]">{service.providerName}</span>
                        </p>
                </div>
            
            </div>
        </div>
    );
};

export default ServiceCard;