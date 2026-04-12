import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <div>
        <Link to="/products/1">
          Iphone
        </Link>
      </div>

      <div>
        <Link to="/products/2">
          Samsung
        </Link>
      </div>

      <div>
        <Link to="/products/3">
          Laptop
        </Link>
      </div>

    </div>
  );
}

export default Products;