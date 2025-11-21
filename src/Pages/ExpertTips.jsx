import { Apple, Bed, Droplets, Heart, House, Shirt, Sparkle } from 'lucide-react';
import React from 'react';

const ExpertTips = () => {
    return (
        <div className='mx-auto w-[1440px] mt-20 mb-40'>
            <div>
                 <div className='mx-auto w-[200px] flex justify-center items-center gap-2 bg-[#FFBFA9]/50 px-4 py-2 rounded-full'>
                    <Sparkle className='size-4 text-[#FFBFA9]'/>
                    <p>Expert Tips</p>
                </div>

                <div className='text-center mt-5'>
                    <h1 className='text-4xl font-bold'>Winter Care Tips for Pets</h1>
                    <p className='text-xl text-[#64748b] mt-2'>Essential advice to help your furry friends thrive during winter</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
                {/* 1st */}
                <div className="winter-card p-6 space-y-4 hover:scale-105 transition-transform border-none rounded-3xl shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">   
                        <Shirt className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Warm Clothing</h4>
                        <p className="text-muted-foreground leading-relaxed">Dress your pet in comfortable winter wear, especially for short-haired breeds.</p>
                    </div>
                </div>

                {/* 2nd */}
                <div className="winter-card p-6 space-y-4 hover:scale-105 transition-transform border-none rounded-3xl shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">    
                        <Heart className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Paw Protection</h4>
                        <p className="text-muted-foreground leading-relaxed">Use paw balm and boots to protect against ice, salt, and cold surfaces.</p>
                    </div>
                </div>

                {/* 3rd */}
                <div className="winter-card p-6 space-y-4 hover:scale-105 transition-transform border-none rounded-3xl shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">     
                        <House className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Indoor Exercise</h4>
                        <p className="text-muted-foreground leading-relaxed">Keep your pet active indoors with toys and games on extremely cold days.</p>
                    </div>
                </div>

                {/* 4th */}
                <div className="winter-card p-6 space-y-4 hover:scale-105 transition-transform border-none rounded-3xl shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">
                        <Apple className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Nutrition Boost</h4>
                        <p className="text-muted-foreground leading-relaxed">Adjust diet to support energy needs during cold weather.</p>
                    </div>
                </div>

                {/* 5th */}
                <div className="winter-card p-6 space-y-4 hover:scale-105 transition-transform border-none rounded-3xl shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">
                        <Droplets className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Hydration</h4>
                        <p className="text-muted-foreground leading-relaxed">Ensure fresh, unfrozen water is always available.</p>
                    </div>
                </div>

                {/* 6th */}
                <div className="winter-card p-6 space-y-4 hover:scale-105 transition-transform border-none rounded-3xl shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">
                        <Bed className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Cozy Bedding</h4>
                        <p className="text-muted-foreground leading-relaxed">Provide warm, elevated beds away from drafts and cold floors.</p>
                    </div>
                </div>

                

            </div>
        </div>
    );
};

export default ExpertTips;