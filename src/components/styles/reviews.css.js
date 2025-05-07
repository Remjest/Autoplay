import styled from "styled-components";
import mainCSS from "./main.css";

const reviewsCSS = {
    Services: styled(mainCSS.NewSection)`
        background: rgb(255, 255, 255);
    `,
    ServicesContainer: styled(mainCSS.NewSectionContainer)`
        overflow: hidden;
    `,
    Title: styled(mainCSS.Title)``,
    SliderContainer: styled(mainCSS.Slider)`
        height: 362px;
        overflow: visible;
        @media (max-width: 768px) {
            height: 252px;
        }
    `,
    Slide: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 27px;
        aspect-ratio: 1/1;
        height: 362px;
        margin: 0 36px;
        border-radius: 15px;
        backdrop-filter: blur(4.5px);
        -webkit-backdrop-filter: blur(4.5px);
        background: rgba(40, 45, 48, 0.55);
        font-size: 120px;
        color: #fff;
        @media (max-width: 768px) {
            padding: 29px 19px;
            height: 252px;
        }
    `,
    SliderTop: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 26px;
    `,
    SlideTitle: styled.div`
        color: rgb(255, 255, 255);
        font-size: 24.36px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.05rem;
        @media (max-width: 768px) {
            font-size: 17px;
            line-height: 21px;
        }
    `,
    SlideText: styled.div`
        color: rgb(255, 255, 255);
        font-size: 16.87px;
        font-weight: 275;
        line-height: 21px;
        letter-spacing: 0.05rem;
        @media (max-width: 768px) {
            font-size: 11.8px;
            line-height: 14px;
        }
    `,
    SlideImg: styled.div`
        width: 48px;
        height: 48px;
        img {
            width: 48px;
            height: 48px;
        }
        @media (max-width: 768px) {
            width: 28px;
            height: 28px;
            img {
                width: 28px;
                height: 28px;
            }
        }
    `,
    Reviews: styled.div`
        width: 100%;
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: 100px;
        row-gap: 80px;
        justify-items: center; 
        @media (max-width: 1000px) {
            grid-template-columns: repeat(1, 1fr);
        }
        @media (max-width: 610px) {
            margin-top: 30px;
            row-gap: 30px;  
        }
    `,
    Review: styled.div`
        display: flex;
        justify-content: space-between;
        @media (max-width: 1000px) {
            width: 100%;
        }
        @media (max-width: 610px) {
            max-width: 400px; 
        }
    `,
    RewiewInfo: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 9px;
    `,
    RewiewDesk: styled.div`
        color: rgb(0, 0, 0);
        margin-bottom: 32px;
        font-size: 18.41px;
        font-weight: 100;
        line-height: 22px;
        letter-spacing: 0.04rem;
        img{
            height: 18px;
        }
        @media (max-width: 610px) {
            margin-bottom: 10px;
            font-size: 10.66px;
            line-height: 13px;
            img{
                height: 11px;
            }
        }
    `,
    ReviewAvatar: styled.div`
        display: flex;
        align-items: center;
        img{
            height: 109px;
        }
        @media (max-width: 610px) {
            img{
                height: 35px;
            }
        }
    `,
    ReviewName: styled.div`
        color: rgb(0, 0, 0);
        font-size: 21.12px;
        font-weight: 275;
        line-height: 26px;
        letter-spacing: 0.04rem;
        @media (max-width: 610px) {
            font-size: 12.23px;
            line-height: 13px;
        }
    `,
}

export default reviewsCSS