import styled from "styled-components"
import Contacts from "./Components/Contacts"
import Hero from "./Components/Hero"
import Who from "./Components/Who"
import Works from "./Components/Works"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  background: url('./img/bg.jpeg');
  color: white;
`;

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  )
}

export default App
