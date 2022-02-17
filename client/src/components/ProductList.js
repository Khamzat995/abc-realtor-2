import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import { useTranslation } from 'react-i18next';

const ProductList = () => {
  const { t } = useTranslation();

  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}> {t('product-list-text')}</h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products}/>;
  }
  return <GridView products={products}>{t('grid-view-text')}</GridView>;
};

export default ProductList;
