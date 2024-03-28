import "./Shop.css";
import Categories from "../categories/Categories";
import Products from "../products/Products";

function Shop() {
  return (
    <div className="shop">
      <Categories />
      <Products />
    </div>
  );
}

export default Shop;