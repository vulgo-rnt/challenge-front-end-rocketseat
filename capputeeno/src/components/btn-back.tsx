import styled from "styled-components";
import BackArrow from "./icons/back-arrow";
import { useRouter } from "next/navigation";

const BtnBackContanier = styled.div`
  display: flex;
  justify-content: start;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
  }

  p {
    width: 40px;
    height: 21px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #617480;
  }
`;

const SvgContanier = styled.span`
  display: flex;
  align-items: center;
  margin: 3px;
`;

export default function BtnBack() {
  const router = useRouter();
  return (
    <BtnBackContanier>
      <div onClick={() => router.back()}>
        <SvgContanier>
          <BackArrow />
        </SvgContanier>
        <p>Voltar</p>
      </div>
    </BtnBackContanier>
  );
}
