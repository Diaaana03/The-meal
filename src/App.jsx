import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Main } from "./components/Main";
import { Ingredients } from "./components/Ingredients";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/meal/:id" element={<Ingredients />} />
      </Routes>
    </div>
  );
}

export default App;
