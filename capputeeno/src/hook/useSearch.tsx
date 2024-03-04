import Product from "@/types/product";
import ProductsResponse from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fecthFn = (): AxiosPromise<ProductsResponse> => {
  return axios.post(API_URL, {
    query: `
        query {
            allProducts{
            name
            id
            }
        }
  `,
  });
};

export default function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState<Product[]>([]);

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fecthFn(),
  });

  const products = data?.data?.data?.allProducts;

  useEffect(() => {
    if (!!search) {
      const filteredProducts = products?.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      filteredProducts && setItems(filteredProducts.slice(0, 7));
    }
  }, [search, products]);

  return {
    items,
    search,
    setSearch,
  };
}
