import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile, updatePassword } from "firebase/auth";
import { Bounce, toast, ToastContainer } from "react-toastify";
import logo from '..//../assets/logo.jpg';

const MyProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <h2 className="text-center mt-20 text-xl text-[#64748b]">
        <span className="loading loading-spinner loading-md mr-5"></span>
        No user data available.
      </h2>
    );
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update name & photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || null,
      });

      // Update password if provided
      if (password) {
        await updatePassword(user, password);
      }

      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-20">

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />

        {!editing ? (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1a202c]">
                {user.displayName || "User"}
              </h2>
              <p className="text-[#64748b]">{user.email}</p>
            </div>

            <button
              className="mt-4 px-6 py-3 bg-[#4A6FA5] text-white rounded-xl shadow-md hover:bg-[#3b588c] transition-colors"
              onClick={() => setEditing(true)}
            >
              Update Profile
            </button>

            <button
              className="mt-2 px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-colors"
              onClick={() => logOut().catch(err => console.error(err))}
            >
              Logout
            </button>
          </>
        ) : (
          <form
            onSubmit={handleUpdateProfile}
            className="w-full flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full border rounded-3xl px-4 py-2"
              required
            />
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
              className="w-full border rounded-3xl px-4 py-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password (optional)"
              className="w-full border rounded-3xl px-4 py-2"
            />

            <div className="flex gap-4 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-green-500 text-white rounded-3xl shadow-md hover:bg-green-600 transition-colors"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
              <button
                type="button"
                className="flex-1 px-6 py-3 bg-gray-300 text-black rounded-3xl shadow-md hover:bg-gray-400 transition-colors"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={5000} transition={Bounce} />
    </div>
  );
};

export default MyProfile;
