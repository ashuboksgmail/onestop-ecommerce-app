import React from 'react'
import styled from 'styled-components'
import Header from '../header/Header';
import Nav from '../nav/Nav';
import About from '../about/About';
import Experience from '../experience/Experience';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';

const BannerContainer = styled.div`
 position: absolute;
 z-index:99;
 width: auto;
 height: auto;

 display: flex;
 flex-direction: column;
 
`;



export function TopSection(){
   return(
   <BannerContainer>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
   </BannerContainer>
   )
}