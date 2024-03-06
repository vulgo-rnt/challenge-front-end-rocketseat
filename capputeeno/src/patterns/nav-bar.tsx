import FilterByOrd from "@/components/filter-by-ord";
import FilterByType from "@/components/filter-by-type";
import Pagination from "@/components/pagination";
import styled from "styled-components";

const NavContanier = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: var(--text-dark);
  padding: 32px 0;

  @media (max-width: 865px) {
    padding: 22px 0;
  }
`;

const FiltersContanier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
    ul {
      li {
        font-size: 12px;
        line-height: unset;
        border-bottom-width: 2px;
      }
    }
    div {
      p {
        font-size: 10px;
      }
    }
  }
`;

const PaginationContanier = styled.div`
  display: flex;
  justify-content: end;
`;

export default function NavBar() {
  return (
    <NavContanier>
      <FiltersContanier>
        <FilterByType />
        <FilterByOrd />
      </FiltersContanier>
      <PaginationContanier>
        <Pagination />
      </PaginationContanier>
    </NavContanier>
  );
}
