import { ShoppingCart, Sparkle } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';


const ShopNow = () => {
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddtoCart = () =>{
         if (user) {
            toast.success("Successfully added to cart!");
        } else {
            navigate('/auth/login');
        }
    }

    return (
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-20 mb-40">

            <div>
                <div className="mx-auto w-[200px] flex justify-center items-center gap-2 bg-[#FFBFA9]/50 px-4 py-2 rounded-full">
                    <Sparkle className="size-4 text-[#FFBFA9]" />
                    <p>Shop Now</p>
                </div>

                <div className="text-center mt-5">
                    <h1 className="text-4xl font-bold">Warm Accessories for Cozy Pets</h1>
                    <p className="text-xl text-[#64748b] mt-2">
                        Essential winter gear to keep your pets comfortable and protected
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">

                {/* 1st */}
                <div className="shadow-sm bg-white rounded-2xl relative group">
                    <div className="relative h-56 overflow-hidden rounded-2xl">
                        <img
                            src="https://i.postimg.cc/rpqTRwFQ/photo-1611611579520-1756ad57a3c6.jpg"
                            alt="image"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <span className="text-sm font-semibold text-[#1a202c]">Protection</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Winter Paw Boots
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                                Protect your pet's paws from ice, salt, and cold surfaces with these durable boots.
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-xl font-bold text-primary">$29</span>
                            <button
                                onClick={handleAddtoCart}
                                className="flex py-3 px-2 items-center rounded-xl bg-gradient-to-r from-[#FFBFA9] to-[#FFBFA9]/80 hover:from-[#FFBFA9]/90 hover:to-[#FFBFA9]/70 text-[#1a202c] shadow-md hover:shadow-lg transition-all group/btn"
                            >
                                <ShoppingCart className="size-4 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2nd */}
                <div className="shadow-sm bg-white rounded-2xl relative group">
                    <div className="relative h-56 overflow-hidden rounded-2xl">
                        <img
                            src="https://i.postimg.cc/QCgGMLGz/photo-1573682127988-f67136e7f12a.jpg"
                            alt="image"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <span className="text-sm font-semibold text-[#1a202c]">Bedding</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Heated Pet Bed
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                                Keep your pet warm and cozy with this self-heating pet bed perfect for winter.
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-xl font-bold text-primary">$55</span>
                            <button
                                onClick={handleAddtoCart}
                                className="flex py-3 px-2 items-center rounded-xl bg-gradient-to-r from-[#FFBFA9] to-[#FFBFA9]/80 hover:from-[#FFBFA9]/90 hover:to-[#FFBFA9]/70 text-[#1a202c] shadow-md hover:shadow-lg transition-all group/btn"
                            >
                                <ShoppingCart className="size-4 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3rd */}
                <div className="shadow-sm bg-white rounded-2xl relative group">
                    <div className="relative h-56 overflow-hidden rounded-2xl">
                        <img
                            src="https://i.postimg.cc/ncnN1PtM/photo-1612811600288-d0f2c50cfcd5.jpg"
                            alt="image"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                            <span className="text-sm font-semibold text-[#1a202c]">Clothing</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[#1a202c] mb-2 group-hover:text-[#4A6FA5] transition-colors">
                                Insulated Winter Jacket
                            </h3>
                            <p className="text-sm text-[#64748b] line-clamp-2">
                                Stylish and warm winter jacket with water-resistant fabric and adjustable fit.
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-xl font-bold text-primary">$45</span>
                            <button
                                onClick={handleAddtoCart}
                                className="flex py-3 px-2 items-center rounded-xl bg-gradient-to-r from-[#FFBFA9] to-[#FFBFA9]/80 hover:from-[#FFBFA9]/90 hover:to-[#FFBFA9]/70 text-[#1a202c] shadow-md hover:shadow-lg transition-all group/btn"
                            >
                                <ShoppingCart className="size-4 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ShopNow;
