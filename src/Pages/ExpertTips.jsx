import { Apple, Bed, Droplets, Heart, House, Shirt, Sparkle } from 'lucide-react';
import React from 'react';

const ExpertTips = () => {


    return (
        <div className='expert-tips-container'>
            <div>
                 <div className='expert-badge'>
                    <Sparkle className='size-4 text-[#FFBFA9]'/>
                    <p>Expert Tips</p>
                </div>

                <div className='expert-tips-header'>
                    <h1 className='text-4xl font-bold'>Winter Care Tips for Pets</h1>
                    <p className='text-xl text-[#64748b] mt-2'>Essential advice to help your furry friends thrive during winter</p>
                </div>
            </div>

            <div className='expert-tips-grid'>
                {/* 1st */}
                <div className="expert-card">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">   
                        <Shirt className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Warm Clothing</h4>
                        <p className="text-muted-foreground leading-relaxed">Dress your pet in comfortable winter wear, especially for short-haired breeds.</p>
                    </div>
                </div>

                {/* 2nd */}
                <div className="expert-card">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">    
                        <Heart className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Paw Protection</h4>
                        <p className="text-muted-foreground leading-relaxed">Use paw balm and boots to protect against ice, salt, and cold surfaces.</p>
                    </div>
                </div>

                {/* 3rd */}
                <div className="expert-card">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">     
                        <House className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Indoor Exercise</h4>
                        <p className="text-muted-foreground leading-relaxed">Keep your pet active indoors with toys and games on extremely cold days.</p>
                    </div>
                </div>

                {/* 4th */}
                <div className="expert-card">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">
                        <Apple className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Nutrition Boost</h4>
                        <p className="text-muted-foreground leading-relaxed">Adjust diet to support energy needs during cold weather.</p>
                    </div>
                </div>

                {/* 5th */}
                <div className="expert-card">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFBFA9]/20 to-[#FFBFA9]/40 flex items-center justify-center">
                        <Droplets className='text-[#FFBFA9]'/>
                    </div>
                
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">Hydration</h4>
                        <p className="text-muted-foreground leading-relaxed">Ensure fresh, unfrozen water is always available.</p>
                    </div>
                </div>

                {/* 6th */}
                <div className="expert-card">
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