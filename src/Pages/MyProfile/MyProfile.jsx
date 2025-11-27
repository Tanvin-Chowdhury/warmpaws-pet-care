import React from "react";

const MyProfile = ({ user }) => {
  if (!user) {
    return (
      <h2 className="text-center mt-20 text-xl text-[#64748b]">
        No user data available.
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-30">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6">
        
        {/* User Image */}
        <img
          src={user.image}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />

        {/* User Info */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1a202c]">{user.name}</h2>
          <p className="text-[#64748b]">{user.email}</p>
        </div>

        {/* Update Profile Button */}
        <button
          className="mt-4 px-6 py-3 bg-[#4A6FA5] text-white rounded-xl shadow-md hover:bg-[#3b588c] transition-colors"
          onClick={() => alert("Update Profile functionality to be implemented!")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
