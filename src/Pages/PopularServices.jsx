import React, { Suspense } from 'react';
import Services from './Services';
import { Sparkle } from 'lucide-react';

const PopularServices = () => {
    return (
        <div className="mx-auto max-w-[1440px] mt-20 px-4">
            <div>
                <div className="mx-auto w-fit flex justify-center items-center gap-2 bg-[#b0c9ed] px-4 py-2 rounded-full">
                    <Sparkle className="size-4 text-[#64748b]" />
                    <p>Popular Services</p>
                </div>

                <div className="text-center mt-5">
                    <h1 className="text-4xl lg:text-5xl font-bold">Winter Care Services</h1>
                    <p className="text-lg lg:text-xl text-[#64748b] mt-2">
                        Professional services to keep your pets warm, healthy, and happy during the <br className="hidden sm:inline" /> cold season
                    </p>
                </div>
            </div>

                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    <Services />
                </Suspense>
        </div>
    );
};

export default PopularServices;