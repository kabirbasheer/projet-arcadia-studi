'use client';

import { useEffect, useState } from 'react';

export enum DeviceSize {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280
}

export const useResponsive = () => {
  const [deviceSize, setDeviceSize] = useState(DeviceSize.xl);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= DeviceSize.sm) {
        setDeviceSize(DeviceSize.sm);
      } else if (window.innerWidth <= DeviceSize.md) {
        setDeviceSize(DeviceSize.md);
      } else if (window.innerWidth < DeviceSize.lg) {
        setDeviceSize(DeviceSize.lg);
      } else {
        setDeviceSize(DeviceSize.xl);
      }
    };
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return { deviceSize };
};
