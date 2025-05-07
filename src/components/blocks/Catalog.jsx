import React, { forwardRef, useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { useSelector } from "react-redux"
import catalogCSS from "../styles/catalog.css";
import SliderItem from "../shared/SliderItem";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "../styles/Sliders.css";
import Avito from "../../img/BlockCatalog/Avito.png";

const importAll = (r) => r.keys().map(r);
const Recorders = importAll(require.context("../../img/BlockCatalog/Recorders", false, /\.(png|jpe?g|svg)$/));
const Speakers = importAll(require.context("../../img/BlockCatalog/Speakers", false, /\.(png|jpe?g|svg)$/));
const Cameras = importAll(require.context("../../img/BlockCatalog/Cameras", false, /\.(png|jpe?g|svg)$/));
const Amp = importAll(require.context("../../img/BlockCatalog/Amp", false, /\.(png|jpe?g|svg)$/));
const Other = importAll(require.context("../../img/BlockCatalog/Other", false, /\.(png|jpe?g|svg)$/));

const Catalog = forwardRef((props,ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const [activeButton, setActiveButton] = useState([1, 0, 0, 0, 0]);
    const slidesRerView = useSelector(state => (state.initial.clientMode)) === 'mobile' ? '1' : "";
    const _plugins = [
        new Arrow({
            parentEl: document.querySelector(".slider-container"), // Укажите ваш класс
            moveByViewportSize: true
        })
    ];

    useEffect(() => {
        console.log(activeButton);
    }, [activeButton]);


    const categories = [
        { id: 0, name: "Магнитолы", images: Recorders},
        { id: 1, name: "Колонки", images: Speakers },
        { id: 2, name: "Камеры заднего вида", images: Cameras },
        { id: 3, name: "Усилители", images: Amp },
        { id: 4, name: "Прочее", images: Other }
    ];

    return (
        <>
            <catalogCSS.Catalog $pad={sectionPadding}>
                <catalogCSS.CatalogContainer>
                    <catalogCSS.Title ref={ref} id="catalog">Каталог наших товаров</catalogCSS.Title>
                    <catalogCSS.Categories>
                        <catalogCSS.CategoriesContainer>
                            {categories.map((category) => (
                                <catalogCSS.CategoriesPoint
                                    key={category.id}
                                    $isActive={activeButton[category.id]}
                                    onClick={() =>
                                    setActiveButton(activeButton.map((_, i) => (i === category.id ? 1 : 0)))
                                    }
                                >
                                    {category.name}
                                </catalogCSS.CategoriesPoint>
                            ))}
                        </catalogCSS.CategoriesContainer>
                    </catalogCSS.Categories>
                    <catalogCSS.SliderContainer>
                        <Flicking plugins={_plugins}
                                bound='true'
                                align="prev"
                                duration='500'
                                // panelsPerView={slidesRerView}
                                >
                            {categories.flatMap((category) => 
                                activeButton[category.id] 
                                    ? category.images.map((img, i) => (
                                        <SliderItem key={`${category.id}-${i}`} item={img} />
                                    ))
                                    : []
                            )}
                            <SliderItem item={Avito} href="https://www.avito.ru/brands/novokuz"/>
                            <ViewportSlot>
                                <span className="flicking-arrow-prev is-thin is-circle sliderArrow"></span>
                                <span className="flicking-arrow-next is-thin is-circle sliderArrow"></span>
                            </ViewportSlot>
                        </Flicking>
                            
                    </catalogCSS.SliderContainer>
                </catalogCSS.CatalogContainer>
            </catalogCSS.Catalog>
        </>
    );
});

export default Catalog