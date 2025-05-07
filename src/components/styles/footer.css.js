import styled from "styled-components";


const footerCSS = {
    Footer: styled.section`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 136px;
        margin-top: auto;
        background: rgba(10, 12, 16, 1);
        padding: 18px ${props => (props.$pad)};
        @media (max-width: 575px) {
            height: 70px;
        }
    `,
    FooterContainer: styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        max-width: 1440px;
    `,
    Point: styled.a`
        display: flex;
        padding: 0 7px;
        min-height: 34px;
        width: 37.5%;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgb(243, 244, 241);
        cursor: pointer;
        img{
            transition: all 0.2s ease-in-out;
        }
        @media (min-width: 1024px) {
            &:hover{
                img{
                    transform: scale(1.1);
                }
                
            }
        }
        &:active{
            img{
                transform: scale(0.8);
            }
        }
        &:last-child{
            width: 17.5%;
            border-right: none;
            padding-right: 0;
            @media (max-width: 1024px) {
                width: 33.3%;
            }
        }
        &:first-child{
            width: 17.5%;
            padding-left: 0;
            @media (max-width: 1024px) {
                width: 33.3%;
            }
        }
       
    `,
    PointImg: styled.div`
        width:fit-content;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: clamp(0.2rem, 2.25vw, 3rem);
        img{
            height: 50px;
        }
        &:first-child{
            margin: 0;
        }
        @media (max-width: 1120px) {
            img{
                height: 50px;
            }
        }
        @media (max-width: 1024px) {
            margin: 0;
        }
        @media (max-width: 575px) {
            img{
                height: 20px;
            }
        }
    `,
    PointInfo: styled.div`
        display: block;
        color: rgb(255, 255, 255);
        font-size: clamp(0.6rem, 1.1vw, 1rem);
        
        font-weight: 250;
        line-height: 140.86%;
        letter-spacing: 0.04rem;
        text-align: left;
        white-space: nowrap;
        a{
            text-decoration: none;
            color: rgb(255, 255, 255);
        }
        @media (max-width: 1024px) {
            display: none;
        }
        @media (max-width: 575px) {
            font-size: 6px;
        }
    `
    
}

export default footerCSS