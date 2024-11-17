import { FlowbiteNavbarTheme } from 'flowbite-react';

export const customNavbarTheme = (isOpen: boolean | undefined): FlowbiteNavbarTheme => ({
  root: {
    base: 'px-4 w-full bg-secondary-50 flex flex-row justify-center',
    rounded: {
      on: 'rounded',
      off: ''
    },
    bordered: {
      on: '',
      off: ''
    },
    inner: {
      base: 'w-full flex justify-between items-center',
      fluid: {
        on: '',
        off: ''
      }
    }
  },
  brand: {
    base: ''
  },
  collapse: {
    base: 'w-full lg:block lg:w-auto h-screen lg:h-auto mt-16 lg:mt-0',
    list: 'flex flex-col lg:flex-row lg:space-x-8 lg:font-medium lg:items-center gap-y-10 lg:gap-y-0',
    hidden: {
      on: 'hidden',
      off: ''
    }
  },
  link: {
    base: 'hover:text-secondary-700 hover:border-b-2',
    active: {
      on: '',
      off: ''
    },
    disabled: {
      on: '',
      off: ''
    }
  },
  toggle: {
    base: `text-primary-500 rounded-[10px] lg:hidden ${isOpen === true ? 'bg-primary-100' : 'bg-transparent'}`, // Clean base styles for the toggle
    icon: 'h-[42px] w-[42px] shrink-0' // Icon only, no extra styles or content
  }
});
