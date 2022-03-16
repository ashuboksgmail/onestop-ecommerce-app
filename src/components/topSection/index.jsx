import React from 'react'
import styled from 'styled-components'


const BannerContainer = styled.div`
 position: absolute;
 
 width: 30%;
 height: 25%;
 background-color: black;
 display: flex;
 flex-direction: column;
 align-items: center
`;

const Heading = styled.h1`

color: white;
font-weight: 700;
font-size: 30px
`;

const Paragraph = styled.p`

color: white;
font-weight: 700;
font-size: 20px;
`;

export function TopSection(){
   return(
   <BannerContainer>
       <Heading>Welcome New Astronauts</Heading>
       <Paragraph>Its time for your first flight to the moon. Best of luck.</Paragraph>
       <Paragraph>Use the 3D map in the background to browse around the surroundings.</Paragraph>
   </BannerContainer>
   )
}