"use client";

import styled from "styled-components";

export const PageContanier = styled.main`
  background-color: var(--bg-default);
  padding: 0 160px;
  min-height: 100%;

  @media (max-width: 1230px) {
    padding: 0 70px;
  }
  @media (max-width: 865px) {
    padding: 0 30px;
  }
  @media (max-width: 646px) {
    padding: 0 20px;
  }
`;
