// Icons
import { ReactComponent as Check } from "../../images/icon-check.svg";
// Styles
import { Wrapper } from "./Checkbox.styles";

function Checkbox({ isChecked, toggleChecked }) {
  return (
    <Wrapper onClick={toggleChecked} isChecked={isChecked}>
      {isChecked && <Check />}
    </Wrapper>
  );
}

export default Checkbox;
