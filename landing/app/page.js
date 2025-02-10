"use client";
import Body from "@/components/body/Body";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const isDesktop = useMediaQuery("@media (min-width:1200px)");
  return (
    <div>
      <Body isDesktop={isDesktop} />
    </div>
  );
}
