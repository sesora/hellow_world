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
        <ButtonShadow label="buttonだよ！"></ButtonShadow>
      </div>
      <Rotate>&lt; 💅 ">">&gt;</Rotate>
      <Button><Link to="/">戻る</Link></Button>
      <div>
        <H1Underline color="pink">アンダーライン</H1Underline>
        <H1UnderlineDouble color="blue">下線 (二重線)</H1UnderlineDouble>
        <H1UnderlineTwotone color="green">下線 (2トーンカラー)</H1UnderlineTwotone>
        <H1Marker color="orange">下線 (マーカー)</H1Marker>
        <H1VerticalLine color="purple">マーク (縦ライン)</H1VerticalLine>
        <PUnderLineAnime color="silver">アンダーライン(アニメ)</PUnderLineAnime>
      </div>
      <StyleList></StyleList>

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

const H1Underline = styled.h1`
  padding-bottom: 0.3em;
  border-bottom: solid 2px ${props => props.color ? props.color : 'black'};
  color: ${props => props.color ? props.color : 'black'};
  `;

const H1UnderlineDouble = styled.h1`
  position: relative;
  color: ${props => props.color ? props.color : 'black'};
  padding-bottom: 0.5em;
  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7px;
    box-sizing: border-box;
    border-top: 3px solid ${props => props.color ? props.color : 'black'};
    border-bottom: 1px solid ${props => props.color ? props.color : 'black'};
  }
`;

const H1UnderlineTwotone = styled.h1`
  position: relative;
  color: ${props => props.color ? props.color : 'black'};
  padding-bottom: 0.5em;
  border-bottom: 4px solid #DDD;
  &::after {
    position: absolute;
    content: " ";
    border-bottom: solid 4px ${props => props.color ? props.color : '#446689'};
    bottom: -4px;
    width:10%;
    display: block;
  }
`;

const H1Marker = styled.h1`
  color: ${props => props.color ? props.color : 'black'};
  padding: 0.2em;
  background: linear-gradient(transparent 50%, ${props => props.marker ? props.marker : '#fff100'} 100%);
`;

const H1VerticalLine = styled.h1`
  color: ${props => props.color ? props.color : 'black'};
  position: relative;
  padding-left: 0.7em;
  &::after {
     position: absolute;
     top: 50%;
     left:0;
     transform:translateY(-50%);
     content: '';
     width: 5px;
     height:1em;
     background-color: ${props => props.color ? props.color : '#446689'};
  }
`;

const PUnderLineAnime = styled.p`
  color: ${props => props.color ? props.color : 'black'};
  position: relative;
  display: inline-block;
  font-size: 2em;

  &::before,
  &::after {
    position: absolute;
    top: 1.3em;
    content: "";
    display: inline-block;
    width: 0;
    height: 2px; 
    background: linear-gradient(to right,dodgerblue, crimson, yellowgreen, orange, purple, red);
    transition: .5s;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
  &:hover::before,
  &:hover::after {
    width: 50%;
  }
`;

const StyleList = () => {
  const Ul = styled.ul`
    color: #668ad8;/*文字色*/
    border: dashed 2px #668ad8;/*破線 太さ 色*/
    background: #f1f8ff; /*背景色*/
    padding: 0.5em 0.5em 0.5em 2em;
    
    transition: border-color 0.3s, color 0.3s;
    transition: background-color 1s, color 0.3s;
    transition: color 0.3s, color 0.3s;
    &:hover {
      border-color: pink;
      background: RGB(252,212,27,0.2);
      color:orange;
    }
  `;
  const Li = styled.li`
    line-height: 1.5;
    padding: 0.5em 0;
  `;
  var list = ["html", "css", "javascript"]
  return (
    <Ul>
      {list.map(function(item, i){
        return (
          <Li>{item}</Li>
        );
      })}
    </Ul>
  );
};

const ButtonShadow = (props) => {
  const AButton = styled.a`
    display: block;
    cursor: pointer;
    width: 300px;
    /* margin: 0 auto; */
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #20b2aa;
    box-shadow: 0 6px 0 #047c71, 0 12px 0 rgba(0,0,0,0.2);
    transition: color 0.3s, background-color 0.3s, box-shadow 0.3s, transform 0.3s;
    &:hover {
      background-color: #3cc4bd;
      box-shadow: 0 3px 0 #12978d, 0 6px 0px rgba(0,0,0,0.2);
      transform: translateY(3px);
    }
    &:active {
      color: #ddd;
      background-color: #12978d;
      box-shadow: 0 0 0 #047c71, 0 0 0px rgba(0,0,0,0.2);
      transform: translateY(6px);
      transition-duration: 0.1s;
    }
  `;

  return (
    <p><AButton>{props.label}</AButton></p>
  )
}