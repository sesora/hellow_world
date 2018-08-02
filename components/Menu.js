import React, {Component} from 'react';
import styled from 'styled-components';
import history from '../history'

export default function Menu() {

  return (
    <React.Fragment>
      <Button　onClick={()=> history.push('/') }>戻る</Button>
      <div>
        <AcordionMenu/>
      </div>
    </React.Fragment>
  )
}

const AcordionMenu = () => {
  return (
    <ul id="accordion" class="accordion">
      <li>
        <div class="link"><i class="fa fa-paint-brush"></i>Diseño web<i class="fa fa-chevron-down"></i></div>
        <ul class="submenu">
          <li><a href="#">Photoshop</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">Maquetacion web</a></li>
        </ul>
      </li>
      <li class="default open">
        <div class="link"><i class="fa fa-code"></i>Desarrollo front-end<i class="fa fa-chevron-down"></i></div>
        <ul class="submenu">
          <li><a href="#">Javascript</a></li>
          <li><a href="#">jQuery</a></li>
          <li><a href="#">Frameworks javascript</a></li>
        </ul>
      </li>
      <li>
        <div class="link"><i class="fa fa-mobile"></i>Diseño responsive<i class="fa fa-chevron-down"></i></div>
        <ul class="submenu">
          <li><a href="#">Tablets</a></li>
          <li><a href="#">Dispositivos mobiles</a></li>
          <li><a href="#">Medios de escritorio</a></li>
          <li><a href="#">Otros dispositivos</a></li>
        </ul>
      </li>
      <li><div class="link"><i class="fa fa-globe"></i>Posicionamiento web<i class="fa fa-chevron-down"></i></div>
        <ul class="submenu">
          <li><a href="#">Google</a></li>
          <li><a href="#">Bing</a></li>
          <li><a href="#">Yahoo</a></li>
          <li><a href="#">Otros buscadores</a></li>
        </ul>
      </li>
    </ul>
  );
}



const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  width: 100px;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
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
