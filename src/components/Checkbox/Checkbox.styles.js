import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: ${(props) =>
    !props.isChecked
      ? `1px solid ${
          props.isDark
            ? "var(--clr-dark-very-dark-blue)"
            : "var(--clr-light-grayish)"
        }`
      : "1px solid transparent"};
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;

  background: ${(props) =>
    props.isChecked ? "var(--check-gradient)" : "transparent"};
`;
