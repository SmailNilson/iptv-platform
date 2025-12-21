import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    children: React.ReactNode;
    href?: string;
    target?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    fullWidth = false,
    className,
    children,
    href,
    ...props
}) => {
    const rootClassName = [
        styles.button,
        styles[variant],
        fullWidth ? styles.fullWidth : '',
        className
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <Link href={href} className={rootClassName} {...(props as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={rootClassName} {...props}>
            {children}
        </button>
    );
};
