import styled from "styled-components";

export const ContainerVoidList = styled.div`
  border-top: 1px solid #333333;
  border-radius: 0.8rem;
  padding: 6.4rem;
  width: 100%;
`;

export const VoidListTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 1.6rem;
  }

  .firts-p {
    font-weight: 700;
  }

  p {
    color: var(--gray-300);
  }
`;
