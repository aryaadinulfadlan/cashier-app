import styled from "styled-components";
import { FontSize1, FontSize3, headerHeight } from "../../styles/GlobalStyles";
import { Flexbox, FlexboxProps } from "../../styles/_mixin";

export const CashierContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    height: calc(100vh - ${headerHeight});
    display: grid;
    grid-template-rows: 1fr 50px;
`;
export const Content = styled.div`
    background-color: hsl(232, 70%, 93%);
    padding: 1rem 2vw;
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    overflow: auto;
    gap: 2rem;
`;
export const TopContent = styled.div`
    display: grid;
    gap: 5px;
    & > h1 {
        font-size: ${FontSize3};
        text-align: center;
    }
    & > h3 {
        font-size: ${FontSize1};
        text-align: center;
    }
    & > input {
        border: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        width: 100%;
        max-width: 400px;
        padding: 5px 1rem;
        background-color: transparent;
        margin: 0 auto;
        display: block;
        border-radius: 5px;
        transition: border 500ms ease, box-shadow 500ms ease;
        font-size: ${FontSize1};
        &:focus {
            border: 1px solid #7e9fe6;
            box-shadow: 0px 0px 0 2px rgb(165, 186, 232);
        }
    }
`;
export const TotalPrice = styled.div<FlexboxProps>`
    background-color: aquamarine;
    padding: 0 2vw;
    font-size: ${FontSize1};
    ${Flexbox}
    & > h3:last-child {
        color: blue;
    }
`;