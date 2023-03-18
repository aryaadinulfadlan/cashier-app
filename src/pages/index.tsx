import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import { headerHeight } from '../styles/GlobalStyles'
import Cashier from './Cashier'
import Home from './Home'

export default function Pages(): React.ReactElement {
  return (
    <>
        <Header />
        <Page>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Cashier />} />
            </Routes>
        </Page>
    </>
  )
}

export const Page = styled.section`
    margin: 0 auto;
    position: relative;
    top: ${headerHeight};
`