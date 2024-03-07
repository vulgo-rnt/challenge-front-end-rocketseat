"use client";

import Link from "next/link";
import styled from "styled-components";
import { InputPrimaryWithSeach } from "@/components/input-primary";
import { Saira_Stencil_One } from "next/font/google";
import { CartIconWithStore } from "@/components/cart-icon";

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

const ContanierHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  @media (max-width: 1125px) {
    padding: 20px 70px;
  }
  @media (max-width: 865px) {
    padding: 20px 30px;
  }
  @media (max-width: 646px) {
    padding: 10px 20px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    @media (max-width: 646px) {
      gap: 0;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 40px;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-logo);

  @media (max-width: 646px) {
    font-size: 25px;
  }
`;

export default function Header() {
  return (
    <ContanierHeader>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>
      <div>
        <InputPrimaryWithSeach placeholder="Procurando por algo específico?" />
        <CartIconWithStore />
      </div>
    </ContanierHeader>
  );
}
