'use client';

import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import { Logo } from '@/components/atoms/Logo';
import { Typography } from '@/components/atoms/Typography/Typography';

import { customNavbarTheme } from './theme';
import { Button } from '@/components/molecules/Button/Button';

export const NavbarMobile = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navbarList = [
    { name: 'Accueil', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Les habitats', link: '/Habitats' },
    { name: 'Contactez-nous', link: '/Contact' },
    { name: 'Horaires', link: '/#horaires' }, // Lien vers l'ancre "Horaires"
  ];

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <FlowbiteNavbar theme={customNavbarTheme(undefined)}>
      <div className="flex lg:items-center justify-between w-full">
        <Logo />

        {/* Custom Toggle Button */}
        <button
          className="text-primary-500 p-2 rounded-md focus:outline-none lg:hidden"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? (
            <HiOutlineX className="h-10 w-10" />
          ) : (
            <HiMenu className="h-10 w-10" />
          )}
        </button>
      </div>

      {/* Collapse (menu) */}
      <FlowbiteNavbar.Collapse
        className={`${isOpen ? 'block' : 'hidden'} lg:block`}
      >
        {navbarList.map((page) => (
          <FlowbiteNavbar.Link
            as={Link}
            key={page.link}
            href={page.link}
            onClick={handleCloseMenu} // Fermer le menu lorsque l'utilisateur clique sur un lien
          >
            <Typography
              customClassName={`hover:border-primary-400 w-fit hover:border-b-2 text-base ${
                pathname === page.link
                  ? 'border-b-2 border-primary-700 w-fit'
                  : ''
              }`}
              color="dark"
            >
              {page.name}
            </Typography>
          </FlowbiteNavbar.Link>
        ))}
        <Button size="l" color="primary" href="/connexion">
          Connexion
        </Button>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};
