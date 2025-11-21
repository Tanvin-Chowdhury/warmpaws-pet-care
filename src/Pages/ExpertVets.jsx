import { Heart, Star } from 'lucide-react';
import React from 'react';

const ExpertVets = () => {
    return (
        <div className='mx-auto w-[1440px] mb-32'>
            <div>
                 <div className='mx-auto w-[200px] flex justify-center items-center gap-2 bg-[#b0c9ed]/60 py-2 rounded-full'>
                    <Heart className='size-4 text-[#64748b]'/>
                    <p>Our Team</p>
                </div>

                <div className='text-center mt-5'>
                    <h1 className='text-4xl font-bold'>Meet Our Expert Vets</h1>
                    <p className='text-xl text-[#64748b] mt-2'>Experienced veterinarians dedicated to your pet's winter health</p>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15'>

                {/* 1st */}
                <div className='shadow-sm bg-white rounded-2xl relative group'>
                    <div className='relative h-56 overflow-hidden rounded-2xl'>
                        <img
                            src="https://i.postimg.cc/T3ffxgCc/Screenshot-2025-11-21-191138.jpg"
                            alt="image"
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <Star className="size-4 fill-[#FFBFA9] text-[#FFBFA9]" />
                            <span className="text-sm font-semibold text-[#1a202c]">4.9</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Dr. Emily Chen
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                                Winter Veterinary Care
                            </p>
                        </div>
                    </div>
                </div>


                 {/* 2nd */}
                <div className='shadow-sm bg-white rounded-2xl relative group'>
                    <div className='relative h-56 overflow-hidden rounded-2xl'>
                        <img
                            src="https://i.postimg.cc/6649f98Z/Screenshot-2025-11-21-191257.png"
                            alt="image"
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <Star className="size-4 fill-[#FFBFA9] text-[#FFBFA9]" />
                            <span className="text-sm font-semibold text-[#1a202c]">5</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Dr. Michael Brown
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                                Cold Weather Nutrition
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3rd */}
                <div className='shadow-sm bg-white rounded-2xl relative group'>
                    <div className='relative h-56 overflow-hidden rounded-2xl'>
                        <img
                            src="https://i.postimg.cc/GtyS8ghw/karlo-tottoc-yb-Z5h-Rxa-WS4-unsplash.jpg"
                            alt="image"
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <Star className="size-4 fill-[#FFBFA9] text-[#FFBFA9]" />
                            <span className="text-sm font-semibold text-[#1a202c]">4.8</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Dr. Sam Anderson
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                                Pet Dermatology
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4th */}
                <div className='shadow-sm bg-white rounded-2xl relative group'>
                    <div className='relative h-56 overflow-hidden rounded-2xl'>
                        <img
                            src="https://i.postimg.cc/XJpnhWxk/karlo-tottoc-y-Ebi-AIQrp4-unsplash.jpg"
                            alt="image"
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <Star className="size-4 fill-[#FFBFA9] text-[#FFBFA9]" />
                            <span className="text-sm font-semibold text-[#1a202c]">4.9</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Dr. James Wilson
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                               Emergency Winter Care
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default ExpertVets;