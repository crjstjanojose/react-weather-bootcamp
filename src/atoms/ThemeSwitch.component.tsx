import { useAtom } from "jotai";
import { IconContext } from "react-icons";
import Switch from "react-switch";
import { themeAtom } from "../global";
import { IoMoon, IoSunny } from "react-icons/all";

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <IconContext.Provider value={{ color: "yellow" }}>
      <Switch
        onColor={"#041301"}
        offColor={"#76c919"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        checked={theme === "dark"}
        checkedIcon={
          <IoMoon
            size={"1.2rem"}
            style={{
              paddingLeft: "0.5rem",
              paddingTop: "0.25rem",
              paddingRight: "1rem",
            }}
          />
        }
        uncheckedIcon={
          <IoSunny
            size={"1.2rem"}
            style={{
              paddingLeft: "0.5rem",
              paddingTop: "0.25rem",
              paddingRight: "1rem",
            }}
          />
        }
      />
    </IconContext.Provider>
  );
};

export default ThemeSwitch;
