import "./style.css";
import QuoteCard from "./components/simpson";
import axios from "axios";
import { useState } from "react";

function App() {
  const [simpson, setSimpson] = useState([]);
  console.log(simpson);
  const getSimpson = () => {

    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")


      .then(({ data }) => {
        setSimpson(data);
      });
  };
  return (
    <div className="App">
      {simpson.map((simpsons, index) => (
        <QuoteCard key={index} {...simpsons} />
      ))}
      <button type="button" onClick={getSimpson}>
        Get Quote
      </button>
    </div>
  );
}
export default App;
