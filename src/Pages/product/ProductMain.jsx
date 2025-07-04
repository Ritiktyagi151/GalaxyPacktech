import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MachineCategorySelector from "./Chooseproducts";

const ProductPage = () => {
  return (
    <div>
      <MachineCategorySelector />
    </div>
  );
};

export default ProductPage;
