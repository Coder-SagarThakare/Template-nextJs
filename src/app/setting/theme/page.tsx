"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";

import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ThemePicker() {
  let colors = [
    { name: "orange", color: "#ea580c" },
    { name: "blue", color: "#3b82f6" },
    { name: "green", color: "#22c55e" },
    { name: "rose", color: "#e11d48" },
    { name: "light", color: "#525252" },
  ];

  const { setTheme, resolvedTheme } = useTheme();
  const [darkColors, setDarkColors] = useState([
    "darkOrange",
    "darkBlue",
    "darkRose",
    "darkGreen",
    "dark",
  ]);

  const [lightColors, setLightColors] = useState([
    "orange",
    "blue",
    "green",
    "rose",
    "light",
  ]);

  const handleTheme = (t: string) => {
    let res = resolvedTheme || "";
    if ((darkColors.includes(t) || darkColors.includes(res)) && t !== "light") {
      if (resolvedTheme === "light") {
        setTheme(t);
      }
      if (t === "orange" || resolvedTheme === "orange") setTheme("darkOrange");
      if (t === "blue" || resolvedTheme === "blue") setTheme("darkBlue");
      if (t === "rose" || resolvedTheme === "rose") setTheme("darkRose");
      if (t === "green" || resolvedTheme === "green") setTheme("darkGreen");
    } else if (lightColors.includes(t)) {
      if (resolvedTheme === "dark") setTheme(t);
      if (t === "orange" || resolvedTheme === "darkOrange") setTheme("orange");
      if (t === "blue" || resolvedTheme === "darkBlue") setTheme("blue");
      if (t === "rose" || resolvedTheme === "darkRose") setTheme("rose");
      if (t === "green" || resolvedTheme === "darkGreen") setTheme("green");
    }
  };

  return (
    <>

      <Select onValueChange={(value) => setTheme(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Brand Color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {colors.map((ele: any, index: number) => (
              <SelectItem key={index} value={ele.name}>
                {ele.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </>
  );
}
