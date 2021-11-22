import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  console.log(params.productId);
  return(
      <>
  <h1> The Product Details Page</h1>
  <p>{params.productId}</p>
  </>
  );
};

export default ProductDetails;
