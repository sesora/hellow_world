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
          <li onClick={() => history.push('/style1')} >style1</li>
          <li onClick={() => history.push('/menu')} >menu練習</li>
        </ul>
      </nav>
      <section className="home page layer">
        <h1>Hover to <br/>reveal navigation</h1>
      </section>
    </div>
  )
}