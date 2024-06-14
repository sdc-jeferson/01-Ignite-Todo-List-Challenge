import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 6.4rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const HeaderList = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2.4rem;

    p {
      font-weight: 700;
    }

    span {
      color: var(--gray-200);
      background-color: var(--gray-400);
      border-radius: 999px;
      width: 3rem;
      height: 2.2rem;

      text-align: center;
    }
  }
  .status-create-task {
    p {
      color: var(--blue);
    }
  }

  .status-conclued-task {
    p {
      color: var(--purple);
    }
  }
`;

export const ListTask = styled.div`
  width: 100%;

  ul {
    list-style: none;
    height: 570px;
    overflow-y: auto;
    padding-right: 1rem;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      background-color: var(--gray-500);
      font-size: 1.4rem;
      height: 60px;
      padding: 1.6rem;
      border: 1px solid #333333;
      border-radius: 0.8rem;

      div {
        display: flex;

        input {
          margin-right: 1.6rem;
          border-radius: 50%;
        }
        p {
          color: var(--gray-100);
        }
      }

      button {
        margin-left: 1.6rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: color 0.2s;
        &:hover {
          background-color: var(--gray-400);
        }

        svg {
          color: var(--gray-300);
          font-size: 1.6rem;
          transition: color 0.2s;
          &:hover {
            color: var(--danger) !important;
          }
        }
      }
    }
  }
`;
