"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";


const ThemeToggler = () => {
	const { theme, toggleTheme } = useTheme();

	console.log(theme)

	return (
		<button aria-label='theme toggler'
			onClick={toggleTheme}
			className="flex items-center justify-center rounded-full cursor-pointer h-9 w-9 md:h-14 md:w-14"
		>
			{
				theme === "light" ?
					<Moon className="text-dark" />
					:
					<Sun />
			}
		</button>
	);
};

export default ThemeToggler;