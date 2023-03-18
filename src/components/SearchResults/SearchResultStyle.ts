import styled from "styled-components";
import { FontSize1 } from "../../styles/GlobalStyles";
import { Flexbox, FlexboxProps } from "../../styles/_mixin";

export const ResultsContainer = styled.div`
    overflow: auto;
    display: grid;
    align-content: start;
    gap: 10px;
    padding: 5px 7px;
    font-size: ${FontSize1};
    & > p {
        text-align: center;
        font-weight: bold;
    }
`;
export const ResultItem = styled.div<FlexboxProps>`
    padding: 0 12px;
    border-radius: 6px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
    height: 3rem;
    font-size: ${FontSize1};
    background-color: white;
    ${Flexbox}
    button {
        background-color: #4851d4;
        color: white;
        border: none;
        outline: none;
        padding: 2px 10px;
        border-radius: 4px;
        cursor: pointer;
    }
`;