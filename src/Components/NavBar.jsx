import { Award, Heart, Shield } from 'lucide-react';
import React from 'react';

const NavBar = () => {
    return (
        <div className="flex flex-col lg:flex-row flex-wrap mx-auto gap-5 mt-5 px-4 max-w-[1440px]">
            {/* Card 1 */}
            <div className="flex items-center gap-4 p-4 flex-1 min-w-[250px] rounded-2xl" style={{ background: "linear-gradient(to right, rgba(191, 216, 255, 0.2), rgba(191, 216, 255, 0.3))" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ background: "linear-gradient(to bottom right, #4A6FA5, rgba(74, 111, 165, 0.8))" }}>
                    <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="font-semibold text-[#1a202c]">Safe & Secure</h4>
                    <p className="text-sm text-[#64748b]">Certified professionals</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 p-4 flex-1 min-w-[250px] rounded-2xl" style={{ background: "linear-gradient(to right, rgba(255, 191, 169, 0.2), rgba(255, 191, 169, 0.3))" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ background: "linear-gradient(to bottom right, #FFBFA9, rgba(255, 191, 169, 0.8))" }}>
                    <Heart className="w-6 h-6 text-[#1a202c]" />
                </div>
                <div>
                    <h4 className="font-semibold text-[#1a202c]">With Love & Care</h4>
                    <p className="text-sm text-[#64748b]">Compassionate service</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 p-4 flex-1 min-w-[250px] rounded-2xl" style={{ background: "linear-gradient(to right, rgba(74, 111, 165, 0.1), rgba(74, 111, 165, 0.2))" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ background: "linear-gradient(to bottom right, #4A6FA5, rgba(74, 111, 165, 0.8))" }}>
                    <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="font-semibold text-[#1a202c]">Award Winning</h4>
                    <p className="text-sm text-[#64748b]">Best pet care 2025</p>
                </div>
            </div>
        </div>

    );
};

export default NavBar;