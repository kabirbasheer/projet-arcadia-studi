'use client';

import { CardItem } from "../cardItem/cardItem";
import { useRouter } from 'next/navigation';

export const CardHomepage = () => {
  const router = useRouter();

  const cardData = [
    {
      title: 'Services',
      description:
        'Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées.',
      imgSrc: '/images/carousel-2.webp',
      buttonText: 'Voir les services',
      link: '/services',
    },
    {
      title: 'Habitats',
      description:
        'Explorez les différents habitats de notre zoo, comme la savane, la jungle et le marais.',
      imgSrc: '/images/carousel-2.webp',
      buttonText: 'Explorer les habitats',
      link: '/habitats',
    },
    {
      title: 'Tarifs',
      description: 'Consultez nos tarifs pour planifier votre visite au zoo.',
      imgSrc: '/images/carousel-2.webp',
      buttonText: 'Voir les tarifs',
      link: '/tarifs',
    },
    {
      title: 'Contact',
      description:
        'Vous avez des questions ou des suggestions ? Contactez-nous facilement ici.',
      imgSrc: '/images/carousel-2.webp',
      buttonText: 'Nous contacter',
      link: '/contact',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 w-full gap-x-5 border-2 border-primary-100">
      {cardData.map((card, index) =>(
        <div className=" border-2 border-primary-100">
        <CardItem
          title={card.title}
          key={index}
          description={card.description}
          imgSrc={card.imgSrc}
          buttonText={card.buttonText}
          onClick={() => router.push(card.link)}
          horizontal={false}
        />
        </div>
      ))}
    </div>
  )
}