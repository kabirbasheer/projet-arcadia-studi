"use client";

import { Carousel } from "@/components/organisms/carousel/carousel";
import { Header } from "@/components/organisms/Header";
import { CardItem } from "@/components/organisms/cardItem/cardItem";
import { useRouter } from "next/navigation";
import { CardSchedule } from "@/components/organisms/cardSchedule";
import { Typography } from "@/components/atoms/Typography";

export default function Home() {
  const router = useRouter();

  const CardScheduleData = [
    { day: "Lundi :", time: "9h à 21h" },
    { day: "Mardi :", time: "9h à 21h" },
    { day: "Mercredi :", time: "9h à 21h" },
    { day: "Jeudi :", time: "9h à 21h" },
    { day: "Vendredi :", time: "9h à 21h" },
    { day: "Samedi :", time: "9h à 23h" },
    { day: "Dimanche :", time: "9h à 23h" },
  ];

  const cardData = [
    {
      title: "Services",
      description:
        "Découvrez tous les services proposés par notre zoo, y compris la restauration et les visites guidées.",
      imgSrc: "/images/carousel-1.webp",
      buttonText: "Voir les services",
      link: "/services",
    },
    {
      title: "Habitats",
      description:
        "Explorez les différents habitats de notre zoo, comme la savane, la jungle et le marais.",
      imgSrc: "/images/carousel-1.webp",
      buttonText: "Explorer les habitats",
      link: "/habitats",
    },
    {
      title: "Tarifs",
      description: "Consultez nos tarifs pour planifier votre visite au zoo.",
      imgSrc: "/images/carousel-1.webp",
      buttonText: "Voir les tarifs",
      link: "/tarifs",
    },
    {
      title: "Contact",
      description:
        "Vous avez des questions ou des suggestions ? Contactez-nous facilement ici.",
      imgSrc: "/images/carousel-1.webp",
      buttonText: "Nous contacter",
      link: "/contact",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-secondary-50">
      {/* Carousel Section */}
      <div className="flex flex-col items-center md:min-h-[70vh] w-full bg-secondary-100 pb-5">
        {/* Header en position relative uniquement à partir de md */}
        <div className="md:relative md:z-10 h-[200px] flex items-center">
          <Header />
        </div>

        {/* Carousel en position absolute uniquement à partir de md */}
        <div className="md:h-[75vh] w-full h-[300px] flex justify-center items-center md:absolute md:top-10 md:left-0">
          <Carousel />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-12 p-6 bg-secondary-100 pb-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex items-center justify-center w-full md:w-1/2">
              <CardItem
                title={card.title}
                description={card.description}
                imgSrc={card.imgSrc}
                buttonText={card.buttonText}
                onClick={() => router.push(card.link)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Cards Schedule Section */}
      <div id="horaires" className="flex flex-col justify-center items-center gap-y-8 bg-primary-500 py-10 px-5">
        <h2 className="text-2xl font-bold text-center text-secondary-100 p-5">
          Horaires d'ouverture
        </h2>
        <p className="text-center text-secondary-100">
          Découvrez nos horaires d'ouverture pour chaque jour de la semaine.
        </p>
        <CardSchedule
          title="Horaires d'ouverture"
          time={CardScheduleData.map((list, index) => (
            <div key={index} className="flex flex-row justify-between px-20">
              <Typography variant="paragraph" color="dark">{list.day}</Typography>
              <Typography variant="paragraph" color="dark">{list.time}</Typography>
            </div>
          ))}
          imgSrc="/images/carousel-1.webp"
        />
      </div>
    </div>
  );
}
