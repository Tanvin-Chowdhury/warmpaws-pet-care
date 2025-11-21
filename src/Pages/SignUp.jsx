import React from 'react';

const SignUp = () => {
    return (
        <div className="min-h-screen gradient-winter-section py-12 px-4 flex items-center justify-center">
            <div className="w-full max-w-md">
        {/* Logo */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg mb-4">
                    <Snowflake className="size-9 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Create Your WarmPaws Account</h1>
                <p className="text-muted-foreground">Join us to keep your pets warm this winter</p>
            </div>
            </div>
            </div>
    );
};

export default SignUp;