import React   from 'react';
import history from '../../history'
import styled from 'styled-components';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <nav className="layer">
        <ul>
          <li onClick={() => history.push('/todoApp')} >todoApp</li>
          <li onClick={() => history.push('/practiceStyle')} >style練習</li>
          <li onClick={() => history.push('/style1')} >button</li>
          <li onClick={() => history.push('/menu')} >menu練習</li>
        </ul>
      </nav>
      <section className="home page layer">
        <h1>Hover to <br/>reveal navigation</h1>
      </section>
    </div>
  )
}

const Page = styled.div`
  font: 100%/1.4 Unica One;
  text-transform: uppercase;
  background: #222;
  color: whitesmoke;
  height: 100vh;
  overflow: hidden;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform .4s;
  transform: 
          perspective(800px) 
          scale(1) 
          translateX(0)
          rotateY(0);
  transform-style: preserve-3d;
`;

const NavUl = styled.ul`
  font-size: larger;
  line-height: 2;
  padding-left: 66.66%;
  text-transform: uppercase;
  color: whitesmoke;
`;

const NavUlLi = styled.li`
  cursor: pointer;
`;