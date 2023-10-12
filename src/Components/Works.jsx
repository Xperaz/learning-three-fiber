import styled from "styled-components";

const data = [
  "Web Design",
  "Developement",
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
  width: 1400px;
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
  font-size: 90px;
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

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
                <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works;