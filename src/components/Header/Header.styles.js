import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  height: 250px;
  padding-block: 2.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--clr-light-gray);
    letter-spacing: 0.25em;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
