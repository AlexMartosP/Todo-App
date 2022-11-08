// Context
import { useTheme, useUpdateTheme } from "../../context/ThemeContext";
// Images
import LightBgDesktop from "../../images/bg-desktop-light.jpg";
import DarkBgDesktop from "../../images/bg-desktop-dark.jpg";
import LightBgMobile from "../../images/bg-mobile-light.jpg";
import DarkBgMobile from "../../images/bg-mobile-dark.jpg";
// Icons
import { ReactComponent as Moon } from "../../images/icon-moon.svg";
import { ReactComponent as Sun } from "../../images/icon-sun.svg";
// Styling
import { Wrapper } from "./Header.styles";

function Header() {
  const isDark = useTheme();
  const setIsDark = useUpdateTheme();

  return (
    <Wrapper>
      <div className="container">
        <h1>TODO</h1>
        <button onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet={isDark ? DarkBgMobile : LightBgMobile}
        />
        <source srcSet={isDark ? DarkBgDesktop : LightBgDesktop} />
        <img src={isDark ? DarkBgDesktop : LightBgDesktop} alt="bg" />
      </picture>
    </Wrapper>
  );
}

export default Header;
