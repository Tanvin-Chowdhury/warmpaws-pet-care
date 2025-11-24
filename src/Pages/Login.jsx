import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router';
import { Mail, User, Lock, Image, Eye, EyeOff } from 'lucide-react';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    return (
         <div className="min-h-screen flex mt-30 justify-center">
            <div className="w-full max-w-md">
                
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16">
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#1a202c] mb-2">Login Your WarmPaws Account</h1>
                    <p className="text-[#64748b]">Join us to keep your pets warm this winter</p>
                </div>

                {/* login Form */}
                <div className="winter-card p-8">
                <form className="space-y-5">

                    {/* Email */}
                    <div className="space-y-2">
                    <label htmlFor="email" className="text-[#1a202c]">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b]" />
                        <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full pl-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                        required
                        />
                    </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                    <label htmlFor="password" className="text-[#1a202c]">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b]" />
                        <input
                        id="password"
                        type='password'
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                        required
                        />
                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#1a202c] "
                        >
                        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                        </button>
                    </div>
                    <p>Forget Password?</p>
                    </div>

                    {/* Register Button */}
                    <button
                    type="submit"
                    className="w-full text-white rounded-3xl py-4 bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-md hover:shadow-lg "
                    >
                    Login
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-[#64748b]">
                    Don't have an account?{' '}
                    <Link to="/auth/register" className="text-[#4A6FA5] hover:underline font-[500px]">
                    Create Account here
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;