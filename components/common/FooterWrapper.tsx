"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Hide footer on root route
  if (pathname === "/") {
    return null;
  }
  
  return <Footer />;
}