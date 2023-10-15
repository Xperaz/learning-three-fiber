import { useState } from "react";
import styled from "styled-components";
import Development from "./3d_Shapes/Development.jsx";
import ProductDesign from "./3d_Shapes/ProductDesign.jsx";
import WebDesign from "./3d_Shapes/WebDesign.jsx";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;// 1400
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  `;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &:after {
      animation: textMove 0.6s linear both;
    }

    @keyframes textMove {
      to{
        width: 100%;
      }
    }
  }
`;


const Right = styled.div`
  flex: 1;
`;


const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
                <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {(work === "Web Design") ? <WebDesign /> 
          : (work === "Development") ? <Development /> 
          : <ProductDesign /> 
          }
        </Right>
      </Container>
    </Section>
  )
}

export default Works;