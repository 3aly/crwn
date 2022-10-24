import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../compnents/CategoryPreview/CategoryPreview";
import ProductCard from "../../compnents/product-card/product-card.component";
import { ProductsContext } from "../../context/products.context";
import Category from "../../pages/Category/Category";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment className="CategoriesPreview-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
