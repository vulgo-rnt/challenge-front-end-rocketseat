import { ProductDetails } from "@/types/product";
import Image from "next/image";
import styled from "styled-components";
import TrashIcon from "./icons/trash";
import { formatPrice } from "@/commons/format-price";
import ArrowIcon from "./icons/arrow";

interface CardCartProps {
  data: ProductDetails;
  removeItem: () => void;
  uptadeItem: (quantity: number) => void;
}

const CardContanier = styled.div`
  display: flex;
  width: 736px;
  height: 211px;
  border-radius: 8px;
`;

const ImageNext = styled.div`
  position: relative;
  width: 256px;
  height: 211px;
`;

const InfoContanier = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 31px;
  background-color: white;
  border-radius: 8px;
  max-width: 480px;
  color: var(--text-darker);
  gap: 12px;

  svg {
    cursor: pointer;
  }

  p {
    font-size: 12px;
    line-height: 18px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  h4 {
    color: var(--shapes-dark);
    line-height: 24px;
    padding-top: 16px;
  }

  [data-footer] {
    margin-top: 13px;
  }
`;

const QuantityContanier = styled.div`
  position: relative;
  width: 65px;
  height: 40px;
  background-color: var(--bg-secondary);
  cursor: pointer;

  select {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #a8a8b3;
    padding: 8px 0 8px 15px;
    line-height: 24px;
    color: var(--text-dark);
    z-index: 3;
  }
  svg {
    position: absolute;
    right: 4px;
    z-index: 2;
  }
`;

function QuantityControl({
  uptadeItem,
  quantity,
}: {
  quantity: number;
  uptadeItem: (quantity: number) => void;
}) {
  return (
    <QuantityContanier>
      <select
        defaultValue={quantity}
        onChange={(event) => uptadeItem(Number(event.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <ArrowIcon />
    </QuantityContanier>
  );
}

export default function CardCart({
  data,
  removeItem,
  uptadeItem,
}: CardCartProps) {
  return (
    <CardContanier>
      <ImageNext>
        <Image
          src={data.image_url}
          alt={data.name}
          style={{ borderRadius: "8px 0 0 8px" }}
          fill
          priority
          sizes="max-inline-size: 100%"
        />
      </ImageNext>
      <InfoContanier>
        <div>
          <h2>{data.name}</h2>
          <span onClick={() => removeItem()}>
            <TrashIcon />
          </span>
        </div>
        <p>{data.description}</p>
        <div data-footer>
          <QuantityControl
            quantity={data.quantity}
            uptadeItem={(quantity) => uptadeItem(quantity)}
          />
          <h4>{formatPrice(data.price_in_cents)}</h4>
        </div>
      </InfoContanier>
    </CardContanier>
  );
}
