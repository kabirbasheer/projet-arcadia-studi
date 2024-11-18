'use client';

import { Card } from 'flowbite-react';
import { customCardTheme } from './theme';
import { ReactNode } from 'react';
import { Typography } from '@/components/atoms/Typography';

interface CardScheduleProps {
  time: ReactNode;
  title: string;
  imgSrc: string;
}

export const CardSchedule = ({ time, title, imgSrc }: CardScheduleProps) => {
  return (
    <Card imgSrc={imgSrc} className="max-w-sm" theme={customCardTheme}>
      <Typography
        variant="componentSmallTitle"
        color="dark"
        customClassName="flex justify-center items-center"
      >
        {title}
      </Typography>
      {time}
    </Card>
  );
};
