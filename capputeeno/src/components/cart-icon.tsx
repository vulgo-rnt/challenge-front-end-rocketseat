import useLocalStorage from "@/hook/useLocalStorage";
import styled from "styled-components";
import CartIcon from "./icons/cart";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
  color: white;
  background-color: var(--color-delete);
  width: 17px;
  height: 17px;
  padding: 0 5px;
  font-size: 10px;
  border-radius: 100%;
  margin-left: -10px;
`;

const CartContanier = styled.div`
  position: relative;
  cursor: pointer;
`;

export function CartIconWithStore() {
  const { storage } = useLocalStorage("cart-items");
  const router = useRouter();

  return (
    <CartContanier onClick={() => router.push("/cart")}>
      <CartIcon color="#737380" />
      {!!storage.length && <CartCount>{storage.length}</CartCount>}
    </CartContanier>
  );
}
