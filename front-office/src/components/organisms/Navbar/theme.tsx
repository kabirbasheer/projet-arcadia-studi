import { FlowbiteNavbarTheme } from 'flowbite-react';

export const customNavbarTheme = (
  isOpen: boolean | undefined,
): FlowbiteNavbarTheme => ({
  root: {
    base: 'px-4 w-full bg-secondary-50 flex flex-row justify-center',
    rounded: {
      on: 'rounded',
      off: '',
    },
    bordered: {
      on: '',
      off: '',
    },
    inner: {
      base: 'w-full flex justify-between items-center lg:flex-row flex-wrap px-5 py-2 lg:p-0',
      fluid: {
        on: '',
        off: '',
      },
    },
  },
  brand: {
    base: '',
  },
  collapse: {
    base: 'w-full lg:block lg:w-auto h-screen lg:h-auto mt-16 lg:mt-0',
    list: 'flex flex-col justify-start lg:flex-row lg:space-x-8 lg:font-medium lg:items-center gap-y-10 lg:gap-y-0',
    hidden: {
      on: 'hidden',
      off: '',
    },
  },
  link: {
    base: 'hover:text-secondary-700 hover:border-b-2',
    active: {
      on: '',
      off: '',
    },
    disabled: {
      on: '',
      off: '',
    },
  },
  toggle: {
    base: 'text-primary-500 rounded-[10px]',
    icon: 'h-[42px] w-[42px] shrink-0',
  },
});
