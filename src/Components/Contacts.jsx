import styled from "styled-components"
import MapChart from "./Map";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

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
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jy3zkm7', 'template_x2azkrf', form.current, 'pfdXJ__J9Iqyzq6Qu')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact Me</Title>
            <Input name="name" placeholder="Name"></Input>
            <Input name="email" placeholder="Email"></Input>
            <TextArea name="message" placeholder="Write your message" rows={10} cols={10}></TextArea>
            <Button type="submit">Send</Button>
            {success && "Your message has been sent, You will get back soon."}
          </Form>
        </Left>

        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  )
}

export default Contacts