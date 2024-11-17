import React from 'react';

import { Typography } from '@/components/atoms/Typography';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const ComponentDocumentation = ({ children, title }: Props) => {
  return (
    <>
      <Typography variant="cardTitle" color="primary">
        {title}
      </Typography>
      <div className="rounded-sm border-2 border-primary-300 p-3">{children}</div>
    </>
  );
};
