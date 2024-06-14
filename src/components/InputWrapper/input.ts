import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: -5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 0.8rem;

  input {
    width: 90%;
    height: 5.4rem;
    padding: 1.6rem;
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    background-color: var(--gray-500);
    font-size: 1.6rem;
    color: var(--gray-100);
    outline: none;

    &::placeholder {
      color: var(--gray-300);
    }
  }

  input:focus {
    border: 1px solid var(--purple-dark);
  }

  button {
    height: 5.2rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-radius: 0.8rem;
    border: none;
    background-color: var(--blue-dark);
    color: var(--gray-100);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }

    svg {
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;
