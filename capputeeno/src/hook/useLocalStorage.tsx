import { ProductDetails } from "@/types/product";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useLocalStorage(context: string) {
  const [storage, setStorage] = useState<ProductDetails[]>([]);
  const route = usePathname();

  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    const value = JSON.parse(localStorage.getItem(context) ?? "[]");
    setStorage(value);
  }, [route, context]);

  const uptadeStorage = (value: ProductDetails[]): void => {
    setStorage(value);
    localStorage.setItem(context, JSON.stringify(value));
  };

  const removeItem = (value: string): void => {
    setStorage((prev) => {
      const newStorage = prev.filter((item) => item.id !== value);
      localStorage.setItem(context, JSON.stringify(newStorage));
      return newStorage;
    });
  };

  const addItem = (data: ProductDetails) => {
    if (storage.length > 0) {
      let cartItemsArray = storage;

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === data.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: data.id });
      }

      uptadeStorage(cartItemsArray);
    } else {
      const newCart = [{ ...data, quantity: 1, id: data.id }];
      uptadeStorage(newCart);
    }
  };

  const uptadeItem = (id: string, quantity: number): void => {
    const cartItemsArray = storage;

    const productIndex = cartItemsArray.findIndex(
      (item: { id: string }) => item.id === id
    );

    cartItemsArray[productIndex].quantity = quantity;

    uptadeStorage(cartItemsArray);

  };

  return { storage, uptadeStorage, removeItem, addItem, uptadeItem };
}
