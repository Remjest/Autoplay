import React from "react";
import { useSelector } from "react-redux";
import footerCSS from "../styles/footer.css";
import NavButtonHOC from "../shared/NavButton";
import Logo from "../../img/Footer/fLogo.svg";
import Tg from "../../img/Footer/tg.svg";
import Vk from "../../img/Footer/vk.svg";
import Avito from "../../img/Footer/avito.svg";
// import Geo from "../../img/Footer/geo.svg";
// import Vk from "../../img/Footer/vk.svg";

const NavButton = NavButtonHOC(footerCSS.Point)

const Footer = () => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <footerCSS.Footer $pad={sectionPadding}>
                <footerCSS.FooterContainer>
                    <NavButton href="#hero">
                        <footerCSS.PointImg style={{ width: '100%'}}><img src={Logo} alt="" /></footerCSS.PointImg>
                    </NavButton>
                    <footerCSS.Point href="https://www.avito.ru/brands/novokuz" target="_blank" rel="noopener noreferrer">
                        <footerCSS.PointInfo>
                            Мы в Telegram:
                        </footerCSS.PointInfo>
                        <footerCSS.PointImg><img src={Tg} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                    <footerCSS.Point href="https://www.avito.ru/brands/novokuz" target="_blank" rel="noopener noreferrer">
                        <footerCSS.PointInfo>
                            Сообщество VK:
                        </footerCSS.PointInfo>
                        <footerCSS.PointImg><img src={Vk} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                    <footerCSS.Point href="https://www.avito.ru/brands/novokuz" target="_blank" rel="noopener noreferrer">
                        <footerCSS.PointImg style={{ width: '100%' }}><img src={Avito} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                </footerCSS.FooterContainer>
            </footerCSS.Footer>
        </>
    );
}

export default Footer