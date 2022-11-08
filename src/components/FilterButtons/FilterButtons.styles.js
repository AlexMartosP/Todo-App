import styled from "styled-components";

export const Button = styled.div`
  background: none;
  border: none;
  color: var(--clr-dark-very-dark-grayish-blue);
  cursor: pointer;
  font-weight: 700;
  font-size: 0.75rem;

  &.active {
    color: var(--clr-primary-blue);
  }

  :not(.active):hover {
    color: ${(props) =>
      props.isDark
        ? "var(--clr-dark-light-grayish-blue-hover)"
        : "var(--clr-light-darker-gray-blue)"};
  }
`;
