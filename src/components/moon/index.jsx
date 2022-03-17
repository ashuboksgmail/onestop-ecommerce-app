import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MoonColorMap from '../../assets/textures/moon_color.jpg'

import { TextureLoader } from 'three'



export function Moon(props){

    const [ mooncolorMap] = useLoader(TextureLoader, [ MoonColorMap])

    
    const moonRef = useRef();

    useFrame(({clock}) =>{
        const elaspedTime = clock.getElapsedTime();
        
        moonRef.current.rotation.y = elaspedTime / 8;
    });

    return (
    <>
    {/* <ambientLight intensity = {1 } /> */}
    <pointLight color='#f6f3ea' position={[4,2,6]} intensity={1.2}/>

    <mesh ref = {moonRef} position={[2,0,2]}>
        <sphereGeometry args={[0.6, 32, 32]}/>
       
        <meshStandardMaterial 
        map = {mooncolorMap} 
        metalness={0.4} 
        roughness={0.7}/>
        <OrbitControls 
        enableZoom={true} 
        enablePan={true}
        enableRotate={true} 
        zoomSpeed={0.5} 
        panSpeed={0.5} 
        rotateSpeed={0.4} 
        /> 
    </mesh>

    </>
    );
}