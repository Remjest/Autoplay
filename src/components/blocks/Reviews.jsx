import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import reviewsCSS from "../styles/reviews.css";

import Roma from "../../img/BlockReviews/roma.png";
import Nasta from "../../img/BlockReviews/nasta.png";
import Slava from "../../img/BlockReviews/slava.png";
import Sergey from "../../img/BlockReviews/sergey.png";



const Reviews = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    

    return (
        <>  
            <reviewsCSS.Services $pad={sectionPadding}>
                <reviewsCSS.ServicesContainer>
                    <reviewsCSS.Title ref={ref} id="services">Отзывы наших клиентов</reviewsCSS.Title>
                    <reviewsCSS.Reviews>
                        <reviewsCSS.Review>
                            <reviewsCSS.ReviewAvatar>
                                <img src={Roma} alt="" />
                            </reviewsCSS.ReviewAvatar>
                            <reviewsCSS.RewiewInfo>
                                <reviewsCSS.RewiewDesk>
                                    <span>Продавец молодец! Всё рассказал, всё показал! Качеством доволен! Буду рекомендовать друзьям и близким!!! 🚗💨</span>
                                </reviewsCSS.RewiewDesk>
                                <reviewsCSS.ReviewName>
                                    <span>Роман</span>
                                </reviewsCSS.ReviewName>
                            </reviewsCSS.RewiewInfo>
                        </reviewsCSS.Review>
                        <reviewsCSS.Review>
                            <reviewsCSS.ReviewAvatar>
                                <img src={Sergey} alt="" />
                            </reviewsCSS.ReviewAvatar>
                            <reviewsCSS.RewiewInfo>
                                <reviewsCSS.RewiewDesk>
                                    <span>Долго присматривался, посмотрел всех продавцов, сделали скидку, пришёл и приобрел, сразу установили.</span>
                                </reviewsCSS.RewiewDesk>
                                <reviewsCSS.ReviewName>
                                    <span>Сергей Послухаев</span>
                                </reviewsCSS.ReviewName>
                            </reviewsCSS.RewiewInfo>
                        </reviewsCSS.Review>
                        <reviewsCSS.Review>
                            <reviewsCSS.ReviewAvatar>
                                <img src={Slava} alt="" />
                            </reviewsCSS.ReviewAvatar>
                            <reviewsCSS.RewiewInfo>
                                <reviewsCSS.RewiewDesk>
                                    <span>Обслуживание в магазине было на высоком уровне. Также порадовало быстрое оформление заказа и доставка товара. 👍</span>
                                </reviewsCSS.RewiewDesk>
                                <reviewsCSS.ReviewName>
                                    <span>Вячеслав</span>
                                </reviewsCSS.ReviewName>
                            </reviewsCSS.RewiewInfo>
                        </reviewsCSS.Review>
                        <reviewsCSS.Review>
                            <reviewsCSS.ReviewAvatar>
                                <img src={Nasta} alt="" />
                            </reviewsCSS.ReviewAvatar>
                            <reviewsCSS.RewiewInfo>
                                <reviewsCSS.RewiewDesk>
                                    <span>Очень отзывчивый продавец,всё обьяснил,показал! Побольше бы таких ребят🤗</span>
                                </reviewsCSS.RewiewDesk>
                                <reviewsCSS.ReviewName>
                                    <span>Анастасия Козлик</span>
                                </reviewsCSS.ReviewName>
                            </reviewsCSS.RewiewInfo>
                        </reviewsCSS.Review>
                    </reviewsCSS.Reviews>
                </reviewsCSS.ServicesContainer>
            </reviewsCSS.Services>
        </>
    );
});

export default Reviews