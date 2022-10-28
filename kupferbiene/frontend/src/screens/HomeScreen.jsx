import { Link } from "react-router-dom";
import data from "../../../backend/data";

export default function HomeScreen() {
    return (
        <div>
            <h1>Produkte</h1>
        <div className="products">
        {
          data.products.map(product =>
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
              <p>€{product.preis}</p>
              <button>Ich will es</button>
            </div>
          </div>)
          }
            </div>
        </div>
    )
}
