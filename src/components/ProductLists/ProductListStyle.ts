import styled from "styled-components";
import { FontSize1, FontSize2 } from "../../styles/GlobalStyles";

export const ProductListContainer = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 2rem 1fr;
    & > h2 {
        text-align: center;
        font-size: ${FontSize2};
    }
`;
export const ProductWrap = styled.div`
    display: grid;
    align-content: start;
    gap: 10px;
    padding: 7px;
    font-size: ${FontSize1};
    overflow: auto;
    & > p {
        text-align: center;
        font-weight: bold;
    }
`;