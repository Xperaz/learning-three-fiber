import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  
`;

const Title = styled.h1`
  font-size: 74px;
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
`;

const Button = styled.button`
  width: 120px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
        </Left>
        <Right>
          <Title>Think Outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Description>a creative group of designers with a passion for the arts.</Description>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;