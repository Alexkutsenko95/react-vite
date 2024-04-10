import { FC, ButtonHTMLAttributes, ReactElement } from 'react';
import { ButtonVariant } from '@/components/Button/constants.ts';
import './Button.styles.css';


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
}

export const Button: FC<IButtonProps> =
  ({
     text,
     variant = ButtonVariant.DEFAULT,
     ...props
   }): ReactElement => (
    <button className={`btn btn-${variant}`} {...props}>
      {text}
    </button>
  );