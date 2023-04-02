import styled from "styled-components";

export const TipContainer = styled.div`
    &:not(:last-child) {
        margin-bottom: 40px
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
            margin-bottom: 32px
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 14px;
    row-gap: 22px;

    @media(max-width: 425px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        column-gap: 16px;
        row-gap: 16px;
    }
`

export const ButtonTip = styled.button<{ selected: boolean }>`
    background: ${props => (props.selected ? "#26C2AE" : "#00474B")};
    color: ${props => (props.selected ? "#00474B" : "#FFFFFF")};
    line-height: 36px;
    text-align: center;

    padding: 6px 0px;
    border-radius: 5px;

    transition: all 0.1s ease 0s;

    &:active {
        color: #00474B;
        background: #9FE8DF;
    }
`

export const Input = styled.input.attrs(props => ({
    type: 'number',
    placeholder: 'Custom',
    min: 0,
    max: 100,
}))`
    max-width: 117px;

    line-height: 36px;
    text-align: right;
    color: #00474B;

    padding: 6px 13px;
    background-color: #F3F9FA;
    border-radius: 5px;

    &::placeholder {
        color:#547878;
        text-align: center;
    }

    &:focus {
        outline: 2px solid #26C2AE;
    }

    @media(max-width: 425px) {
        max-width: 172.5px;
    }
`