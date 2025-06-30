import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux"
import starlineCSS from "../styles/starline.css";
import Arrow from "../../img/BlockStarline/Arrow.svg"
import One from "../../img/BlockStarline/1.svg"
import Two from "../../img/BlockStarline/2.svg"
import Three from "../../img/BlockStarline/3.svg"
import Four from "../../img/BlockStarline/4.svg"
import Five from "../../img/BlockStarline/5.svg"
import Six from "../../img/BlockStarline/6.svg"
import Cert1 from "../../img/BlockStarline/Cert1.jpg"
import Cert2 from "../../img/BlockStarline/Cert2.jpg"
import Exit from "../../img/BlockStarline/Exit.svg"


const StarLine = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const [isShowCertificates, setIsShowCertificates] = useState(false);

    return (
        <>
            <starlineCSS.Starline $pad={sectionPadding}>
                <a href="https://store.starline.ru/" target="_blank" rel="noopener noreferrer"><starlineCSS.Title ref={ref} id="starline">StarLine</starlineCSS.Title></a>
                <starlineCSS.SubTitle>Эксперт в защите вашего автомобиля</starlineCSS.SubTitle>
                <starlineCSS.StarlineContainer>
                    <starlineCSS.Desk>
                        <div>
                            <p>Официально сертифицированные охранные комплексы StarLine обеспечивают интеллектуальную защиту, соответствие российским стандартам и надёжность в любых климатических и дорожных условиях.</p>
                            <p>Установку осуществляют сертифицированные специалисты с подтверждённой квалификацией.</p>
                        </div>
                            <starlineCSS.StarlineButton href="https://wa.me/79202465919?text=Здравствуйте!%20Сориентируйте,%20пожалуйста,%20по%20наличию%20и%20возможности%20установки%20продукции%20StarLine." target="_blank" rel="noopener noreferrer">
                                <span>Узнать стоимость</span>
                                <img src={Arrow} alt="" style={{transform: 'rotate(90deg)'}} />
                            </starlineCSS.StarlineButton>
                    </starlineCSS.Desk>
                    <starlineCSS.PointsWrapper>
                        <starlineCSS.Points>
                            <starlineCSS.Point>
                                <starlineCSS.PointImg>
                                    <img src={One} alt="" />
                                </starlineCSS.PointImg>
                                <starlineCSS.PointInfo>
                                    <starlineCSS.PointTitle>
                                        Умный автозапуск
                                    </starlineCSS.PointTitle>
                                    <starlineCSS.PointDesk>
                                        запуск двигателя с телефона или брелока
                                    </starlineCSS.PointDesk>
                                </starlineCSS.PointInfo>
                            </starlineCSS.Point>
                            <starlineCSS.Point>
                                <starlineCSS.PointImg>
                                    <img src={Two} alt="" />
                                </starlineCSS.PointImg>
                                <starlineCSS.PointInfo>
                                    <starlineCSS.PointTitle>
                                        Контроль через приложение
                                    </starlineCSS.PointTitle>
                                    <starlineCSS.PointDesk>
                                        управление и мониторинг в реальном времени
                                    </starlineCSS.PointDesk>
                                </starlineCSS.PointInfo>
                            </starlineCSS.Point>
                            <starlineCSS.Point>
                                <starlineCSS.PointImg>
                                    <img src={Three} alt="" />
                                </starlineCSS.PointImg>
                                <starlineCSS.PointInfo>
                                    <starlineCSS.PointTitle>
                                        Диалоговая защита от взлома
                                    </starlineCSS.PointTitle>
                                    <starlineCSS.PointDesk>
                                        уникальные алгоритмы кодирования
                                    </starlineCSS.PointDesk>
                                </starlineCSS.PointInfo>
                            </starlineCSS.Point>
                            <starlineCSS.Point>
                                <starlineCSS.PointImg>
                                    <img src={Four} alt="" />
                                </starlineCSS.PointImg>
                                <starlineCSS.PointInfo>
                                    <starlineCSS.PointTitle>
                                        GPS + ГЛОНАСС трекинг
                                    </starlineCSS.PointTitle>
                                    <starlineCSS.PointDesk>
                                        отслеживание местоположения автомобиля
                                    </starlineCSS.PointDesk>
                                </starlineCSS.PointInfo>
                            </starlineCSS.Point>
                            <starlineCSS.Point>
                                <starlineCSS.PointImg>
                                    <img src={Five} alt="" />
                                </starlineCSS.PointImg>
                                <starlineCSS.PointInfo>
                                    <starlineCSS.PointTitle>
                                        Экономия энергии
                                    </starlineCSS.PointTitle>
                                    <starlineCSS.PointDesk>
                                        низкое энергопотреблние и защита аккумулятора
                                    </starlineCSS.PointDesk>
                                </starlineCSS.PointInfo>
                            </starlineCSS.Point>
                            <starlineCSS.Point>
                                <starlineCSS.PointImg>
                                    <img src={Six} alt="" />
                                </starlineCSS.PointImg>
                                <starlineCSS.PointInfo>
                                    <starlineCSS.PointTitle>
                                        Работа при -40°C
                                    </starlineCSS.PointTitle>
                                    <starlineCSS.PointDesk>
                                        оптимизировано для сурового климата
                                    </starlineCSS.PointDesk>
                                </starlineCSS.PointInfo>
                            </starlineCSS.Point>
                        </starlineCSS.Points>
                        <starlineCSS.CertificatesButton onClick={() => {setIsShowCertificates(!isShowCertificates)}}>
                            <span>Наши сертификаты</span>
                            <img src={Arrow} alt="" />
                        </starlineCSS.CertificatesButton>
                        <starlineCSS.Certificates $display={isShowCertificates}>
                            <starlineCSS.CertificateWrap>
                                <starlineCSS.Certificate src={Cert1} alt="" ></starlineCSS.Certificate>
                            </starlineCSS.CertificateWrap>
                            <starlineCSS.CertificateWrap>
                                <starlineCSS.Certificate src={Cert2} alt="" ></starlineCSS.Certificate>
                            </starlineCSS.CertificateWrap>
                            <starlineCSS.Exit onClick={() => { setIsShowCertificates(!isShowCertificates) }}>
                                <img src={Exit} alt="" />
                            </starlineCSS.Exit>
                        </starlineCSS.Certificates>
                    </starlineCSS.PointsWrapper>
                </starlineCSS.StarlineContainer>
            </starlineCSS.Starline>
        </>
    );
});

export default StarLine