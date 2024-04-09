"use client";

import { useState, createContext, useContext, useEffect } from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme: string;
}

const ThemeContext = createContext({} as any);

const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(defaultTheme);

	const toggleTheme = () => {
		setTheme((prevTheme: string) => prevTheme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const theme = localStorage.getItem('theme') || defaultTheme;
		setTheme(theme);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
