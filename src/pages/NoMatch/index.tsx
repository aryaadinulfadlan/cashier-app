import React from 'react'
import styled from 'styled-components'
import { FontSize6 } from '../../styles/GlobalStyles'

export default function NoMatch(): React.ReactElement {
  return (
    <NoMatchPage>
        <h1>No Matched Route (404)</h1>
    </NoMatchPage>
  )
}
const NoMatchPage = styled.div`
    position: relative;
    top: 5rem;
    text-align: center;
    h1 {
        font-size: ${FontSize6};
    }
`
