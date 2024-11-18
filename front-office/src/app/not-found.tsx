import React from 'react';
import { Button } from '@/components/molecules/Button';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col gap-4 items-center h-screen justify-center bg-secondary-950 gap-y-10'>
      <h1 className='md:text-4xl text-2xl font-bold text-secondary-700'>404 | Page introuvable</h1>
      <p className='md:text-xl text-lg'>La page que vous recherchez n'existe pas.</p>
      <Button size='m' href='/' color='secondary'>Retour à l'accueil</Button>
    </div>
  );
}
