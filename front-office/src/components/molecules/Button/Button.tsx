import Link from 'next/link';
import * as React from 'react';
import clsxm from '@/utils/clsxm';

type ButtonColor = 'primary' | 'secondary';
type ButtonVariant = 'transparent' | 'underline' | 'outline';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type ButtonProps = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      className,
      color = 'primary',
      variant,
      size = 's',
      type = 'button',
      href,
      as = 'button',
      ...props
    },
    ref,
  ) => {
    let Component = as;

    if (href) {
      Component = href.startsWith('/') ? Link : 'a';
    }

    return (
      <Component
        ref={ref}
        type={type}
        href={href}
        className={clsxm(
          'flex items-center justify-center gap-2 rounded-md text-base focus:outline-none focus-visible:ring focus-visible:ring-primary-500 hover:bg-primary-500',
          className,
          //*=========== Size ===========
          [
            size === 's' && 'w-[120px] h-9',
            size === 'm' && 'w-[270px] h-11',
            size === 'l' && 'w-full h-11',
          ],
          //*=========== Colors ===========
          [
            color === 'primary' && 'bg-primary-500 hover:bg-primary-600',
            color === 'secondary' &&
              'bg-secondary-950 border-2 border-secondary-700 hover:bg-secondary-700 hover:border-none',
          ],
          //*=========== Variants ===========
          [
            variant === 'transparent' &&
              'bg-transparent enabled:hover:bg-transparent',
            variant === 'underline' &&
              'bg-transparent underline underline-offset-4 decoration-primary-500 hover:decoration-primary-600 enabled:hover:bg-transparent',
            variant === 'outline' &&
              'bg-white enabled:hover:bg-white border border-primary-500 justify-center hover:shadow-sm',
          ],
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Button.displayName = 'Button';
