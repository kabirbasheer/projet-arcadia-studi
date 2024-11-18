'use client';

import Image from 'next/image';
import React, { use } from 'react';

import { DeviceSize, useResponsive } from '@/hooks/useResponsive';

import header from '../../../../public/images/img-bienvenue-3.webp';

interface HeaderProps {
  title?: string;
  buttonText?: string;
}

const Header: React.FC<HeaderProps> = ({ title, buttonText }) => {
  const { deviceSize } = useResponsive();

  const imageWidthSize = deviceSize <= DeviceSize.md ? 350 : 700;

  return (
      <Image src={header} alt="header image" width={imageWidthSize} />
  );
};

export default Header;
