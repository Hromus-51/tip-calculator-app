import styled from "styled-components";

export const ResultContainer = styled.div`
    background: #00474B;
    border-radius: 15px;

    padding: 40px;

    @media(max-width: 425px) {
        padding: 37px 24px 24px;
    }
`

export const SumContainer = styled.div`
    &:not(:last-child) {
        margin-bottom: 122px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 32px;
        }
    }
`

export const AmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5px;

    &:not(:last-child) {
        margin-bottom: 25px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 20px;
        }
    }
`

export const Title = styled.h5`
    font-size: 16px;
    line-height: 24px;
    color:#FFFFFF;
`

export const Subtitle = styled.h6`
    font-size: 13px;
    line-height: 19px;
    color: #7F9D9F;
`
export const TitleBlock = styled.div``

export const Sum = styled.div<{ children: string }>`
    font-size: ${({ children }) => (children.length > 6 ? "35px" : "48px")};
    font-weight: 700;
    line-height: 71px;
    letter-spacing: -1px;
    text-align: right;
    color:#26C2AE;
    
    @media(max-width: 425px) {
        font-size: ${({ children }) => (children.length > 6 ? "24px" : "32px")};
        line-height: ${({ children }) => (children.length > 6 ? "35px" : "47px")};
    }
`;

export const ButtonReset = styled.button<{ reset: boolean }>`
    background: ${props => (props.reset ? "#26C2AE" : "#0D686D")};
    color: ${props => (props.reset ? "#00474B" : "rgba(0, 71, 75, 0.35)")};
    
    width: 100%;

    border-radius: 5px;
    padding: 9px;

    font-family: Space Mono;
    font-size: 20px;
    line-height: 30px;
    text-align: center;

    transition: all 0.1s ease 0s;

    ${props => props.reset && `
        &:active {
            background: #9FE8DF;
            color:#00474B;
    
            transition: all 0.1s ease 0s;
        }
    `}
`