import React from 'react';
import Header from '../Components/Header';
import HeroSlider from '../Components/HeroSlider/HeroSlider';
import NavBar from '../Components/NavBar';
import PopularServices from '../Pages/PopularServices';
import ExpertTips from '../Pages/ExpertTips';
import ExpertVets from '../Pages/ExpertVets';
import ShopNow from '../Pages/ShopNow';
import LastSection from '../Pages/LastSection';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <HeroSlider></HeroSlider>
                <NavBar></NavBar>
            </header>
            
            <main>
                <section className="bg-gradient-to-b from-white to-[#EEF6FF] py-10">
                    <PopularServices></PopularServices>
                </section>

                <section className>
                    <ExpertTips></ExpertTips>
                </section>

                <section className="bg-gradient-to-b from-white to-[#b0c9ed]/40 py-10">
                    <ExpertVets></ExpertVets>
                </section>
                
                <section className>
                    <ShopNow></ShopNow>
                </section>
                <section>
                    <LastSection></LastSection>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;