import styled from "styled-components";
import { InputHTMLAttributes, useState } from "react";
import useSearch from "@/hook/useSearch";
import { BoxItems } from "./filter-by-ord";
import Link from "next/link";

export const InputPrimary = styled.input`
  position: relative;

  background-color: var(--bg-secondary);
  padding: 10px 16px;
  border-radius: 8px;
  width: 352px;
  border: none;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContanier = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.059"
        cy="11.0586"
        r="7.06194"
        stroke="#737380"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0034 20.0033L16.0518 16.0517"
        stroke="#737380"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LiContanier = styled.li`
  * {
    text-decoration: none;
    color: var(--text-darker);
  }
`;

export function InputPrimaryWithSeach(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  const [isOpen, setIsOpen] = useState(false);
  const { search, setSearch, items } = useSearch();

  const handlerChange = (value: string) => {
    if (!isOpen) setIsOpen(true);
    setSearch(value);
  };

  return (
    <InputContanier>
      <InputPrimary
        {...props}
        value={search}
        onChange={(event) => handlerChange(event.target.value)}
        onFocus={() => {
          if (search) setIsOpen(true);
        }}
        onBlur={() => {
          setTimeout(() => setIsOpen(false), 100);
        }}
      />
      <SearchIcon />
      {isOpen && (
        <BoxItems>
          {items.map((item) => {
            return (
              <LiContanier key={item.id} onClick={() => setIsOpen(false)}>
                <Link href={`product?id=${item.id}`}>{item.name}</Link>
              </LiContanier>
            );
          })}
        </BoxItems>
      )}
    </InputContanier>
  );
}
