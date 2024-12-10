'use client';

import { Carousel } from '@/components/organisms/carousel/carousel';
import { Header } from '@/components/organisms/Header';
import { CardItem } from '@/components/organisms/cardItem/cardItem';
import { useRouter } from 'next/navigation';
import { CardSchedule } from '@/components/organisms/cardSchedule';
import { Typography } from '@/components/atoms/Typography';
import { CardReview } from '@/components/organisms/cardReview';
import { CardHomepage } from '@/components/organisms/cardHomepage/cardHomepage';
import { Card } from '@/components/molecules/Card/card';

export default function Home() {
  const router = useRouter();

  const CardScheduleData = [
    { day: 'Lundi :', time: '9h à 21h' },
    { day: 'Mardi :', time: '9h à 21h' },
    { day: 'Mercredi :', time: '9h à 21h' },
    { day: 'Jeudi :', time: '9h à 21h' },
    { day: 'Vendredi :', time: '9h à 21h' },
    { day: 'Samedi :', time: '9h à 23h' },
    { day: 'Dimanche :', time: '9h à 23h' },
  ];

  const commentData = [
    { pseudo: "Jean Dupont", comment: "Très bon zoo, les animaux ont l'air heureux !", note: 4, date: "01/01/2024" },
    { pseudo: "Marie Martin", comment: "Une expérience incroyable, la visite guidée était top !Une expérience incroyable, la visite guidée était top !Une expérience incroyable, la visite guidée était top !Une expérience incroyable, la visite guidée était top !Une expérience incroyable, la visite guidée était top !", note: 5, date: "01/09/2024"  },
    { pseudo: "Lucie Lemoine", comment: "Zoo bien entretenu, un peu cher pour les enfants.", note: 3, date: "10/10/2024"  },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col justify-start items-center md:min-h-[600px] w-full bg-secondary-100 md:py-10 py-5">
        <div className="flex items-center">
          <Header />
        </div>
        <div className="md:h-[500px] md:w-[600px] h-[300px] w-full flex justify-center items-center md:py-10 py-4 px-10 md:px-0">
          <Carousel />
        </div>
      </div>

      <div className="grid grid-cols-4 justify-items-center gap-5 md:min-h-[600px] w-full bg-secondary-950 md:py-10 py-5">
        <div className='flex justify-center w-[400px] h-[600px] py-20'>
          <Card
            imgSrc="/images/carousel-2.webp"
            orientation="vertical" // Définir l'orientation (horizontal)
            color= "secondary"
            title="Services"
            description="Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées."
            href="/services" // Lien vers la page des services
            size='l'
            className='hover:shadow-lg hover:shadow-slate-500 rounded-2xl'
          />
        </div>
        <div className='flex justify-center w-[400px] h-[600px] py-20'>
          <Card
            imgSrc="/images/carousel-2.webp"
            orientation="vertical" // Définir l'orientation (horizontal)
            color= "secondary"
            title="Services"
            description="Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées."
            href="/services" // Lien vers la page des services
            size='l'
            className='hover:shadow-lg hover:shadow-slate-500 rounded-2xl'
          />
        </div>
        <div className='flex justify-center w-[400px] h-[600px] py-20'>
          <Card
            imgSrc="/images/carousel-2.webp"
            orientation="vertical" // Définir l'orientation (horizontal)
            color= "secondary"
            title="Services"
            description="Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées."
            href="/services" // Lien vers la page des services
            size='l'
            className='hover:shadow-lg hover:shadow-slate-500 rounded-2xl'
          />
        </div>
        <div className='flex justify-center w-[400px] h-[600px] py-20'>
          <Card
            imgSrc="/images/carousel-2.webp"
            orientation="vertical" // Définir l'orientation (horizontal)
            color= "secondary"
            title="Services"
            description="Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées."
            href="/services" // Lien vers la page des services
            size='l'
            className='hover:shadow-lg hover:shadow-slate-500 rounded-2xl'
          />
        </div>
        <div className='flex justify-center w-[400px] h-[600px] py-20'>
          <Card
            imgSrc="/images/carousel-2.webp"
            orientation="vertical" // Définir l'orientation (horizontal)
            color= "secondary"
            title="Services"
            description="Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées."
            href="/services" // Lien vers la page des services
            size='l'
            className='hover:shadow-lg hover:shadow-slate-500 rounded-2xl'
          />
        </div>
      </div>

      {/* Cards Schedule Section */}
      <div
        id="horaires"
        className="flex flex-col justify-center items-center gap-y-8 bg-primary-500 md:pb-20 md:pt-10 py-10"
      >
        <Typography variant="componentTitle" color="secondary" customClassName='flex justify-center'>
          Horaires d'ouverture
        </Typography>
        <Typography variant="paragraph" color='white'>
          Découvrez nos horaires d'ouverture pour chaque jour de la semaine.
        </Typography>
        <CardSchedule
          title="Horaires d'ouverture"
          time={CardScheduleData.map((list, index) => (
            <div key={index} className="flex flex-row justify-between px-20">
              <Typography variant="paragraph" color="dark">
                {list.day}
              </Typography>
              <Typography variant="paragraph" color="dark">
                {list.time}
              </Typography>
            </div>
          ))}
          imgSrc="/images/carousel-2.webp"
        />
      </div>

      {/* Cards Review Section */}
      <div className=" md:p-20 p-10 bg-secondary-100">
        <Typography variant="componentTitle" color="darkGray" customClassName='flex justify-center pb-10'>Avis des visiteurs</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commentData.map((avis, index) => (
            <CardReview
              key={index}
              pseudo={avis.pseudo}
              date={avis.date}
              comment={avis.comment}
              note={avis.note}
            />
          ))}
        </div>
    </div>
    </div>
  );
}
