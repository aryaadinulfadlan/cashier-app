import styled from "styled-components";
import { FontSize1 } from "../../styles/GlobalStyles";
import { Flexbox, FlexboxProps } from "../../styles/_mixin";

export const ProductItemContainer = styled.div`
    background-color: #fafafa;
    padding: 5px 10px 5px 5px;
    border-radius: 6px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
    font-size: ${FontSize1};
    display: grid;
    grid-template-columns: 1fr auto;
    @media (min-width: 600px) {
        padding: 10px 1rem;
    }
`;
export const ProductDesc = styled.div`
    display: grid;
    grid-template-columns: 3rem auto;
    align-items: center;
    gap: 10px;
    @media (min-width: 600px) {
        gap: 1rem;
    }
`;
export const ImgWrap = styled.div`
    height: 3rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const Desc = styled.div``;
export const ProductCountWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 10px;
    width: 120px;
    & > svg {
        font-size: 1.2rem;
        cursor: pointer;
    }
`;
export const ProductCount = styled.div`
    display: grid;
    gap: 5px;
    justify-items: center;
    align-items: center;
    p {
        font-weight: bold;
    }
`;
export const BtnWrap = styled.div<FlexboxProps>`
    ${Flexbox}
    font-size: ${FontSize1};
    button {
        border-radius: 50%;
        border: none;
        outline: none;
        background-color: #5972cf;
        color: white;
        font-size: 1rem;
        padding: 3px;
        cursor: pointer;
    }
`;