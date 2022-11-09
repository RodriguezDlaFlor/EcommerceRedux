import Products from "./Components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import Shopping from "./Components/Shopping";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
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
