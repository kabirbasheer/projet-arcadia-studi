import React, { ReactNode } from 'react';
import clsxm from '@/utils/clsxm';
import Image from 'next/image'; // Importer Image depuis next/image
import { Typography } from '@/components/atoms/Typography';

type CardColor = 'primary' | 'secondary' | 'white';
type CardSize = 's' | 'm' | 'l';
type CardOrientation = 'horizontal' | 'vertical';

interface CardProps {
  title?: string;
  description?: string;
  imgSrc: string;
  className?: string;
  orientation: CardOrientation;
  color?: CardColor;
  size?: CardSize;
  href?: string;
  children?: ReactNode;
}

export const Card = ({
  children,
  title,
  description,
  imgSrc,
  className,
  orientation,
  color = 'primary',
  size = 's',
  href,
}: CardProps) => {
  return (
    <a
      href={href}
      className={clsxm(
        'flex items-center gap-2 rounded-md text-base focus:outline-none focus-visible:ring focus-visible:ring-primary-500 p-5',
        className,
        //*=========== orientation ===========
        [
          orientation === 'horizontal' && 'flex-row',
          orientation === 'vertical' && 'flex-col',
        ],
        //*=========== Colors ===========
        [
          color === 'primary' && 'bg-primary-100 text-primary-900',
          color === 'secondary' && 'bg-secondary-100 text-secondary-950',
          color === 'white' && 'bg-white text-gray-900',
        ],
      //*=========== Sizes ===========
        [
          size === 's' && 'w-[300px] h-[200px]',
          size === 'm' && 'w-[500px] h-[400px]',
          size === 'l' && 'w-full h-full',
        ],
      )}
    >
      <div
        className={clsxm(
          'relative w-full',
          orientation === 'horizontal' ? 'h-full max-w-xs' : 'h-1/2'
        )}
      >
        {/* Remplacement de <img /> par <Image /> */}
        <Image
          src={imgSrc}
          alt={title || 'Card image'} // Ajout de l'alt pour l'accessibilité
          width={400} // Vous pouvez ajuster la largeur selon vos besoins
          height={300} // Vous pouvez ajuster la hauteur selon vos besoins
          className="object-cover w-full h-auto rounded-md mb-5" // L'image occupe l'espace tout en préservant son ratio
        />
        <div className="flex flex-col gap-y-5 px-2">
        <Typography variant="cardTitle" color="darkGray">
          {title}
        </Typography>
        <Typography variant="paragraph" color="lightGray">
          {description}
        </Typography>
        </div>
      </div>
      <div className="p-4">
        {children} {/* Affichage des enfants */}
      </div>
    </a>
  );
};
