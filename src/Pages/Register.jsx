import React, { useContext, useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link, useNavigate } from 'react-router';
import { Mail, User, Lock, Image, Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const {createUser, setUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if(!passwordPattern.test(password)){
            setError("Password must be at least 6 characters long and include at least one uppercase, and one lowercase");
            return;
        }

        setError('');
        setSuccess(false);

        createUser(email, password)
        .then(result =>{
            const user= result.user;
            updateUser({ displayName: name, photoURL: photo })
            .then(() =>{
                setUser({...user, displayName: name, photoURL: photo});
                navigate("/");
            })
            .catch((error) =>{
                // console.log(error);
                setUser(user);
            })
            toast.success('Welcome to WarmPaws!');
            setSuccess(true);
            e.target.reset();
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }

    const handleGoogleSignIn = () =>{
            signInWithPopup(auth, googleProvider)
            .then((result) =>{
                const user= result.user;
                navigate("/");
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
            })
        }

    const handleTogglePasswordShow = (event) =>{
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    
    return (
         
         <div className="flex mt-30 justify-center mb-20">
            <div className="w-full max-w-md">
                
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16">
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#1a202c] mb-2">Create Your WarmPaws Account</h1>
                    <p className="text-[#64748b]">Join us to keep your pets warm this winter</p>
                </div>

                {/* Signup Form */}
                <div className="winter-card p-8">
                <form onSubmit={handleRegister} 
                className="space-y-5">

                    {/* Name */}
                    <div className="space-y-2">
                    <label htmlFor="name" className="text-[#1a202c]">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b]" />
                        <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full pl-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                        required
                        name = 'name'
                        />
                    </div>
                    </div>

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
                        name = 'email'
                        />
                    </div>
                    </div>

                    {/* Photo URL */}
                    <div className="space-y-2">
                    <label htmlFor="photoURL" className="text-foreground">Photo URL (Optional)</label>
                    <div className="relative">
                        <Image className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b]" />
                        <input
                        id="photoURL"
                        type="url"
                        placeholder="https://example.com/photo.jpg"
                        name = 'photo'
                        className="w-full pl-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
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
                        type={showPassword ? 'text' : 'password'}
                        name = 'password'
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                        required
                        />
                        <button
                        type="button"
                        onClick={handleTogglePasswordShow}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#1a202c] "
                        >
                        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                        </button>
                    </div>
                    </div>

                    {/* Register Button */}
                    <button
                    type="submit"
                    className="cursor-pointer w-full text-white rounded-3xl py-4 bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-md hover:shadow-lg "
                    >
                    Create Account
                    </button>
                    {
                        error && <p className='errorText'>{error}</p>
                    }
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-card text-[#64748b]">Or continue with</span>
                    </div>
                </div>

                {/* Google Signup */}
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="cursor-pointer w-full rounded-3xl py-4 border-1 bg-[#BFD8FF]/50 hover:bg-[#BFD8FF] shadow-md hover:shadow-lg "
                >
                    Sign up with Google
                </button>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-[#64748b]">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-[#4A6FA5] hover:underline font-[500px]">
                    Login here
                    </Link>
                </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Register;