import styled from "styled-components";

export const InputContainer = styled.div`
    &:not(:last-child) {
        margin-bottom: 40px
    }

    position: relative;

    @media(max-width: 425px) {
        &:not(:last-child) {
            margin-bottom: 32px
        }
    }
`

export const Title = styled.h6`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 6px;
    color: #5E7A7D;
    display: block;
`

export const Alert = styled.h6<{ zero: boolean }>`
    opacity: ${props => (props.zero ? 1 : 0)};

    transition: opacity 0.1s ease 0s;

    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #E17052;

    position: absolute;
    top: 0;
    right: 0;
`

export const Wrapper = styled.div`
    position: relative;
`

export const Input = styled.input.attrs(props => ({
    type: 'number',
    placeholder: 0,
    min: 0
}))`
    width: 100%;

    line-height: 36px;
    text-align: right;
    color:#00474B;

    padding: 6px 17px 6px 47px;
    background-color: #F3F9FA;
    border-radius: 5px;

    &::placeholder {
        color:inherit;
        opacity: 0.35;
    }

    &:focus {
        outline: 2px solid #26C2AE;
    }

    ${props => props.zero && `
        outline: 2px solid #E17052;

        &:focus {
            outline: 2px solid #E17052;
        }
    `}
`

export const Img = styled.img`
    position: absolute;
    top: 50%;
    left: 19px;
    transform: translateY(-50%);
`