import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeHandler = () => {

    const [theme, setTheme] = useState(""); //Create this state to switch theme

    //Create this function to switch theme
    const themeHandler = () => {
        if(theme === "") {
            document.documentElement.setAttribute("data-theme", "light");
            setTheme("light");
        }
        else if(theme === "light"){
            document.documentElement.removeAttribute("data-theme")
            setTheme("");
        }
        console.log("Hello")
    }

	return (
		<div className="theme-container">
			<FontAwesomeIcon className="icon" icon={faMoon} />
			<div className="handler">
				<div onClick={themeHandler} className={`switch ${theme === "light" ? "light" : ""}`}></div>
			</div>
			<FontAwesomeIcon className="icon" icon={faSun} />
		</div>
	);
};

export default ThemeHandler;
