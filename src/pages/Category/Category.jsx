import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../compnents/product-card/product-card.component";
import "./Category.scss";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/category/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
