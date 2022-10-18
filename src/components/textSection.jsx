import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
max-width: auto;
position: relative;
text-align: left;
margin: 0 auto;
display: grid;
gap:20px;
padding: 70px 20px 20px;

`;

const Title = styled.div`
color: black;
font-style: normal;
font-weight: bold;
font-size: 32px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 130%;
  margin: 0 auto;
`;

const TextSection = () =>{
    return(
        <Wrapper>
        <Title>Welcome to the Metaverse store</Title>
        <Description>
           
        </Description>
        
        </Wrapper>
    )
}

export default TextSection;