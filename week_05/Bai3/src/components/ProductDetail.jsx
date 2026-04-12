import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Detail</h2>

      <div>
        Product ID: {id}
      </div>

    </div>
  );
}

export default ProductDetail;