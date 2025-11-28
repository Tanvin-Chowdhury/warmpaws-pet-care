import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                
            </header>
            
            <main>
               {
                    state == 'loading' ? <Loading/> : <Outlet></Outlet>
                }
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