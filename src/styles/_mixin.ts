import { css } from "styled-components";

export type FlexboxProps = {
    justify?: string, 
    align?: string, 
    direction?: string, 
    gap?: string,
}
export const Flexbox = ({ justify = 'initial', align = 'center', direction = 'row', gap = '10px' }) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: ${gap};
`;