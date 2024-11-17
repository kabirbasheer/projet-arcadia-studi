'use client'; // Ajouter cette directive au début du fichier

import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import { Logo } from '@/components/atoms/Logo';
import { Button } from '@/components/molecules/Button';

import { customNavbarTheme } from './theme';
import { Typography } from '@/components/atoms/Typography/Typography';

export const NavbarMobile = () => {
  const pathname = usePathname();
  const [shadow, setShadow] = useState<number>(0);
  const scrollThreshold = 20;

  const navbarList = [
    {name: 'Accueil', link: '/',},
    {name: 'Services du Zoo', link: '/Services',},
    {name: 'Les habitats', link: '/Habitats',},
    {name: 'Contactez-nous', link: '/Contact',},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlowbiteNavbar
      theme={customNavbarTheme(undefined)}
      // className={`transition-shadow duration-300 ${shadow > scrollThreshold ? 'shadow-[0_0px_5px_2px_rgba(212,212,212,1)]' : ''}`}
    >
      {/* <Logo />
      <div onClick={() => setIsOpen(!isOpen)}>
        <FlowbiteNavbar.Toggle barIcon={isOpen ? HiOutlineX : HiMenu} />
      </div> */}
      <FlowbiteNavbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-primary-500">Flowbite React</span>
      </FlowbiteNavbar.Brand>

      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse>
        {navbarList.map((page) => (
          <FlowbiteNavbar.Link
            as={Link}
            key={page.link}
            href={page.link}
          >
            <Typography customClassName={`hover:border-primary-400 hover:border-b-2  text-base ${pathname === page.link ? 'border-b-2 border-primary-700' : ''}`} color="dark">
              {page.name}
              </Typography>
          </FlowbiteNavbar.Link>
        ))}
          {/* <Button size="s" color="primary" href='/connexion'>
            Connexion
          </Button> */}
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};
