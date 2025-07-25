import { createContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  async function getAllProducts() {
    let res = await AxiosInstance.get("/shop/product/get");
    console.log(res);
    if (res.data.success) {
      //   setAllProducts(res.data.data);
      let sampleProduct = [
        {
          id: 1,
          title: "Sample Product",
          price: 1080,
          salePrice: 899,
          image: "",
        },
      ];

      setAllProducts(sampleProduct);
    } else {
      setAllProducts([]);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ allProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
