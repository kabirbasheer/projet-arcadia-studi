import { FlowbiteFooterTheme } from 'flowbite-react';

export const customFooterTheme: FlowbiteFooterTheme = {
  root: {
    base: 'grid pt-10 md:pt-10 justify-center bg-zinc-50 lg:px-0 md:px-10 px-0 bg-secondary-50',
    container: '',
    bgDark: ''
  },
  groupLink: {
    base: 'grid md:gap-y-5 gap-y-3 items-center justify-items-center md:justify-items-start',
    link: {
      base: 'text-lg leading-7 text-slate-900',
      href: ''
    },
    col: ''
  },
  icon: {
    base: 'text-red-500 dark:hover:text-white',
    size: 'h-9 w-9'
  },
  title: {
    base: 'text-primary-700 text-[22px] normal-case font-bold'
  },
  divider: {
    base: 'md:w-full md:border-stone-300 p-5'
  },
  copyright: {
    base: 'w-full text-base text-neutral-400 md:mb-9 mb-4',
    href: '',
    span: ''
  },
  brand: {
    base: 'mb-4',
    img: 'mr-3 h-8',
    span: 'self-center whitespace-nowrap text-2xl font-semibold text-red-800'
  }
};
