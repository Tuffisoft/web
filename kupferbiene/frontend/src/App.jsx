import data from "./data";
import logo from "./logo.png"

export default function App() {
  return (
    <div>
      <header >
        <a href="/"><img className="header-logo" src={logo} alt={"logo"}/></a>
      </header>
      <main>
        <h1>Produkte</h1>
        <div className="products">
        {
          data.products.map(product =>
          (<div className="product" key={product.slug}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p>{product.name}</p>
              <p>€{product.preis}</p>
            </div>
          </div>))
          }
          </div>
      </main>
    </div>
  );
}
