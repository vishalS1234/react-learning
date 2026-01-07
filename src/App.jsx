import { useState } from "react";
import Header from "./assets/Components/Header.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Hello React 19 !!</h1>
    </>
  );
}

export default App;

// test commit

// function Hello() {
//   return (
//     <>
//       <h1>Hello React 19 !!</h1>
//     </>
//   )
// }

// export default Hello
