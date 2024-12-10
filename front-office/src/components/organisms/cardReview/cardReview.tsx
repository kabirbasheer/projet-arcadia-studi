import { Typography } from "@/components/atoms/Typography";
import React from "react";

interface CardReviewProps {
  pseudo: string;
  date: string;
  comment: string;
  note: number;
}

export const CardReview: React.FC<CardReviewProps> = ({ pseudo, date,comment, note }) => {
  // Fonction pour générer les étoiles
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-md">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row justify-between border-b-2 border-secondary-950/20 shadow-sm pb-2">
          <Typography variant="paragraph" color="gray">{pseudo}</Typography>
          <Typography variant="paragraph" color="gray">{date}</Typography>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="w-fit">{renderStars(note)}</div>
          <Typography variant="paragraph" color="gray">{comment}</Typography> 
        </div>
      </div>
    </div>
  );
};

export default CardReview;
