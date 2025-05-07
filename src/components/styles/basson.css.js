import styled from "styled-components";
import mainCSS from "./main.css";
import Background from "../../img/BlockBasson/bassonBack.png"

const bassonCSS = {
    Basson: styled(mainCSS.NewSection)`
        background: url(${Background}) bottom center/cover no-repeat;
        flex-direction: column;
        align-items: center;
    `,
    BassonContainer: styled(mainCSS.NewSectionContainer)`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 69px;
        margin-bottom: 87px;
        @media (max-width: 900px) {
            flex-direction: column;
        }
        @media (max-width: 630px) {
            margin-top: 25px;
        }
    `,
    Title: styled.div`
        margin-bottom: 16px;
        img{
            height: 100%;
        }
        @media (max-width: 630px) {
            margin-bottom: 12.9px;
            height: 55.5px;
        }
    `,
    SubTitle: styled.div`
        color: rgb(255, 255, 255);
        font-size: 23.75px;
        font-weight: 150;
        line-height: 29px;
        letter-spacing: 0.04rem;
        text-align: center;
        @media (max-width: 630px) {
            font-size: 16.3px;
            line-height: 18px;
        }
    `,
    Desk: styled.div`
    /* background-color: red; */
        max-width: 50%;
        margin-right: 20px;
        color: rgb(255, 255, 255);
        font-style: italic;
        font-size: 30.16px;
        font-weight: 150;
        line-height: 37px;
        letter-spacing: 0.05rem;
        text-align: left;
        @media (max-width: 900px) {
            margin-right: 0px;
            max-width: 100%;
            font-size: 25px;
            text-align: center;
        }
        @media (max-width: 630px) {
            font-size: 16.8px;
            line-height: 18px;
        }
    `,
    Points: styled.div`
    /* background-color: #fff; */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 11px;
        column-gap: 21px;
        @media (max-width: 1250px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
            margin-top: 40px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            column-gap: 8px;
        }
        @media (max-width: 420px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
    `,
    Point: styled.div`
        display: flex;
        max-width: 190px;
        aspect-ratio: 1 / 1;
        flex-direction: column;
        justify-content: space-between;
        padding: 21px;
        border-radius: 25px;
        backdrop-filter: blur(7.3px);
        -webkit-backdrop-filter: blur(7.3px);
        background: rgba(0, 0, 0, 0.34);
        @media (min-width: 1025px) {
            transition: all 0.2s ease-in-out;
            &:hover{
                transform: scale(1.1);
            }
            
        }
        @media (max-width: 630px) {
            padding: 13px;
            border-radius: 17px;
        }
    `,
    PointImg: styled.div`
        img{
            height: 100%;
        }
        @media (max-width: 460px) {
            height: 28px;
        }
        @media (max-width: 420px) {
            height: 40px;
        }
    `,
    PointInfo: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
    PointTitle: styled.div`
        margin-bottom: 10px;
        color: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 375;
        line-height: 20px;
        letter-spacing: 0.05rem;
        text-align: left;
        @media (max-width: 630px) {
            font-size: 13px;
            line-height: 15px;
        }
        @media (max-width: 420px) {
            font-size: 15px;
            line-height: 17px;
        }
    `,
    PointDesk: styled.div`
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 200;
        line-height: 14px;
        letter-spacing: 0.05rem;
        text-align: left;
        @media (max-width: 630px) {
            font-size: 9px;
            line-height: 11px;
        }
        @media (max-width: 420px) {
            font-size: 11px;
            line-height: 13px;
        }
    `,
}

export default bassonCSS