"use client";

import ChildrenProps from "@/types/children-props";
import { FilterContextProvider } from "../context/filter";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "@/lib/registry";

const theme = {};

export function DefaultProviders({ children }: ChildrenProps) {
  const client = new QueryClient();
  return (
    <StyledComponentsRegistry>
      <QueryClientProvider client={client}>
        <FilterContextProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </StyledComponentsRegistry>
  );
}
