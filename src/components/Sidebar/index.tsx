import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { BtnWrap, CloseIcon, DaftarButton, LoginButton, Menu, SidebarContainer } from './SidebarStyle'

type SidebarProps = {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
}

export default function Sidebar({ show, setShow }: SidebarProps): React.ReactElement {
  return (
    <SidebarContainer show={show}>
        <CloseIcon onClick={() => setShow(false)} />
        <Menu>
          <li onClick={() => setShow(false)}>
            <Link to={'/products'}>Products</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link to={'/'}>Services</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link to={'/'}>Account</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link to={'/'}>Others</Link>
          </li>
          <BtnWrap>
            <li onClick={() => setShow(false)}>
              <LoginButton to={'/'}>login</LoginButton>
            </li>
            <li onClick={() => setShow(false)}>
              <DaftarButton to={'/'}>register</DaftarButton>
            </li>
          </BtnWrap>
        </Menu>
    </SidebarContainer>
  )
}