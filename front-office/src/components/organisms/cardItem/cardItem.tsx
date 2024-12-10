'use client';

import { Button } from '@/components/molecules/Button/Button';
import { Card } from 'flowbite-react';
import { Typography } from '@/components/atoms/Typography';

interface CardItemProps {
  title: string;
  description: string;
  imgSrc: string;
  buttonText: string;
  onClick: () => void;
  horizontal: boolean;
}

export const CardItem = ({
  title,
  description,
  imgSrc,
  buttonText,
  onClick,
  horizontal= false,
}: CardItemProps) => {
  return (
    <Card
      imgSrc={imgSrc}
      className="max-w-sm"
      horizontal={horizontal}
    >
      <h5 className="text-2xl font-bold tracking-tight text-secondary-950">
        {title}
      </h5>
      <p className="font-normal text-primary-700">{description}</p>
      <Button color="primary" size="l" variant='underline' onClick={onClick}>
        <Typography color='primary'>
          {buttonText}
        </Typography>
      </Button>
    </Card>
  );
};
