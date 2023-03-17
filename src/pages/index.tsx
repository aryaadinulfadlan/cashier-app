import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { headerHeight } from '../styles/GlobalStyles'
import Cashier from './Cashier'
import Home from './Home'

export default function Pages(): React.ReactElement {
  return (
    <>
        {/* header here */}
        <Page>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cashier' element={<Cashier />} />
            </Routes>
        </Page>
    </>
  )
}

export const Page = styled.section`
    padding: 0 2vw;
    margin: 0 auto;
    position: relative;
    top: ${headerHeight};
    @media (min-width: 900px) {
        padding: 0 1vw;
    }
`