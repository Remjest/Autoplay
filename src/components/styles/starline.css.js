import styled from "styled-components";
import mainCSS from "./main.css";
import bassonCSS from "./basson.css";
import Background from "../../img/BlockStarline/starlineBack.jpg"

const starlineCSS = {
    Starline: styled(mainCSS.NewSection)`
        background: url(${Background})  center/cover no-repeat;
        flex-direction: column;
        align-items: center;
    `,
    StarlineContainer: styled(mainCSS.NewSectionContainer)`
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
        color: rgb(0,92,153);
        font-size: 58.01px;
        font-weight: 800;
        letter-spacing: 0.2rem;
        text-align: left;
        margin-bottom: 16px;
        @media (max-width: 630px) {
            margin-bottom: 12.9px;
            font-size: 26px;
        }
    `,
    SubTitle: styled(bassonCSS.SubTitle)`
        color: rgb(52,52,52);
        font-size: 37.11px;
        font-weight: 400;
        @media (max-width: 630px) {
            font-size: 16px;
        }
    `,
    Desk: styled(bassonCSS.Desk)`
        p{
            color: rgb(52,52,52);
            font-weight: 400;
        }
        @media (max-width: 900px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `,
    PointsWrapper: styled.div`
    `,
    CertificatesButton: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: rgb(255, 255, 255);
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 1.5px;
        padding: 21px;
        border-radius: 16px;
        backdrop-filter: blur(7.3px);
        -webkit-backdrop-filter: blur(7.3px);
        background: rgba(0, 0, 0, 0.34);
        img{
            margin-left: 37px;
        }
        @media (min-width: 1025px) {
            transition: all 0.2s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
            
        }
        @media (max-width: 630px) {
            padding: 13px;
            border-radius: 13.5px;
        }
    `,
    StarlineButton: styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 414px;
        color: rgb(255, 255, 255);
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 1.5px;
        padding: 21px;
        margin-top: 73px;
        border-radius: 16px;
        background:  rgb(52,52,52);
        img{
            margin-left: 37px;
        }
        @media (min-width: 1025px) {
            transition: all 0.2s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
            
        }
        @media (max-width: 900px) {
            margin-top: 33px;
        }
        @media (max-width: 630px) {
            padding: 13px;
            border-radius: 13.5px;
        }
    `,
    Certificates: styled.div`
        position: fixed;
        display: flex;
        opacity: ${props => (props.$display ? '1' : '0')};
        visibility: ${props => (props.$display ? 'visible' : 'hidden')};
        justify-content: center;
        background-color: #fff;
        top:50%;
        right: 50%;
        transform: translate(50%, -50%);
        border-radius: 16px;
        padding: 35px;
        backdrop-filter: blur(10.3px);
        -webkit-backdrop-filter: blur(10.3px);
        background: rgba(0, 0, 0, 0.55);
        z-index: 1000;
        transition: opacity 0.1s linear, visibility 0.1s linear;

        @media (max-width: 740px) {
            flex-direction: column;
            height: 70%;
            overflow: scroll;
            justify-content: start;
            padding: 18px;
            padding-top: 40px;
        }
        @media (max-width: 370px) {
            max-width: 96%;
        }
    `,
    CertificateWrap: styled.div`
        border-radius: 16px;
        background: rgba(165, 165, 165, 0.13);
        padding: 18px;
        margin: 20px;
    `,
    Certificate: styled.img`
        height: 350px;
        @media (max-width: 370px) {
            height: 300px;
        }
    `,
    Exit: styled.button`
        user-select: none;
        position: absolute;
        background-color: rgba(0,0,0,0);
        top: 23.5px;
        right: 23.5px;
        width: 25.5px;
        height: 25.5px;
        img{
            width: 100%;
        }
        @media (max-width: 740px) {
            top: 13.5px;
            right: 13.5px;
        }
    `,
    Points: styled(bassonCSS.Points)`
        margin-bottom: 33px;
    `,
    Point: styled(bassonCSS.Point)`
        @media (max-width: 530px) {
            aspect-ratio: 4 / 5;
        }
        @media (max-width: 420px) {
            aspect-ratio: 1 / 1;
        }
        @media (max-width: 340px) {
            width: 150px;
        }
    `,
    PointImg: styled(bassonCSS.PointImg)`
    `,
    PointInfo: styled(bassonCSS.PointInfo)`
    `,
    PointTitle: styled(bassonCSS.PointTitle)`
        @media (max-width: 530px) {
            font-size: 10;
        }
    `,
    PointDesk: styled(bassonCSS.PointDesk)`
        font-size: 11.53px;
        @media (max-width: 530px) {
            font-size: 9px;
        }
    `,
}

export default starlineCSS