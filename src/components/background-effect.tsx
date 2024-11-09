"use client";

import { useTheme } from "next-themes";
import Particles from "./magicui/particles";
import { ShootingStars } from "./magicui/shooting-stars";
import { useEffect, useState } from "react";

export default function BackgroundEffect() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <ShootingStars className="fixed inset-0 -z-10" />

      {/* <Particles
        className="fixed inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      /> */}
    </>
  );
}
