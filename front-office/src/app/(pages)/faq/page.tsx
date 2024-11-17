// front-office/src/app/faq/page.tsx
import React from 'react';
import Link from 'next/link'; // Importez le composant Link de Next.js

export default function FAQ() {
  return (
    <div>
      <h1>Page FAQ</h1>
      <p>Voici les questions fréquemment posées.</p>
      <ul>
        <li>Question 1: Comment utiliser ce site ?</li>
        <li>Question 2: Où puis-je trouver plus d'informations ?</li>
      </ul>
      
      {/* Lien vers la page d'accueil */}
      <p>
        Retour à la <Link href="/">page d'accueil</Link>.
      </p>
    </div>
  );
}
