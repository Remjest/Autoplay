import React from "react";
import { useSelector } from "react-redux";
import footerCSS from "../styles/footer.css";
import WhatsApp from "../../img/BlockContacts/wtsp.svg";
import Tg from "../../img/Footer/tg.svg";
import Vk from "../../img/Footer/vk.svg";
import Avito from "../../img/Footer/avito.svg";

const Footer = () => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <footerCSS.Footer $pad={sectionPadding}>
                <footerCSS.FooterContainer>
                    <footerCSS.Point href="https://wa.me/79202465919?text=Здравствуйте!%20Сориентируйте,%20пожалуйста,%20по%20ассортименту%20вашего%20магазина." target="_blank" rel="noopener noreferrer">
                        <footerCSS.PointImg style={{ width: '100%'}}><img src={WhatsApp} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                    <footerCSS.Point href="https://t.me/autoplaynk" target="_blank" rel="noopener noreferrer">
                        <footerCSS.PointInfo>
                            Мы в Telegram:
                        </footerCSS.PointInfo>
                        <footerCSS.PointImg><img src={Tg} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                    <footerCSS.Point href="https://vk.com/autoplaynvkz?from=groups" target="_blank" rel="noopener noreferrer">
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