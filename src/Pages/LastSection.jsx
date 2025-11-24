import React from 'react';
import { Link } from "react-router";

const LastSection = () => {
    return (
        <div className="py-20 gradient-winter-hero">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c]">
                    Ready to Give Your Pet the Best Winter Care?
                    </h2>
                    <p className="text-xl text-[#64748b]">
                    Join our community of pet parents who trust WarmPaws for their winter pet care needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to = 'services'
                        size="lg"
                        className="text-white rounded-2xl px-4 py-3 bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-lg hover:shadow-xl transition-all"
                    >
                        Browse Services
                    </Link>
                    <Link to ='auth/register'
                        size="lg"
                        variant="outline"
                        className="rounded-2xl px-4 py-3 border-2 border-[#4A6FA5]/30 hover:bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
                    >
                        Create Account
                    </Link>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default LastSection;