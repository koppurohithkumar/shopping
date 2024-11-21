import { useContext } from "react";
import ProductContext from "../states/ProductContext";

export default function UseProduct() {
  const product = useContext(ProductContext);
  return product;
}
