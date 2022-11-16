import Products from "./Components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Shopping from "./Components/Shopping";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import FormPet from "./Components/FormPet";
import Form from "./Components/Form";
import { useState } from "react";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer";
import Review from "./Components/Checkout/Review";
import Search from "./Components/Search";

function App() {
  const { allarticles } = useSelector((state) => state.products);
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sizes, setSizes] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header
          setResults={setResults}
          results={results}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="row row-cols-1 row-cols-md-5 g-1 m-0 ">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route
              exact
              path="/Products"
              element={
                results.length
                  ? results.map((article, index) => (
                      <div key={index}>
                        <Products article={article} />
                      </div>
                    ))
                  : filter.length
                  ? filter.map((article, index) => (
                      <div key={index}>
                        <Products article={article} />
                      </div>
                    ))
                  : allarticles.map((article, index) => (
                      <div key={index}>
                        <Products
                          article={article}
                          setSizes={setSizes}
                          sizes={sizes}
                        />
                      </div>
                    ))
              }
            ></Route>
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Turnos" element={<FormPet />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Review" element={<Review />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
