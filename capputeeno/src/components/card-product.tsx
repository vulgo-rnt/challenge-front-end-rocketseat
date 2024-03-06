import { formatPrice } from "@/commons/format-price";
import Product from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const ProductCardContanier = styled.div`
  background-color: #ffffff66;
  width: min-content;
  height: max-content;

  cursor: pointer;

  div {
    padding: 0 12px;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    padding: 8px 0;
    color: var(--text-darker);
  }

  p {
    font-weight: 600;
    line-height: 150%;
    font-size: 14px;
    color: var(--shapes-dark);
    padding: 8px 0;
  }

  @media (max-width: 630px) {
    p {
      font-size: 10px;
    }
    h3 {
      font-size: 12px;
    }
  }
`;

const ImageNext = styled.div`
  position: relative;
  width: 256px;
  height: 300px;

  @media (max-width: 630px) {
    width: 150px;
    height: 150px;
  }
`;
export const Divisor = styled.div`
  height: 1px;
  background-color: var(--shapes-2);
`;
export default function ProductCard(props: Product) {
  const router = useRouter();
  return (
    <ProductCardContanier onClick={() => router.push(`product?id=${props.id}`)}>
      <ImageNext>
        <Image
          src={props.image_url}
          alt={props.name}
          style={{ borderRadius: "8px 8px 0 0" }}
          fill
          priority
          sizes="max-inline-size: 100%"
        />
      </ImageNext>
      <div>
        <h3>{props.name}</h3>
        <Divisor />
        <p>{formatPrice(props.price_in_cents)}</p>
      </div>
    </ProductCardContanier>
  );
}
