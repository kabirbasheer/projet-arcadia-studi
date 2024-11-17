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
  as?: React.ElementType;  // Ajout de la prop 'as' dynamique
};

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ children, className, color = 'primary', variant, size = 's', type = 'button', href, as = 'button', ...props }, ref) => {
    // Déterminer l'élément à rendre en fonction de la prop 'as'
    let Component = as;

    // Si 'href' est défini, utiliser Link pour une URL interne ou 'a' pour un lien externe
    if (href) {
      Component = href.startsWith('/') ? Link : 'a';
    }

    // Appliquer dynamiquement les classes et autres props
    return (
      <Component
        ref={ref}
        type={type}
        href={href} // Passe l'attribut href si nécessaire
        className={clsxm(
          'flex items-center justify-center gap-2 rounded-md text-base focus:outline-none focus-visible:ring focus-visible:ring-primary-500 hover:bg-primary-500',
          className, // Les classes passées en props
          //*=========== Size ===========
          [
            size === 's' && 'w-[120px] h-9',
            size === 'm' && 'w-[270px] h-11',
            size === 'l' && 'w-full h-11'
          ],
          //*=========== Colors ===========
          [
            color === 'primary' && 'bg-primary-500 hover:bg-primary-600 disabled:bg-gray-200 focus:ring-transparent enabled:hover:bg-primary-500',
            color === 'secondary' && 'bg-secondary-700 text-white hover:border-secondary-700 hover:border-2 shadow-none hover:bg-secondary-50 hover:text-secondary-700 disabled:bg-gray-200 focus:ring-transparent enabled:hover:bg-transparent'
          ],
          //*=========== Variants ===========
          [
            variant === 'transparent' && 'bg-transparent enabled:hover:bg-transparent',
            variant === 'underline' && 'bg-transparent underline enabled:hover:bg-transparent',
            variant === 'outline' && 'bg-white enabled:hover:bg-white border border-primary-500 justify-center hover:shadow-sm'
          ]
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
