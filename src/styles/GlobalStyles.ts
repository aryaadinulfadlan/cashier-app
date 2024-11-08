import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    *::before, *::after {
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
        background-color: #d6ecff;
        color: #000;
    }
    img, video, picture, canvas, svg {
        display: block;
        max-width: 100%;
        height: auto;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`

// 360px sd 1400px
export const headerHeight = '3rem'
export const NolKoma6to1rem = 'clamp(0.6rem, 0.4615rem + 0.6154vw, 1rem)'
export const NolKoma7toNolKoma8 = 'clamp(0.7rem, 0.6710rem + 0.1290vw, 0.8rem)'
export const NolKoma7toNolKoma85 = 'clamp(0.7rem, 0.6565rem + 0.1935vw, 0.85rem)'
export const FontSize1 = 'clamp(0.8rem, 0.7308rem + 0.3077vw, 1rem)'
export const FontSize2 = 'clamp(0.8rem, 0.6615rem + 0.6154vw, 1.2rem)'
export const FontSize3 = 'clamp(0.8rem, 0.5923rem + 0.9231vw, 1.4rem)'
export const FontSize4 = 'clamp(1rem, 0.8615rem + 0.6154vw, 1.4rem)'
export const FontSize5 = 'clamp(1rem, 0.7231rem + 1.2308vw, 1.8rem)'
export const FontSize6 = 'clamp(1.1rem, 0.7885rem + 1.3846vw, 2rem)'
export const FontSize7 = 'clamp(1.2rem, 1.0615rem + 0.6154vw, 1.6rem)'
export const FontSize8 = 'clamp(1.2rem, 1.0269rem + 0.7692vw, 1.7rem)'
export const FontSize9 = 'clamp(1.2rem, 0.9231rem + 1.2308vw, 2rem)'
export const FontSize10 = 'clamp(1.3rem, 0.9538rem + 1.5385vw, 2.3rem)'
export const FontSize11 = 'clamp(1.3rem, 0.8500rem + 2.0000vw, 2.6rem)'
export const FontSize12 = 'clamp(1.5rem, 1.3269rem + 0.7692vw, 2rem)'
export const LogoFontSize = 'clamp(1.6rem, 1.3577rem + 1.0769vw, 2.3rem)'
export const FontSize13 = 'clamp(1.8rem, 1.4538rem + 1.5385vw, 2.8rem)'

export const FontSize14 = 'clamp(1.8rem, 1.3846rem + 1.8462vw, 3rem)'
export const FontSize15 = 'clamp(2rem, 1.6538rem + 1.5385vw, 3rem)'