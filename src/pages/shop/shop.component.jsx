import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../compnents/CategoriesPreview/CategoriesPreview";
import { setCategories } from "../../store/category/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import Category from "../Category/Category";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
