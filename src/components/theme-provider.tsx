"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import Header from "./header"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <>
  {/* <Header /> */}
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
  </>
}
