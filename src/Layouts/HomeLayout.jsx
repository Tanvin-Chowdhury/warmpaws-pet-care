import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            
            <main>
                <Outlet>
                </Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

            <ToastContainer
                position="top-center"
                autoClose={1000}
                theme="light"
            />
        </div>
    );
};

export default HomeLayout;