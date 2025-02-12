"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/dashboard"); 

  return !hideNavbar ? <Navbar /> : null;
}
