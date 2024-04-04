"use client";

import ThemeProvider from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}