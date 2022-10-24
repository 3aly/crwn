import { Fragment, useContext } from "react";
import CategoryPreview from "../../compnents/CategoryPreview/CategoryPreview";
import ProductCard from "../../compnents/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import { ProductsContext } from "../../context/products.context";
import Category from "../../pages/Category/Category";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
