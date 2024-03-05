"use client";

import styled from "styled-components";
import NavBar from "../patterns/nav-bar";
import ProductsList from "@/patterns/products-list";
import Pagination from "@/components/pagination";

const FooterContanier = styled.footer`
  display: flex;
  justify-content: end;
  padding: 74px 0 60px 0;
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <ProductsList />
      <FooterContanier>
        <Pagination />
      </FooterContanier>
    </>
  );
}
