import styled from "styled-components";
import { FontSize1, headerHeight } from "../../styles/GlobalStyles";
import { Flexbox, FlexboxProps } from "../../styles/_mixin";

export const HeaderContainer = styled.header<FlexboxProps>`
    ${Flexbox}
    height: ${headerHeight};
    width: 100%;
    padding: 0 4vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #d6ecff;
    @media (min-width: 900px) {
        padding: 0 5vw;
    }
`
export const CashierLogo = styled.div`
    ${Flexbox}
    cursor: pointer;
    img {
        width: 1.5rem;
    }
    span {
        font-size: ${FontSize1};
        font-weight: bold;
    }
    @media (min-width: 900px) {
        img {
            width: 2rem;
        }
    }
`