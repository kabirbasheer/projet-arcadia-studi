'use client';

import { DeviceSize, useResponsive } from "@/hooks/useResponsive";
import { NavbarMobile } from "./NavbarMobile";
import { Navbar } from "./Navbar";

export const NavbarResponsive = () => {
  const { deviceSize } = useResponsive();

  if (!deviceSize) {
    return null; // ou un loader pendant le calcul
  }

  return deviceSize <= DeviceSize.lg ? <NavbarMobile /> : <Navbar />;
};
