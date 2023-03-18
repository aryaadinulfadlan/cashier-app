import React from 'react'
import { BtnBannerWrap, DemoButton, DescWrap, HomeContainer, ImgWrap, TryButton, WaIconWrapper } from './HomeStyle'
import { BsWhatsapp } from "react-icons/bs";
import Banner from '../../assets/img/banner.png'

export default function Home(): React.ReactElement {
  return (
    <HomeContainer>
      <DescWrap>
        <h3>A CLASSROOM FOR EVERY STUDENT</h3>
        <p>AT PT VISI PRIMA NUSANTARA WE BELIEVE EVERY STUDENT IS ENTITLED TO HIGH QUALITY ACCESS TO EDUCATION. OUR DIGITAL CLASSROOM SOLUTION TRANSFORMS CLASSROOMS INTO AN ACTIVE LEARNING ENVIRONMENT.</p>
        <BtnBannerWrap>
          <TryButton to={'/products'}>try it free!</TryButton>
          <DemoButton to={'/products'}>App Demo</DemoButton>
        </BtnBannerWrap>
      </DescWrap>
      <ImgWrap justify='center'>
        <img src={Banner} alt="Jubelio Banner" />
      </ImgWrap>
      <WaIconWrapper justify='center'>
        <BsWhatsapp />
      </WaIconWrapper>  
    </HomeContainer>
  )
}
