import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) =>
    props.isDark ? "var(--clr-dark-desaturated-blue)" : "#fff"};
  padding: 0.9rem 1rem;
  border-radius: 5px;

  form {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  color: ${(props) =>
    props.isDark
      ? "var(--clr-dark-light-grayish-blue)"
      : "var(--clr-light-darker-gray-blue)"};
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--clr-light-dark-gray-blue);
  }
`;
