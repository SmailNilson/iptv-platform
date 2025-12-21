import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
    label?: string;
    as?: 'input' | 'select';
    children?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    as = 'input',
    className,
    children,
    ...props
}) => {
    const Component = as as any;

    return (
        <div className={`${styles.inputWrapper} ${className || ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <Component
                className={`${styles.input} ${as === 'select' ? styles.select : ''}`}
                {...props}
            >
                {children}
            </Component>
        </div>
    );
};
