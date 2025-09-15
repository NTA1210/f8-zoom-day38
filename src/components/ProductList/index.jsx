// ProductList component - KHÔNG có logic xử lý loading
import { withLoading } from "@/hoc";

function ProductList() {
  const products = ["iPhone", "Samsung", "Xiaomi"];

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product}>{product}</div>
      ))}
    </div>
  );
}

export default withLoading(ProductList);
