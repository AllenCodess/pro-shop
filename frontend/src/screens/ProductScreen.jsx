import { useParams } from "react-router";
import products from "../products";

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  console.log(product);
  return <div></div>;
};

export default ProductScreen;
