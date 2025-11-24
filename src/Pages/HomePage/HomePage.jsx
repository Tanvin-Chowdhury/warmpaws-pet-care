import React from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider'
import NavBar from '../../Components/NavBar'
import PopularServices from '../PopularServices';
import ExpertTips from '../ExpertTips';
import ExpertVets from '../ExpertVets'
import ShopNow from '../ShopNow';
import LastSection from '../LastSection';


const HomePage = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <NavBar></NavBar>

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
        </div>
    );
};

export default HomePage;

               