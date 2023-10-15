import { Canvas } from '@react-three/fiber';
import Chair from './Chair.jsx';
import { OrbitControls, Stage } from '@react-three/drei';

const WebDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Chair/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign;