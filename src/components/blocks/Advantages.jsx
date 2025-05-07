import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import advantagesCSS from "../styles/advantages.css";
import One from "../../img/BlockAdvantages/1.png";
import Two from "../../img/BlockAdvantages/2.png";
import Three from "../../img/BlockAdvantages/3.png";
import Four from "../../img/BlockAdvantages/4.png";
import Five from "../../img/BlockAdvantages/5.png";
import Six from "../../img/BlockAdvantages/6.png";

const Advantages = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));


    return (
        <>
            <advantagesCSS.Advantages $pad={sectionPadding}>
                <advantagesCSS.AdvantagesContainer>
                    <advantagesCSS.Title ref={ref} id="advantages">Наши преимущества</advantagesCSS.Title>
                    <advantagesCSS.BlocksContainer>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={One} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Широкий ассортимент</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>От освременных аудиосистем до стильных гаджетов - у нас есть все, чтобы сделать вашу поездку комфортной и приятной</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Two} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Качество и надежность</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Мы работаем только с проверенными брендами, которые заслужили доверие многих покупателей</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Three} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Гарантия на весь товар</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Dы можете быть уверены долговечности и надежноси наших продуктов</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Four} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Профессиональная установка</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Наши партнеры - это опытные специалисти,которые знают, как добиться идеального звучания в любом автомобиле</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Five} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Индивидуальный подход</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Мы поможем подобрать решение, которое идеально подойдет именно вам и вашему авто</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Six} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Работа с оптовыми покупателями</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Специальные условия для тех, кто покупает больше</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                    </advantagesCSS.BlocksContainer>
                </advantagesCSS.AdvantagesContainer>
            </advantagesCSS.Advantages>
        </>
    );
});

export default Advantages