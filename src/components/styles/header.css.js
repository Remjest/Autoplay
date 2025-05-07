import styled from "styled-components";

const headerCSS = {
    Header: styled.section`
        position: fixed;
        top:0;
        display: flex;
        justify-content: center;
        width: 103%;
        height: 86px;
        padding: 0px ${props => (props.$pad)};
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px); /*Для Safari */
        box-shadow: 0 5px  5px rgba(0, 0, 0, 0.9);
        z-index: 1000;
    `,
    HeaderContainer: styled.div`
        display: flex;
        width: 100%;
        max-width: 1440px;
        height: 86px;
        justify-content: space-between;
        align-items: center;
    `,
    LogoContainer: styled.div`
        width: 180px;
        height: 58.2px;
        user-select: none;
        cursor: pointer;
        img{
            height: 100%;
        }
    `,
    MenuDesktopContainer: styled.div`
        display: flex;
        width: ${(770 / 1440) * 100}%;
        max-width: 770px;
        height: 27px;
        justify-content: space-between;
    `,
    MenuMobileContainer: styled.div`
        box-sizing: border-box;
        position: fixed;
        height: calc(100vh - 86px);
        width: 75%;
        margin-top: 86px;
        max-width: 240px;
        background: rgba(20, 20, 20, 0.95);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px); /* Для Safari */
        overflow-y: auto;
        z-index: 1000;
        right: ${props => (props.$transform ? '0px' : '-240px')};
        transition: right 400ms ease-in-out;
        &::-webkit-scrollbar {
            width: 0;
        }
    `,
    MenuMobileContainerWrap: styled.div`
            flex-direction: column;
    `,
    BurgerButton: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        height: 36px;
        width: 36px;
        @media (min-width: 993px) { 
            display: none;
        }
    `,
    BurgerBar: styled.div`
        height: 2px;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 1px;
        transition: transform 400ms ease-in-out;
        
        &:first-child{
            transform-origin: center;
            transform: ${props => (props.$transform ? 'translateY(17px) rotate(-225deg) scaleX(1.4142)' : '0')};
        } 
        &:last-child{
            transform-origin: center;
            transform: ${props => (props.$transform ? 'translateY(-17px) rotate(225deg) scaleX(1.4142)' : '0')};
        }
    `,
    BurgerBarMid: styled.div`
        height: 2px;
        width: ${props => (props.$transform ? '0%' : '80%')};
        background-color:  rgb(255, 255, 255);
        border-radius: 1px;
        transition: width 400ms cubic-bezier(.52,0,.27,2);
    `,
    MenuButton: styled.a`
        font-family: Montserrat;
        position: relative;
        display: flex;
        width: fit-content;
        height: 27px;
        cursor: pointer;
        color: rgb(255, 255, 255);
        user-select: none;
        align-items: center;
        border-bottom: 1px solid rgb(255, 255, 255);
        border-color: ${props => props.$focus ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'};
        transition: all 0.3s linear;
        font-size: 14.32px;
        font-weight:  ${props => props.$focus ? '400' : '150'};
        line-height: 17px;
        letter-spacing: 0.08em;
        text-align: left;
        @media (max-width: 992px) {
            height: 46px;
            width: 100%;
            font-size: clamp(1.5rem, 0.85vw, 1.5rem);
            padding-left: 18px;
            margin-bottom: 15px;
            border: none;
            background-color: ${props => props.$focus? 'rgba(38, 38, 38, 0.6)' : 'rgba(38, 38, 38, 0)'};
            border-radius: 0px;
            transition: all 300ms ease-in-out, border-color 0.3s linear;
            &:first-child{
                margin-top: 50px; 
            }
            &:last-child{
                margin-bottom: 0px; 
            }
            &:before{
                /* position: absolute;
                content: '';
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: #000;
                top:50%;
                left: 9px;
                transform: translate(50%, -50%); */
            }
            &:active{
                background-color: rgba(194, 196, 191, 0.8)
            }
        }
    `,
}

export default headerCSS