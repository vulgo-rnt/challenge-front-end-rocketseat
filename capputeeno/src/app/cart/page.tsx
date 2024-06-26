"use client";

import { formatPrice } from "@/commons/format-price";
import BtnBack from "@/components/btn-back";
import CardCart from "@/components/card-cart";
import { Divisor } from "@/components/card-product";
import useLocalStorage from "@/hook/useLocalStorage";
import { ProductDetails } from "@/types/product";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainContanier = styled.main`
  display: flex;
  gap: 32px;
  padding-top: 25px;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const FirstBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;

  [data-info-cart] {
    color: var(--text-darker);
    display: flex;
    flex-direction: column;
    gap: 6px;

    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
    }
    p {
      line-height: 24px;
      font-weight: 300;
      strong {
        font-weight: 600;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 16px;
    margin-bottom: 45px;

    @media (max-width: 1315px) {
      flex-direction: row;
    }
  }
`;

const SecondBlock = styled.div`
  width: 100%;
  max-width: 352px;
  min-width: 250px;
  max-height: 700px;
  margin: 15px auto 35px auto;

  background-color: white;
  padding: 16px 24px 24px 24px;
  color: var(--text-darker);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }

  span {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  [data-block] {
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 29px;
    margin-bottom: 24px;
  }

  [data-block-2] {
    margin-top: 8px;
    margin-bottom: 40px;
    p {
      font-weight: 600;
    }
  }

  button {
    max-width: 303px;
    width: 100%;
    height: 44px;
    border-radius: 4px;
    background-color: #51b853;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: #f5f5fa;
    cursor: pointer;
  }

  section {
    margin-top: 100px;
    ul {
      list-style: none;
      text-decoration: underline;
      color: #737380;

      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      li {
        cursor: pointer;
      }
    }
  }
`;
const calculateTotal = (value: ProductDetails[]) => {
  return value.reduce(
    (sum, item) => (sum += item.price_in_cents * item.quantity),
    0
  );
};

export default function Page() {
  const { storage, removeItem, uptadeItem } = useLocalStorage("cart-items");

  const [totalPrice, setTotalPrice] = useState("");
  const [totalPriceWithDelivery, setTotalPriceWithDelivery] = useState("");

  const delivery = 4000;
  useEffect(() => {
    setTotalPrice(formatPrice(calculateTotal(storage)));
    setTotalPriceWithDelivery(formatPrice(calculateTotal(storage) + delivery));
  }, [storage]);

  return (
    <MainContanier>
      <FirstBlock>
        <BtnBack />
        <div data-info-cart>
          <h2>SEU CARRINHO</h2>
          <p>
            {`Total (${storage.length} produtos) `}
            <strong>{totalPrice}</strong>
          </p>
        </div>
        <ul>
          {storage.map((item) => (
            <li key={item.id}>
              <CardCart
                data={item}
                removeItem={() => removeItem(item.id)}
                uptadeItem={(quantity) => {
                  uptadeItem(item.id, quantity);
                  setTotalPrice(formatPrice(calculateTotal(storage)));
                  setTotalPriceWithDelivery(
                    formatPrice(calculateTotal(storage) + delivery)
                  );
                }}
              />
            </li>
          ))}
        </ul>
      </FirstBlock>
      <SecondBlock>
        <div>
          <h2>RESUMO DO PEDIDO</h2>
          <div data-block>
            <span>
              <p>Subtotal de produtos</p>
              <p>{totalPrice}</p>
            </span>
            <span>
              <p>Entrega</p>
              <p>{formatPrice(delivery)}</p>
            </span>
          </div>
          <Divisor />
          <span data-block-2>
            <p>Total</p>
            <p>{totalPriceWithDelivery}</p>
          </span>
          <button onClick={() => alert("Compra Efetuada")}>
            FINALIZAR A COMPRA
          </button>
        </div>
        <div>
          <section>
            <ul>
              <li>AJUDA</li>
              <li>REEMBOLSOS</li>
              <li>ENTREGAS E FRETE</li>
              <li>TROCAS E DEVOLUÇÕES</li>
            </ul>
          </section>
        </div>
      </SecondBlock>
    </MainContanier>
  );
}
