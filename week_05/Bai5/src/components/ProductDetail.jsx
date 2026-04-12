import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Product Detail</h2>

      <div>
        Product ID: {id}
      </div>

      <div>
        <button onClick={handleBuy}>
          Mua hàng
        </button>
      </div>

    </div>
  );
}

export default ProductDetail;