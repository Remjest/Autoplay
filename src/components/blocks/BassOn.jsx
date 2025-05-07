import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import bassonCSS from "../styles/basson.css";
import Logo from "../../img/BlockBasson/BassLogo.png"
import One from "../../img/BlockBasson/1.png"
import Two from "../../img/BlockBasson/2.png"
import Three from "../../img/BlockBasson/3.png"
import Four from "../../img/BlockBasson/4.png"
import Five from "../../img/BlockBasson/5.png"
import Six from "../../img/BlockBasson/6.png"

const BassOn = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));


    return (
        <>
            <bassonCSS.Basson $pad={sectionPadding}>
                <a href="https://basson-auto.ru/?ysclid=mablz20vfx158981364" target="_blank" rel="noopener noreferrer"><bassonCSS.Title ref={ref} id="basson"><img src={Logo} alt="" /></bassonCSS.Title></a>
                <bassonCSS.SubTitle>Наш надежный партнер!</bassonCSS.SubTitle>
                <bassonCSS.BassonContainer>
                    <bassonCSS.Desk>
                        Сертифицированные в РФ андроид-магнитолы обеспечивают надежность, безопасность и соответствие российским стандартам. Магнитолы BASSON адаптированы для работы в любых климатических и дорожных условиях, гарантируя долгий эксплуатационный срок.
                    </bassonCSS.Desk>
                    <bassonCSS.Points>
                        <bassonCSS.Point>
                            <bassonCSS.PointImg>
                                <img src={One} alt="" />
                            </bassonCSS.PointImg>
                            <bassonCSS.PointInfo>
                                <bassonCSS.PointTitle>
                                    Wi-Fi интернет
                                </bassonCSS.PointTitle>
                                <bassonCSS.PointDesk>
                                    беспрерывный доступ в интернет
                                </bassonCSS.PointDesk>
                            </bassonCSS.PointInfo>
                        </bassonCSS.Point>
                        <bassonCSS.Point>
                            <bassonCSS.PointImg>
                                <img src={Two} alt="" />
                            </bassonCSS.PointImg>
                            <bassonCSS.PointInfo>
                                <bassonCSS.PointTitle>
                                    Высокоточное радио
                                </bassonCSS.PointTitle>
                                <bassonCSS.PointDesk>
                                    широкий выбор станций
                                </bassonCSS.PointDesk>
                            </bassonCSS.PointInfo>
                        </bassonCSS.Point>
                        <bassonCSS.Point>
                            <bassonCSS.PointImg>
                                <img src={Three} alt="" />
                            </bassonCSS.PointImg>
                            <bassonCSS.PointInfo>
                                <bassonCSS.PointTitle>
                                    QLED экран
                                </bassonCSS.PointTitle>
                                <bassonCSS.PointDesk>
                                    красочный дисплей FullHD
                                </bassonCSS.PointDesk>
                            </bassonCSS.PointInfo>
                        </bassonCSS.Point>
                        <bassonCSS.Point>
                            <bassonCSS.PointImg>
                                <img src={Four} alt="" />
                            </bassonCSS.PointImg>
                            <bassonCSS.PointInfo>
                                <bassonCSS.PointTitle>
                                    Голосовой помошник
                                </bassonCSS.PointTitle>
                                <bassonCSS.PointDesk>
                                    обширный набор команд
                                </bassonCSS.PointDesk>
                            </bassonCSS.PointInfo>
                        </bassonCSS.Point>
                        <bassonCSS.Point>
                            <bassonCSS.PointImg>
                                <img src={Five} alt="" />
                            </bassonCSS.PointImg>
                            <bassonCSS.PointInfo>
                                <bassonCSS.PointTitle>
                                    Встроенные лаунчеры
                                </bassonCSS.PointTitle>
                                <bassonCSS.PointDesk>
                                    3 темы на выбор
                                </bassonCSS.PointDesk>
                            </bassonCSS.PointInfo>
                        </bassonCSS.Point>
                        <bassonCSS.Point>
                            <bassonCSS.PointImg>
                                <img src={Six} alt="" />
                            </bassonCSS.PointImg>
                            <bassonCSS.PointInfo>
                                <bassonCSS.PointTitle>
                                    Кулер охлаждения
                                </bassonCSS.PointTitle>
                                <bassonCSS.PointDesk>
                                    защита от перегрева
                                </bassonCSS.PointDesk>
                            </bassonCSS.PointInfo>
                        </bassonCSS.Point>
                    </bassonCSS.Points>
                </bassonCSS.BassonContainer>
            </bassonCSS.Basson>
        </>
    );
});

export default BassOn