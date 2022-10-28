import logo from "./logo.png";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


export default function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <Link to="/"><img className="header-logo" src={logo} alt={"logo"}/></Link>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
      </main>
      </div>
      </BrowserRouter>
  );
}
