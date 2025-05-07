import styled from "styled-components";
import mainCSS from "./main.css";

const catalogCSS = {
    Catalog: styled(mainCSS.NewSection)`
        background-color: rgb(243, 244, 241);
    `,
    CatalogContainer: styled(mainCSS.NewSectionContainer)`
    `,
    Title: styled(mainCSS.Title)`
    `,  
    Categories: styled.div`
        position: relative;
        width: 100%;
        margin-top: 62.6px;
        overflow: hidden;
        &::before{
            content: "";
            position: absolute;
            right: 0;
            display: block;
            width: 100%;
            height: calc(100%);
            pointer-events: none;
            background: #ffffff;
            background: linear-gradient(90deg,rgba(255, 255, 255, 0) 73%, rgba(245, 245, 245, 1) 100%);
            z-index: 500;
        }
        @media (max-width: 768px) {
            margin-top: 30px;
        }
    `,
    CategoriesContainer: styled.div`
        width: 100%;
        display: flex;
        gap: 75px;
        justify-content: space-between;
        padding: 5px;
        overflow-x: scroll;
        white-space: nowrap;
        z-index: 200;
        padding-right: 140px;
        scrollbar-width: none;  /* Для Firefox */
        &::-webkit-scrollbar {
            display: none;      /* Для Chrome/Safari */
        }
        @media (max-width: 768px) {
            gap:25px;
            padding-right: 50px;
        }
    `,
    CategoriesPoint: styled.button`
        background:none;
        padding-bottom: 9px;
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: 275;
        line-height: 21px;
        letter-spacing: 0.05rem;
        text-align: left;
        border-bottom: ${props => (props.$isActive ? '0.5px solid black' : 'none')};
        transform : ${props => (props.$isActive ? 'scale(1.1)' : 'none')};
        transition: all 0.2s ease-in-out;
        @media (max-width: 768px) {
            font-size: 15px;
            line-height: 16px;
            padding-bottom: 5px;
        }
    `,
    SliderContainer: styled(mainCSS.Slider)`
        height: 390px;
        width: 100%;
        /* padding: 0 400px; */
        /* overflow: visible; */
        /* @media (max-width: 768px) {
            height: 252px;
        } */
    `,
    Slide: styled.a`
        display: flex;
        flex-direction: column;
        align-items: center;
        aspect-ratio: 7/10;
        height: 390px;
        overflow: hidden;
        margin: 0 14px;
        border-radius: 25px;
        backdrop-filter: blur(4.5px);
        -webkit-backdrop-filter: blur(4.5px);
        
        /* border: 2px solid rgba(40, 45, 48, 0.55); */
        /* background: ; */
        img {
            height: 100%;
            pointer-events: none;
        }
    `,
}

export default catalogCSS