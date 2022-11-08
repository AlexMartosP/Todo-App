import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: 1rem;
  height: 55px;
  border-bottom: 1px solid
    ${(props) =>
      props.isDark
        ? "var(--clr-light-darker-gray-blue)"
        : "var(--clr-light-gray-blue)"};
  background-color: ${(props) =>
    props.isDark ? "var(--clr-dark-desaturated-blue)" : "#fff"};

  p {
    font-size: 0.85rem;
    color: ${(props) =>
      props.isDark
        ? "var(--clr-dark-light-grayish-blue)"
        : "var(--clr-light-darker-gray-blue)"};
    margin-inline-end: auto;
  }

  .completed {
    text-decoration: line-through;
    color: var(--clr-light-darker-gray-blue);
  }

  .remove {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
  }

  &:hover {
    .remove {
      display: block;
    }
  }
`;
