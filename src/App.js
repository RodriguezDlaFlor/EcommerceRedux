import Products from "./Components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import Shopping from "./Components/Shopping";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import FormPet from "./Components/FormPet";
import Form from "./Components/Form";
import { useState } from "react";
import Search from "./Components/Search";
import Results from "./Components/Results";
import Header from "./Components/Header";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />
            <Route
              exact
              path="/Products"
              element={<Products setResults={setResults} />}
            />
            <Route exact path="/Shopping" element={<Shopping />} />
            <Route exact path="/Form" element={<Form />} />
            <Route exact path="/Turnos" element={<FormPet />} />
            <Route
              exact
              path="/Search"
              element={<Search setResults={setResults} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
