import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
        const {user} = use(AuthContext);
        //  const { state } = useLocation();
        //   const navigate = useNavigate();
        //   const service = state?.service;
        
        //   if (!service) {
        //     return <h2 className="text-center mt-10">No details found.</h2>;
        //   }
        

    return (
        <div className='mx-auto max-w-[1440px] border-2 mt-20'>
            
        </div>
    );
};

export default MyProfile;