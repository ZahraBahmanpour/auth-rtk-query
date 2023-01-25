import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../features/products/productsApiSlice";

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <section className="products">
      <h1>Products List</h1>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i}>
              {product.name} {product.brand}
            </li>
          );
        })}
      </ul>
      <Link to="/">Back</Link>
    </section>
  );
};
export default Products;
