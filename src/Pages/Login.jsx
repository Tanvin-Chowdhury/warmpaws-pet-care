import React, { use, useRef, useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link, useLocation, useNavigate} from 'react-router';
import { Mail, User, Lock, Image, Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const {signIn, setLoading} = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) =>{
        e.preventDefault();
        setError('');
        setLoading(true);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            toast.success("Welcome back to WarmPaws!");
            const redirectPath = location.state?.from || '/';
            navigate(redirectPath, {
                replace: true,
                state: location.state?.service && { service: location.state.service }
            });
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(`Invalid Email or Password`);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) =>{
            const user= result.user;
            const redirectPath = location.state?.from || '/';
            navigate(redirectPath, {
                replace: true, 
                state: location.state?.service ? { service: location.state.service } : {} });
        })
        .catch((error) =>{
            const errorMessage = error.message;
            toast.error("Google Sign-In failed: " + errorMessage);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const handleTogglePasswordShow = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleForgotPassword = () =>{
        const email = emailRef.current.value;
        if (!email) {
            toast.warning("Please enter your email first");
            return;
        }
        navigate('/auth/forgot-password', { state: { email } });
        
    }

    return (
         <div className="flex mt-30 justify-center mb-20">
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
                
                {/* form */}
                <form onSubmit={handleLogin} className="space-y-5">

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
                            ref={emailRef}
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
                                placeholder="Create a strong password"
                                className="w-full pl-12 pr-12 rounded-xl border-border focus:border-[#4A6FA5] bg-white h-12"
                                required
                                name = 'password'
                            />
                            
                            <button
                                type="button"
                                onClick={handleTogglePasswordShow}
                                className=" absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#1a202c] "
                                >
                                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                            </button>

                        {/* forget password */}
                        </div>
                            <Link className='hover:text-[#4A6FA5]' onClick={handleForgotPassword}>
                                Forget Password?
                            </Link>
                    </div>

                        {/* Register Button */}
                        <button
                        type="submit"
                        className="cursor-pointer w-full text-white rounded-3xl py-4 bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-md hover:shadow-lg "
                        >
                        Login
                        </button>

                        {
                            error && <p className='errorText'>{error}</p>
                        }
                        
                        {/* Google Signup */}
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="cursor-pointer w-full rounded-3xl py-4 border-1 bg-[#BFD8FF]/50 hover:bg-[#BFD8FF] shadow-md hover:shadow-lg "
                        >
                            Sign up with Google
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