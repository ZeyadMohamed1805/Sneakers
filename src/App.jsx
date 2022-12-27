import './App.css';
import { useState } from 'react';
import { Nav } from './Components/Nav/Nav';
import { Main } from './Components/Main/Main';

function App() {
  let [count, setCount] = useState(0);
  let [show, setShow] = useState("none");
  let [hide, setHide] = useState("grid");
  let [add, setAdd] = useState(0);
  let [displayOpacitor, setDisplayOpacitor] = useState("none");
  let [displayView, setDisplayView] = useState("none");
  let [arrow, setArrow] = useState("none");

  const product = {
    header: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    originalPrice: 250,
    discount: 50
  }

  return (
    <div className="App">
      <Nav product={product} count={count} show={show} hide={hide} add={add} arrow={arrow} displayOpacitor={displayOpacitor} displayView={displayView} setDisplayOpacitor={setDisplayOpacitor} setShow={setShow} setHide={setHide} setAdd={setAdd} setArrow={setArrow} setDisplayView={setDisplayView} />
      <Main product={product} count={count} setCount={setCount} setShow={setShow} setHide={setHide} setAdd={setAdd} setDisplayOpacitor={setDisplayOpacitor} setDisplayView={setDisplayView} arrow={arrow} setArrow={setArrow} />
    </div>
  );
}

export default App;