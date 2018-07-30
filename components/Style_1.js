import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export default function CssTest() {
  return (
    <React.Fragment>
      <Wrapper>
        <Title>Styled-Commponents</Title>
      </Wrapper>
      <div>
        <Input placeholder="@mxstbr" type="text" />
        <Input value="@geelen" type="text" />
        <Input2 placeholder="A small text input" size="1em" />
        <Input2 placeholder="A bigger text input" size="2em" />
      </div>
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <TomatoButton>Normal</TomatoButton>
        <TomatoButton primary>Primary</TomatoButton>
        <LinkA>Normal</LinkA>
        <LinkA primary>Normal</LinkA>
      </div>
      <Rotate>&lt; 💅 ">">&gt;</Rotate>
      <Button><Link to="/">戻る</Link></Button>
    </React.Fragment>
  );
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = Button.extend`
  background: ${props => props.primary ? 'tomato' : 'white'};
  color: ${props => props.primary ? 'white' : 'tomato'};
  border: 2px solid tomato;
`;

const LinkA = Button.withComponent('a')

const Input2 = styled.input.attrs({
  // we can define static props
  type: 'password',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;