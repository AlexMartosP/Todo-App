import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.isDark ? "var(--clr-dark-desaturated-blue)" : "#fff"};
  border-radius: 5px;
  margin-block-start: 1rem;
  box-shadow: 0 0px 10px 0px #0000002e;
  overflow: hidden;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1rem;
  font-size: 0.75rem;
  color: var(--clr-light-dark-gray-blue);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  button {
    background: none;
    border: none;
    color: var(--clr-light-dark-gray-blue);
    cursor: pointer;

    :hover {
      color: ${(props) =>
        props.isDark
          ? "var(--clr-dark-light-grayish-blue-hover)"
          : "var(--clr-light-darker-gray-blue)"};
    }
  }
`;

export const Filter = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
`;
