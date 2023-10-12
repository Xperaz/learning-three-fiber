import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  outline: none;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

//

const Right = styled.div`
  flex: 1;
`;


const Contacts = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Me</Title>
            <Input type="text" placeholder="Name"></Input>
            <Input type="email" placeholder="Email"></Input>
            <TextArea placeholder="Write your message" rows={10} cols={10}></TextArea>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right> </Right>
      </Container>
    </Section>
  )
}

export default Contacts