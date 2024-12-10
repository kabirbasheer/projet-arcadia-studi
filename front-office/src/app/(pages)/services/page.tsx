'use client';

import React from 'react';
import { CardItem } from '@/components/organisms/cardItem/cardItem';
import { useRouter } from 'next/navigation';
import { Typography } from '@/components/atoms/Typography';

const cardService = [
  {
    title: 'Découvrir les Animaux',
    description:
      'Apprenez-en plus sur les animaux du zoo, leur mode de vie et leurs caractéristiques uniques.',
    imgSrc: '/images/carousel-2.webp',
    buttonText: 'Voir les animaux',
    link: '/animaux',
  },
  {
    title: 'Habitats du Zoo',
    description:
      'Explorez les différents habitats tels que la savane, la forêt tropicale ou encore les milieux aquatiques.',
    imgSrc: '/images/carousel-2.webp',
    buttonText: 'Explorer les habitats',
    link: '/habitats',
  },
  {
    title: 'Laisser un Avis',
    description:
      'Partagez votre expérience au zoo avec d’autres visiteurs en laissant un commentaire.',
    imgSrc: '/images/carousel-2.webp',
    buttonText: 'Donner mon avis',
    link: '/avis',
  },
  {
    title: 'Services du Zoo',
    description:
      'Découvrez les services proposés, comme la restauration, les boutiques et les visites guidées.',
    imgSrc: '/images/carousel-2.webp',
    buttonText: 'Explorer les services',
    link: '/services',
  },
  {
    title: 'Tarifs et Horaires',
    description:
      'Consultez les tarifs, les horaires et les informations pratiques pour organiser votre visite.',
    imgSrc: '/images/carousel-2.webp',
    buttonText: 'Consulter les tarifs',
    link: '/tarifs',
  },
  {
    title: 'Contactez-nous',
    description:
      'Vous avez une question ? Contactez notre équipe pour obtenir une réponse rapide.',
    imgSrc: '/images/carousel-2.webp',
    buttonText: 'Nous contacter',
    link: '/contact',
  },
];

export default function Services() {
  const router = useRouter();
  return (
    <div className="p-6 bg-secondary-100 md:py-20 pb-10 flex flex-col justify-center items-center md:gap-y-20 gap-y-10">
        <Typography variant='componentTitle' color='primary'>
          Voici nos services
        </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 w-full gap-x-5">
        {cardService.map((card, index) => (
          <div key={index} className="flex justify-center">
            <CardItem
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              buttonText={card.buttonText}
              onClick={() => router.push(card.link)}
              horizontal={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
