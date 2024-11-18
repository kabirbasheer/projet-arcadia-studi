'use client';

import { Button } from '@/components/molecules/Button/Button';
import { Card } from 'flowbite-react';
import { customCardTheme } from './theme';

interface CardItemProps {
  title: string;
  description: string;
  imgSrc: string;
  buttonText: string;
  onClick: () => void;
}

export const CardItem = ({
  title,
  description,
  imgSrc,
  buttonText,
  onClick,
}: CardItemProps) => {
  return (
    <Card
      imgSrc={imgSrc}
      className="max-w-sm"
      theme={customCardTheme}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-secondary-950">
        {title}
      </h5>
      <p className="font-normal text-primary-700">{description}</p>
      <Button color="primary" size="l" onClick={onClick}>
        {buttonText}
      </Button>
    </Card>
  );
};
