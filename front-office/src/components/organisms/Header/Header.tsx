'use client';

import Image from 'next/image';
import React, { use } from 'react';

import { DeviceSize, useResponsive } from '@/hooks/useResponsive';

import header from '../../../../public/images/img-bienvenue.webp';

export const Header = () => {
  const { deviceSize } = useResponsive();

  const imageWidthSize = deviceSize <= DeviceSize.md ? 350 : 700;

  return <Image src={header} alt="header image" width={imageWidthSize} />;
};

