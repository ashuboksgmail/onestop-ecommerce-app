import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import MarsMap from '../../assets/textures/Mars.png'
import { OrbitControls } from '@react-three/drei'
import MarsNormalMap from '../../assets/textures/MarsNormal.png'
import MarsCloudMap from '../../assets/textures/MarsClouds.png'

import { TextureLoader } from 'three'

import * as THREE from 'three';

export function Mars(props){

    const [colorMap, normalMap, cloudMap] = useLoader(TextureLoader, [MarsMap, MarsNormalMap, MarsCloudMap])

    const marsRef = useRef();
    const cloudRef = useRef();
    

    useFrame(({clock}) =>{
        const elaspedTime = clock.getElapsedTime();
        marsRef.current.rotation.y = elaspedTime / 6;
        cloudRef.current.rotation.y = elaspedTime / 6;
       
    });



    return (
    <>
    {/* <ambientLight intensity = {1 } /> */}
    <pointLight color='#f6f3ea' position={[2,2,22]} intensity={1.2}/>

       
     

        <mesh ref ={cloudRef} position={[-2,0,18]}>
        <sphereGeometry args={[0.805, 32, 32]}/>
        <meshPhongMaterial 
        map = {cloudMap} 
        
        opacity={0.8} 
        depthwrite={true} 
        transparent={true} 
        side={THREE.DoubleSide}/>
        </mesh> 

    
    <mesh ref = {marsRef} position={[-2,0,18]}>
        <sphereGeometry args={[0.8, 32, 32]}/>
        
        <meshStandardMaterial 
        map = {colorMap} 
        normalMap = {normalMap} 
        metalness={0.4} 
        roughness={0.7}/>
        <OrbitControls 
        enableZoom={true} 
        enablePan={true}
        enableRotate={true} 
        zoomSpeed={0.5} 
        panSpeed={0.5} 
        rotateSpeed={0.4} /> 
    </mesh>

    </>
    );
}