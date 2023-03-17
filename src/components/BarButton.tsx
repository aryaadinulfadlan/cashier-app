import React from 'react'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";

type Props = {
    toggleShow: () => void
}
export default function BarButton({ toggleShow }: Props): React.ReactElement {
  return (
    <BarWrapper>
        <FaBars onClick={toggleShow} />
    </BarWrapper>
  )
}

const BarWrapper = styled.div`
    cursor: pointer;
    & > svg {
        font-size: 1.2rem;
    }
    @media (min-width: 900px) {
        display: none;
    }
`