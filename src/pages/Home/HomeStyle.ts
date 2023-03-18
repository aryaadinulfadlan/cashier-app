import styled from "styled-components";
import { DaftarButton, LoginButton } from "../../components/Sidebar/SidebarStyle";
import { FontSize1, FontSize10, headerHeight, LogoFontSize } from "../../styles/GlobalStyles";
import { Flexbox, FlexboxProps } from "../../styles/_mixin";

export const HomeContainer = styled.div`
    height: calc(100vh - ${headerHeight});
    display: grid;
    gap: 2rem;
    grid-template-rows: 1fr 1.5fr;
    align-items: center;
    position: relative;
    padding: 0 1rem;
    @media (min-width: 800px) {
        grid-template-rows: initial;
        grid-template-columns: 1.5fr 1fr;
        justify-content: space-between;
        justify-items: space-between;
    }
    @media (min-width: 1200px) {
        padding: 0 5vw;
        grid-template-columns: 1fr 1fr;
    }
`
export const DescWrap = styled.div`
    display: grid;
    gap: 1rem;
    align-self: end;
    @media (min-width: 800px) {
        align-self: initial;
    }
    @media (min-width: 1100px) {
        max-width: 700px;
    }
    & > h3 {
        font-size: ${FontSize10};
        font-weight: bolder;
        width: 80%;
    }
`
export const BtnBannerWrap = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 1rem;
`
export const TryButton = styled(DaftarButton)`
    padding: 5px 1rem;
    text-transform: capitalize;
    font-size: ${FontSize1};
`
export const DemoButton = styled(LoginButton)`
    padding: 5px 1rem;
    text-transform: capitalize;
    font-size: ${FontSize1};
`
export const ImgWrap = styled.div<FlexboxProps>`
    align-self: start;
    ${Flexbox}
    @media (min-width: 800px) {
        align-self: initial;
    }
    img {
        object-fit: cover;
        width: 100%;
        max-width: 350px;
        @media (min-width: 800px) {
            max-width: 1300px;
        }
    }
`
export const WaIconWrapper = styled.div<FlexboxProps>`
    width: 3rem;
    height: 3rem;
    background-color: #389fe5;
    border-radius: 50%;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    ${Flexbox}
    cursor: pointer;
    @media (min-width: 800px) {
        width: 3.5rem;
        height: 3.5rem;
        bottom: 2rem;
        right: 2rem;
    }
    @media (min-width: 1200px) {
        width: 4rem;
        height: 4rem;
        bottom: 3rem;
        right: 3rem;
    }
    svg {
        color: white;
        font-size: ${LogoFontSize};
    }
`