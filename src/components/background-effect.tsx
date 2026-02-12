"use client";

import { useTheme } from "next-themes";
import { ShootingStars } from "./magicui/shooting-stars";

export default function BackgroundEffect() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#ffffff" : "#000000";

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
