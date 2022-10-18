import React, {Suspense} from 'react'

import TextSection from './components/textSection';
import {Canvas} from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Navbar from './components/Navbar';
import Tv from './components/Tv';
import Carousel from './components/Carousel'
import Chat from './components/Chat';

import Iphone13 from './components/Iphone13';
import Pooltable from './components/Pooltable';
import Guitar from './components/Guitar';
import Shoes from './components/Shoes';
import Laptop from './components/Laptop';
import ad from './images/ad.png';

const Wrapper = styled.div`
position: relative;
//background: #1f1144;
height: auto;
font-family: Verdana;


canvas{
    background-color: #f5f5f5;
    height: 400px;
}

canvas:hover {
  background-color: #dfdfdf;
}

`;


const Title = styled.h1`
color:black;
font-style: normal;
font-weight: bold;
font-size: 20px;
`;

const Description = styled.p`
  max-width: 240px;
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 130%;
  margin: 0 auto;
`;

const Body = styled.div`

position: relative;
display:grid;
align-items: left;


`;

const ProductContainer = styled.div`

position: relative;
display:flex;
flex-wrap: wrap;
width:100%;

`;

const Catatory = styled.div`
position: relative;
padding: 20px 20px 20px;


`;

const Advertisment = styled.div`
padding: 35px 1px 35px;
width: 99%;



img{
  max-width: 100%;
        max-height: 100%;
        display: block;
}

`;



const ProductDesc = styled.div`

position: relative;
text-align: center;
display: grid;

`;

const ProductOne = styled.div`

position: relative;
width: 24%;
display: grid;
height: 300px;
padding: 0.5%;

`;


const ProductTwo = styled.div`

position: relative;
width: 24%;
display: grid;
height: 300px;
padding: 0.5%;

`;

const ProductThree = styled.div`
//background-color: blue;
position: relative;
width: 24%;
display: grid;
height: 300px;
padding: 0.5%;
`;

const ProductFour = styled.div`
//background-color: blue;
position: relative;
width: 24%;
display: grid;
height: 300px;
padding: 0.5%;
`;

const ProductFive = styled.div`
//background-color: yellow;
position: relative;
width: 24%;
display: grid;
height: 300px;
padding: 0.5%;
`;

const ProductSix = styled.div`
//background-color: green;
position: relative;
width: 24%;
display: grid;
height: 300px;
padding: 0.5%;
`;


function App() {
  
  return (
    <Wrapper> 
     
        <Navbar/>
      
        <TextSection/>
        <Catatory>
        <Title>Electronics → </Title>
        </Catatory>
        <Body>
        <ProductContainer>
          <ProductOne>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Tv/>
        
            </Suspense>
           </Canvas>   
           <ProductDesc>
            <Title>Oldschool Nintendo </Title>
            <Description>$140</Description>
            </ProductDesc> 
            
           
            </ProductOne>

            <ProductTwo>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

          

            </Suspense>
           </Canvas> 

           <ProductDesc>
            <Title>iPhone 13 Pro</Title>
            <Description>$700</Description>
            </ProductDesc> 
            
           </ProductTwo>


            <ProductThree>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

        

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Pool Table</Title>
            <Description>$400</Description>
            </ProductDesc> 
            
           </ProductThree>

           <ProductFour>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

          

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>1969 Stratocaster</Title>
            <Description>$4000</Description>
            </ProductDesc> 
            
           </ProductFour>

           </ProductContainer>

           <Advertisment>
            <img src= {ad} alt="ad"/>
           </Advertisment>

           <Catatory>
        <Title> Accessories → </Title>
        </Catatory>

           <ProductContainer>

           <ProductFive>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>Nike Airmax Monster</Title>
            <Description>$200</Description>
            </ProductDesc> 
            
           </ProductFive>

           <ProductSix>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={3}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>SMart tV</Title>
            <Description>this is the product</Description>
            </ProductDesc> 
            
           </ProductSix>

           <ProductSix>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={3}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            
            
            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>SMart tV</Title>
            <Description>this is the product</Description>
            </ProductDesc> 
            
           </ProductSix>

           <ProductSix>
           <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={3}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            

            </Suspense>
           </Canvas> 
           <ProductDesc>
            <Title>SMart tV</Title>
            <Description>this is the product</Description>
            </ProductDesc> 
            
           </ProductSix>
            

           </ProductContainer>

           
           </Body>

          <Chat/>
    </Wrapper>

  );
}

export default App