import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import contactsCSS from "../styles/contacts.css";
import Vk from "../../img/BlockContacts/vk.svg";
import Tg from "../../img/BlockContacts/tg.svg";
import WhatsApp from "../../img/BlockContacts/wtsp.svg";
import Avito from "../../img/BlockContacts/avito.svg";


const Contacts = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const center = [53.768194,87.122477];

    return (
        <>
            <contactsCSS.Contacts $pad={sectionPadding}>
                <contactsCSS.ContactsTop ref={ref} id="contacts"/>
                <contactsCSS.ContactsContainer>
                    <contactsCSS.Map>
                        <YMaps query={{ apikey: "0e41cf21-dcbb-4f07-aad8-3cb488036754" }}>
                            <Map
                                defaultState={{
                                    center: center,
                                    zoom: 18,
                                    controls: [],
                                }}
                                width="100%"
                                height="100%"
                                modules={["control.ZoomControl"]}
                                options={{
                                    yandexMapDisablePoiInteractivity: true,
                                    suppressMapOpenBlock: true,
                                    scrollZoom: false,
                                    theme: "dark",
                                }}
                            >
                                <Placemark
                                    geometry={center}
                                    options={{
                                        preset: "islands#orangeDotIcon",
                                    }}
                                />
                            </Map>
                        </YMaps>
                    </contactsCSS.Map>
                    <contactsCSS.Info>
                        <contactsCSS.Title>Контакты</contactsCSS.Title>
                        <contactsCSS.PointContainer>
                            <contactsCSS.Point>
                                <span>Телефон: </span>
                                <a href="tel:89202465919">+7 (920) 246-59-19</a>
                            </contactsCSS.Point>
                            <contactsCSS.Point>
                                <a href="https://yandex.ru/maps/237/novokuznetsk/house/ulitsa_pokryshkina_22a/bE4YdwVhT0QAQFtpfXt3eXtiYA==/?ll=87.121616%2C53.768714&z=16" target="_blank" rel="noopener noreferrer">Адрес: г. Новокузнецк, ул. Покрышкина, 22А, ТЦ "Ностальжи"</a>
                            </contactsCSS.Point>
                            <contactsCSS.Point>
                                <span>Время работы: 10:00-18:00</span>
                            </contactsCSS.Point>
                            <contactsCSS.Icons>
                                <a href="https://vk.com/autoplaynvkz?from=groups" target="_blank" rel="noopener noreferrer">
                                    <img src={Vk} alt="" />
                                </a>
                                <a href="https://t.me/autoplaynk" target="_blank" rel="noopener noreferrer">
                                    <img src={Tg} alt="" />
                                </a>
                                <a href="https://wa.me/79202465919?text=Здравствуйте!%20Сориентируйте,%20пожалуйста,%20по%20ассортименту%20вашего%20магазина." target="_blank" rel="noopener noreferrer">
                                    <img src={WhatsApp} alt="" />
                                </a>
                                <a href="https://www.avito.ru/brands/novokuz" target="_blank" rel="noopener noreferrer">
                                    <img src={Avito} alt="" />
                                </a>
                            </contactsCSS.Icons>
                        </contactsCSS.PointContainer>
                    </contactsCSS.Info>
                </contactsCSS.ContactsContainer>
            </contactsCSS.Contacts>
        </>
    );
});

export default Contacts