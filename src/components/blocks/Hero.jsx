import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import heroCSS from "../styles/hero.css";
import NavButtonHOC from "../shared/NavButton";
import Down from "../../img/BlockHero/down.svg";

const NavButton = NavButtonHOC(heroCSS.HeroButton);
const DownButton = NavButtonHOC(heroCSS.HeroDown);

const Hero = forwardRef((props, ref) => {
    
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <heroCSS.Hero $pad={sectionPadding}>
                <heroCSS.HeroTop ref={ref} id="hero" />
                <heroCSS.HeroContainer>
                    <heroCSS.InfoContainer>
                        <heroCSS.H1>AUTOPLAY</heroCSS.H1>
                        <heroCSS.SubText>
                            Ваш эксперт по автоакустике и автомобильным аксессуарам в Новокузнецке
                        </heroCSS.SubText>
                    </heroCSS.InfoContainer>
                    <NavButton href='#advantages'>
                        Почему именно мы?
                    </NavButton>
                    
                </heroCSS.HeroContainer>
                <DownButton href='#advantages'>
                    <img src={Down} alt="" />
                </DownButton>
            </heroCSS.Hero>
        </>
    );
});

export default Hero