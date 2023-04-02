import { motion } from "framer-motion";
import styled from "styled-components";

export const CalculatorEl = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    @media (max-width: 425px) {
        display: block;
        min-height: none;

        padding-top: 50px;
    }
`

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const Header = styled.div`
    &:not(:last-child) {
        margin-bottom: 88px;
    }

    @media (max-width: 425px) {
        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }
`

export const Interface = styled(motion.div)`
    max-width: 920px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    border-radius: 25px;

    padding: 32px 32px 32px 48px;
    display: flex;
    column-gap: 48px;
    align-items: center; 

    @media (max-width: 425px) {
        display: block;

        padding: 32px 24px;
        border-radius: 25px 25px 0px 0px;
    }
`

export const DataInputBlock = styled.div`
    flex: 0.411 0 379px; 

    @media (max-width: 425px) {
        padding: 0px 8px;
        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`
export const DataDisplay = styled.div`
    flex: 0.448 0 413px;

    background: #00474B;
    border-radius: 15px;
`