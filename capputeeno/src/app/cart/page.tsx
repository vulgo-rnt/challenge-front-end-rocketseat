"use client";

import BtnBack from "@/components/btn-back";
import CardCart from "@/components/card-cart";
import useLocalStorage from "@/hook/useLocalStorage";
import styled from "styled-components";

const MainContanier = styled.main``;

export default function Page() {
  const { storage, removeItem, uptadeItem } = useLocalStorage("cart-items");

  return (
    <MainContanier>
      <BtnBack />
      <div>
        {storage.map((item) => (
          <CardCart
            key={item.id}
            data={item}
            removeItem={() => removeItem(item.id)}
            uptadeItem={(quantity) => uptadeItem(item.id, quantity)}
          />
        ))}
      </div>
    </MainContanier>
  );
}
