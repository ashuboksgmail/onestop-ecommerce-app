import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg'
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthCloudMap from '../../assets/textures/8k_earth_clouds.jpg'

import { TextureLoader } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three';

export function Earth(props){

    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap])

    const earthRef = useRef();
    const cloudRef = useRef();
    

    useFrame(({clock}) =>{
        const elaspedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elaspedTime / 6;
        cloudRef.current.rotation.y = elaspedTime / 6;
       
    });



    return (
    <>
    {/* <ambientLight intensity = {1 } /> */}
    <pointLight color='#f6f3ea' position={[3,1,6]} intensity={1.2}/>

        <Stars radius={300} depth={60} count={10000} factor={9} saturation ={0} fade={true}/>

     

        <mesh ref ={cloudRef} position={[-2,0,2]}>
        <sphereGeometry args={[1.005, 32, 32]}/>
        <meshPhongMaterial 
        map = {cloudMap} 
        
        opacity={0.4} 
        depthwrite={true} 
        transparent={true} 
        side={THREE.DoubleSide}/>
        </mesh> 

    
    <mesh ref = {earthRef} position={[-2,0,2]}>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhongMaterial specularMap = {specularMap}/>
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