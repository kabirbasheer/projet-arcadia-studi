'use client';

import { Footer as FlowbiteFooter } from 'flowbite-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDeviceMobile, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { customFooterTheme } from './theme';
import { Logo } from '@/components/atoms/Logo';
import { useResponsive, DeviceSize } from '@/hooks/useResponsive';
import { Typography } from '@/components/atoms/Typography/Typography';

export const Footer = () => {
    const { deviceSize } = useResponsive();

    const adressList = [
        { name: "forêt de Brocéliande, en bretagne" },
        { name: "+33 1 12 34 56", icon: HiOutlinePhone },
        { name: "+33 6 12 34 56", icon: HiOutlineDeviceMobile },
        { name: "contact@arcadia-zoo.fr", icon: HiOutlineMail }
    ];
    
    const aboutList = [
        { name: "Accueil", link: '/' },
        {name: 'Services du Zoo', link: '/Services',},
        {name: 'Les habitats', link: '/Habitats',},
        {name: 'Contactez-nous', link: '/Contact',}
    ];
    
    const legalList = [
        { name: "FAQ", link: '/faq' },
        { name: "Données personnelles", link: '/donnees-personnelles' },
        { name: "Règles de confidentialite", link: '/regle-confidentialite' }
    ];
    
    const socialList = [
        { name: "Facebook", icon: FaFacebook, link: '#' },
        { name: "Twitter", icon: FaLinkedin, link: '#' },
        { name: "Instagram", icon: FaInstagram, link: '#' },
    ];


    let footerSize = '';
    if (deviceSize <= DeviceSize.sm) {
        footerSize = 'max-w-screen-sm';
    } else if (deviceSize < DeviceSize.lg) {
        footerSize = 'max-w-screen-lg';
    } else if (deviceSize > DeviceSize.lg) {
        footerSize = 'xl:w-[1180px] w-auto';
    }

    const footerWidth =
        deviceSize <= DeviceSize.md
        ? 'w-[350px]'
        : deviceSize <= DeviceSize.lg
            ? 'w-52'
            : deviceSize <= DeviceSize.xl
            ? 'w-[300px]'
            : 'w-[350px]';

    return (
        <FlowbiteFooter container={true} theme={customFooterTheme}>
        <div className={`${footerSize}  grid md:grid-cols-4 md:gap-x-7 gap-y-5 md:gap-y-0`}>
        <div className="grid grid-cols-1 md:content-start justify-items-center md:justify-items-start gap-y-5 p-5">
            <Logo />
            <div className="flex items-center md:items-start flex-col md:gap-y-4 gap-y-3">
            {adressList.map((list, index) => (
                <div className={`flex items-center gap-x-3 text-primary-900`} key={index}>
                {list.icon && <list.icon />}
                <Typography customClassName="text-base font-normal text-start text-slate-900" fontFamily="secondary">
                    {list.name}
                </Typography>
                </div>
            ))}
            </div>
        </div>
        <div className={`grid md:justify-around md:content-start md:justify-items-start justify-items-center gap-y-4 p-5 ${footerWidth}`}>
            <FlowbiteFooter.Title theme={customFooterTheme.title} title="A propos" />
            <FlowbiteFooter.LinkGroup theme={customFooterTheme.groupLink}>
            {aboutList.map((list, index) => (
                <FlowbiteFooter.Link theme={customFooterTheme.groupLink.link} key={index} href={list.link}>
                    <Typography customClassName="flex items-center text-base font-normal" fontFamily="secondary">
                    {list.name}
                    </Typography>
                </FlowbiteFooter.Link>
            ))}
            </FlowbiteFooter.LinkGroup>
        </div>
        <div className={`grid md:justify-around md:content-start md:justify-items-start justify-items-center gap-y-4 p-5 ${footerWidth}`}>
            <FlowbiteFooter.Title theme={customFooterTheme.title} title="Informations légales" />
            <FlowbiteFooter.LinkGroup theme={customFooterTheme.groupLink}>
            {legalList.map((list, index) => (
                <FlowbiteFooter.Link theme={customFooterTheme.groupLink.link} key={index} href={list.link}>
                    {list.name}
                </FlowbiteFooter.Link>
            ))}
            </FlowbiteFooter.LinkGroup>
        </div>
        <div className={`grid md:justify-around md:content-start md:justify-items-start justify-items-center gap-y-4 p-5 ${footerWidth}`}>
            <FlowbiteFooter.Title theme={customFooterTheme.title} title="Réseaux sociaux" />
            <FlowbiteFooter.LinkGroup theme={customFooterTheme.groupLink}>
            {socialList.map((list, index) => (
                <FlowbiteFooter.Link theme={customFooterTheme.groupLink.link} key={index} href={list.link}>
                <div className={`flex items-center gap-x-3`}>
                    {list.icon && <list.icon />}
                    {list.name}
                </div>
                </FlowbiteFooter.Link>
            ))}
            </FlowbiteFooter.LinkGroup>
        </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="max-w-screen-md md:w-[1180px] grid grid-rows-1 md:justify-start justify-center">
        <FlowbiteFooter.Copyright theme={customFooterTheme.copyright} by=" Arcadia Zoo" year={new Date().getFullYear()} />
        </div>
    </FlowbiteFooter>
    );
};