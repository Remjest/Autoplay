import styled from "styled-components";
import mainCSS from "./main.css";

const contactsCSS = {
    Contacts: styled(mainCSS.NewSection)`
        position: relative;
        background: rgba(25, 31, 42, 1);
    `,
    ContactsTop: styled.div`
        position: absolute;
        top: 10px;
        left: 0;
    `,
    ContactsContainer: styled(mainCSS.NewSectionContainer)`
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        @media (max-width: 1340px) {
            flex-direction: column-reverse;
        }
    `,
    Title: styled(mainCSS.Title)`
        color: rgb(255, 255, 255);
        display: flex;
        margin-top: 0px;
        margin-bottom: 61px;
        @media (max-width: 920px) {
            margin-bottom: 30px;
        }
        @media (max-width: 785px) {
            margin-bottom: 15px;
        }
    `,
    Map: styled.div`
        aspect-ratio: 676 / 713;
        width: 50%;
        border-radius: 19px;
        overflow: hidden;
        @media (max-width: 1340px) {
            width: 100%;
            aspect-ratio: 2 / 1;
        }
        @media (max-width: 425px) {
            aspect-ratio: 1 / 1;
        }
    `,
    Info: styled.div`
        display: flex;
        /* background-color: #fff; */
        flex-direction: column;
        margin-right: 68px;
        @media (max-width: 1340px) {
            margin-right: 0px;
            margin-bottom: 75px;
        }
        @media (max-width: 920px) {
            margin-bottom: 35px;
        }
    `,
    PointContainer: styled.div`
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 42px;
        column-gap: 75px;
        @media (max-width: 1340px) {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 30px;
            column-gap: 30px;
        }
        @media (max-width: 785px) {
            row-gap: 10px;
            grid-template-columns: repeat(1, 1fr);
        }
        @media (max-width: 340px) {
            row-gap: 10px;
            column-gap: 30px;
        }
    `,
    Point: styled.div`
        color: rgb(255, 255, 255);
        font-size: 24.22px;
        font-weight: 150;
        line-height: 30px;
        letter-spacing: 0.2rem;
        text-align: left;
        a{
            text-decoration: none;
            color: rgb(255, 255, 255);
        }
        @media (max-width: 425px) {
            font-size: 11.97px;
            line-height: 14px;
            letter-spacing: 0.1rem;
        }
    `,
    Icons: styled.div`
        display: grid;
        width: fit-content;
        grid-template-columns: repeat(4, auto);
        column-gap: 16px;
        @media (max-width: 785px) {
            margin-top: 10px;
        }
        a{
            transition: all 0.2s ease-in-out;
        @media (min-width: 1024px) {
            &:hover{
                transform: scale(1.1);                
            }
        }
        &:active{
            transform: scale(0.8);
        }
        }
    `,
    
}

export default contactsCSS