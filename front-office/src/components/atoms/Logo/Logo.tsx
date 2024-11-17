import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface LogoProps {
  redirectUrl?: string;
  src?: string;
}

export const Logo = ({
  redirectUrl = '/',
  src = '/images/arcadia-logo-2.webp', // Chemin relatif à partir de "public"
}: LogoProps) => {
  return (
    <Link href={redirectUrl}>
      <Image width={100} height={45} src={src} alt="logo of arcadia zoo" />
    </Link>
  );
};
