import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CashierLogo, HeaderContainer } from './HeaderStyle'
import Logo from '../../assets/img/logo.png'
import BarButton from '../BarButton'
import Sidebar from '../Sidebar'

export default function Header(): React.ReactElement {
    const [show, setShow] = useState<boolean>(false)
    const navigate = useNavigate()

    const toggleShow = () => setShow(prev => !prev)
    return (
      <HeaderContainer>
        <CashierLogo onClick={() => navigate('/')}>
            <img src={Logo} alt="Cashier Logo" />
            <span>Cashier App</span>
        </CashierLogo>
        <BarButton toggleShow={toggleShow} />
        <Sidebar show={show} setShow={setShow} />
      </HeaderContainer>
    )
}
