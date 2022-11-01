import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MySection from "./exercise/MySection";
import MyButton from './exercise/MyButton';
import MyComponent from './exercise/MyComponent';
import MyComponent1 from './exercise/MyComponent1';
import Exercise2 from './exercise/exercise2-1';
import Exercise3 from './exercise/exercise2-3';
import MyButton1 from './exercise/MyButton1';
import App2 from './exercise/exercise2-2';
import MyInput from './exercise/exercise3';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const array=["First","Second","Third"];
const object={
  First:1,
  Second:2,
  Third:3
}

const card = {
  title:"Elon Musk",
  desciption:"Elon Musk FRS is a business magnate , ...",
  avatar:"https://ichef.bbci.co.uk/news/976/cpsprodpb/14B1D/production/_125556748_gettyimages-1240422158.jpg",
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {/* <p>
      Hello, <strong>JSX</strong>
    </p>
    <div>
      <button/>
      <code/>
      <input/>
      <label/>
      <p/>
      <pre/>
      <select/>
      <table/>
      <ul/>
    </div>
    <section>
      <header>
        <h1>A Header</h1>
      </header>
      <nav>
        <a href='item'>Nav item</a>
      </nav>
      <main>
        <p>The main content ...</p>
      </main>
      <footer>
        <small>&copy; 2021</small>
      </footer>
    </section>
    <MySection>
      <MyButton>My Button text</MyButton>
    </MySection>
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((i)=>(
          <li key={i}>
            <strong>{i}: </strong>
            {object[i]}
          </li>
        ))}
      </ul>
    </section>
    <MyComponent></MyComponent>
    <MyComponent1></MyComponent1>
    <Exercise2></Exercise2>
    <Exercise3></Exercise3>
    <App2></App2>
    <MyInput></MyInput>
    <div style={{ textAlign: "center", fontSize: 15, color: "#d0f0c0", background: "gray", border: '1px outset #d0f0c0',margin:20 }}>Green is the prime color of the world</div>
    <Card style={{ width: '18rem' , margin:20}}>
      <Card.Img variant="top" src={card.avatar} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.desciption}
        </Card.Text>
        <Button variant="primary">Click me!</Button>
      </Card.Body>
    </Card> */}

  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// function render({ second }) {
//   root.render(
//     <main>
//       <MyButton1 />
//       <MyButton1 text={second.text} disabled={second.disabled} />
//     </main>
//   );
// }

// render({
//   second: {
//     text: "Second Button",
//     disabled: true,
//   },


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
