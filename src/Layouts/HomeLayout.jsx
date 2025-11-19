import React from 'react';
import NavBar from '../Components/Header';
import Header from '../Components/Header';
import HeroSlider from '../Components/HeroSlider/HeroSlider';
const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <HeroSlider></HeroSlider>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;