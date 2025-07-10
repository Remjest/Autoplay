import styled from "styled-components";
import Background from "../../img/BlockHero/hero.png"

const heroCSS = {
    Hero: styled.section`
        position: relative;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: end;
        width: 100%;
        height: 100vh;
        padding: 140px ${props => (props.$pad)} 70px;
        background: rgb(243, 244, 241);
        background: url(${Background}) bottom center/cover no-repeat;
        @media (max-width: 768px) {
            height: 663px;
        }
    `,
    HeroTop: styled.div`
        position: absolute;
        top: 10px;
        left: 0;
    `,
    HeroContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 70%;
    `,
    InfoContainer: styled.h1`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    H1: styled.span`
        position: relative;
        display: block;
        height: 102px;
        color: rgb(255, 255, 255);
        font-size: 79.73px;
        font-weight: 600;
        line-height: 97px;
        letter-spacing: 6.5px;
        text-align: left;
        text-transform: uppercase;
        @media (max-width: 1165px) {
            height: 72px;
            font-size: 59px;
            line-height: 60px;
        }
        @media (max-width: 665px) {
            height: 42px;
            font-size: 35px;
            line-height: 35px;
            letter-spacing: 4px;
        }
    `,
    SubText: styled.span`
        position: relative;
        display: block;
        max-width: 700px;
        height: fit-content;
        color: rgb(255, 255, 255);
        font-size: 28.14px;
        font-weight: 100;
        line-height: 37px;
        letter-spacing: 3px;
        text-align: center;
        text-shadow: 0px 3.8px 3.8px rgba(0, 0, 0, 0.18);
        @media (max-width: 1300px) {
            width: 78%;
        }
        @media (max-width: 1165px) {
            width: 61%;
            font-size: 23px;
            line-height: 23px;
        }
        @media (max-width: 665px) {
            font-size: 10.47px;
            line-height: 10.5px;
            width: 90%;
        }
    `,
    HeroButton: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 487px;
        width: 60%;
        min-width: 280px;
        height: 85px;
        margin: 0 20px;
        padding: 0 5px;
        color: rgb(255, 255, 255);
        background: rgba(255, 135, 62, 1);
        border: 1.54px solid rgb(255, 135, 62);
        border-radius: 3.8px;
        cursor: pointer;
        user-select: none;
        font-size: 21.65px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.05rem;
        text-align: left;
        transition: all 0.3s ease;
        @media (min-width: 1024px) {
            &:hover{
                background: rgba(255, 135, 62, 0);
                color: rgb(243, 244, 241);
                transform: scale(1.1);
            }
        }
        &:active{
            background: rgba(255, 135, 62, 0    );
            color: rgb(243, 244, 241);
            transform: scale(0.9);
        }
        @media (max-width: 665px) {
            height: 50px;
            font-size: 12.71px;
        }
    `,
    HeroDown: styled.a`
        height: 40px;
        position: absolute;
        display: flex;
        align-items: end;
        bottom: 12px;
        animation: letDown 2s cubic-bezier(.52,0,.27,2) infinite both;
        img{
            width: 100%;
        }
        @media (max-width: 425px) {
            width: 40px;
        }
        @keyframes letDown {
            0%{
                bottom: 12px;
            }
            50%{
                bottom: 18px;
            }
            60%{
                bottom: 12px;
            }
            70%{
                bottom: 18px;
            }
            80%{
                bottom: 12px;
            }
            100%{
                bottom: 12px;
            }
        }
    `
}

export default heroCSS