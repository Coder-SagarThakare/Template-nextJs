"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";

export default function ThemePicker() {
  let colors = [
      { name: "blue", color: "#3b82f6" },
      { name: "rose", color: "#e11d48" },
      { name: "green", color: "#22c55e" },
      { name: "orange", color: "#ea580c" },
  ];

  const { setTheme, themes, resolvedTheme } = useTheme();
  const [darkColors, setDarkColors] = useState([
    "darkOrange",
    "darkBlue",
    "darkRose",
    "darkGreen",
  ]);

  const [lightColors, setLightColors] = useState([
    "orange",
    "blue",
    "green",
    "rose",
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
      <Card>
        {colors.map((item: any) => {
          return (
            <Button
              key={item.name}
              variant="outline"
              onClick={() => handleTheme(item.name)}
              className="m-2  rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {/* {item.name} */}
              {"    "}
            </Button>
          );
        })}

      </Card>
        <Button> Demo button </Button>
    </>
  );
}
