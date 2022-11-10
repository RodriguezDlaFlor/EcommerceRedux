import Products from "./Components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import Shopping from "./Components/Shopping";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />
            <Route exact path="/Header" element={<Header />} />
            <Route exact path="/Products" element={<Products />} />
            <Route exact path="/Shopping" element={<Shopping />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
