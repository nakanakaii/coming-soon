// import { useState } from 'react'
import './App.css'
import { MyButton } from './components/myButton';

export default function App() {
  return (
    <div>
      <pre>DahDah.tech</pre>
      <h1>Coming soon</h1>
      <p>You can follow me</p>
      <br />
      <MyButton name="Github" link="https://github.com/nakanakaii" />
      <MyButton name="X" link="https://x.com/_nakanakaii" />
      <MyButton name="LinkedIn" link="https://www.linkedin.com/in/nakanakaii/" />
    </div>
  );
}