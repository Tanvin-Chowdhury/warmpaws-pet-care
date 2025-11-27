import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

const ForgotPassword = () => {
  const location = useLocation();
  const initialEmail = location.state?.email || '';
  const [email, setEmail] = useState(initialEmail);

  const handleReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setTimeout(() => {
            window.open("https://mail.google.com", "_blank");
        }, 1000);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-md mt-20 mb-30">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />
        <button
          type="submit"
          className="cursor-pointer w-full py-3 bg-[#4A6FA5] text-white rounded-xl"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
