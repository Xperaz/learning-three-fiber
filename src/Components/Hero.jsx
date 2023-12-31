import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1200px;// 1400
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

  @media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px){
    text-align: center;
    margin:0px 10px;
  }
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px){
    text-align: center;
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 100px;
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

//

const Right = styled.div`
position: relative;
flex: 3;

@media only screen and (max-width: 768px){
    flex: 1;
    width: 100%;
  }

`;
const Img = styled.img`
width: 700px;
height: 520px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px){
  width: 300px;
  height: 300px;
  }

@keyframes animate {
  to {
    transform: translateY(30px);
  }
}
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Description>we enjoy crreating delightful, human-centered digital experiences.</Description>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas >
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial 
                  color="#db198e"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
          </Canvas>

          <Img src="./img/moon.png"></Img>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;